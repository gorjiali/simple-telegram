import { fetchMessages } from "../utils/api";

export const RECIEVE_MESSAGES = "RECIEVE_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

function recieveMessages(messages, groupId) {
  return {
    type: RECIEVE_MESSAGES,
    value: { messages, groupId },
  };
}

export function addMessage({ id, username, avatar }, input, groupId) {
  const newMessage = {
    "id": `${Date.now()}`,
    "group_id": groupId,
    "sender_id": id,
    "sender_avatar": avatar,
    "sender_username": username,
    "content": input
  }
  return {
    type: ADD_MESSAGE,
    value: { newMessage, groupId },
  };
}

export function handleRecieveMessages(groupId) {
  return (dispatch) => {
    return fetchMessages(groupId).then((messages) =>
      dispatch(recieveMessages(messages, groupId))
    );
  };
}
