export const RECIEVE_GROUPS = "RECIEVE_GROUPS";

export function recieveGroups(groups) {
   return {
      type: RECIEVE_GROUPS,
      value: groups
   }
}