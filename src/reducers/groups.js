import { RECIEVE_GROUPS } from "../actions/groups";

export default function groups(state = null, action) {
  switch (action.type) {
    case RECIEVE_GROUPS:
      return action.value;
    default:
      return state;
  }
}
