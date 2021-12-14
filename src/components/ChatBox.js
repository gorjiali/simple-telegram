import * as React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleRecieveMessages, addMessage } from "../actions/messages";
import styles from "./ChatBox.module.css";

export default function ChatBox() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const profile = useSelector((state) => state.profile);
  let { groupId } = useParams();
  const [input, setInput] = React.useState("");

  const onSendMessage = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(addMessage(profile, input, groupId));
      setInput("");
    }
  };

  const isAuthedUserMsg = (senderId) => {
    return profile && senderId === profile.id;
  };

  React.useEffect(() => {
    dispatch(handleRecieveMessages(groupId));
  }, [groupId, dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.listWrapper}>
        {!messages[groupId] ? (
          <div className="loading">Loading...</div>
        ) : (
          <ul className={styles.list}>
            {messages[groupId].map((message) => (
              <li
                key={message.id}
                className={styles.listItem}
                style={{
                  flexDirection: isAuthedUserMsg(message.sender_id)
                    ? "row-reverse"
                    : "row",
                }}
              >
                <figure className={styles.itemImageWrapper}>
                  <img
                    src={message.sender_avatar}
                    alt={`${message.sender_username} avatar`}
                    className={styles.itemImage}
                  />
                </figure>
                <p
                  className={styles.itemContent}
                  style={{
                    backgroundColor: isAuthedUserMsg(message.sender_id)
                      ? "rgb(226, 226, 255)"
                      : "rgb(223, 223, 223)",
                  }}
                >
                  {message.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <form className={styles.newMsgForm} onSubmit={(e) => onSendMessage(e)}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.formBtn} type="submit">
          send
        </button>
      </form>
    </section>
  );
}
