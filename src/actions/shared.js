import { fetchInitialData } from "../utils/api";
import { recieveProfile } from "./profile";
import { recieveGroups } from "./groups";

export function handleInitialData() {
   return (dispatch) => {
      return fetchInitialData().then(([profile, groups]) => {
         dispatch(recieveProfile(profile));
         dispatch(recieveGroups(groups)); 
      })
   }
}