import { RECIEVE_MESSAGES, ADD_MESSAGE } from "../actions/messages";

export default function messages(state = {}, action) {
  switch (action.type) {
    case RECIEVE_MESSAGES:
      return {
        ...state,
        [action.value.groupId]: action.value.messages,
      };
    case ADD_MESSAGE:
      const { groupId, newMessage } = action.value;
      return {
        ...state,
        [groupId]: state[groupId].concat([newMessage])
      }
    default:
      return state;
  }
}
