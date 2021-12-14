import { RECIEVE_PROFILE } from "../actions/profile";

export default function profile(state = null, action) {
  switch (action.type) {
    case RECIEVE_PROFILE:
      return action.value;
    default:
      return state;
  }
}
