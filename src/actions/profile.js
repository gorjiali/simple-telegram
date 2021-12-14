export const RECIEVE_PROFILE = "RECIEVE_PROFILE";

export function recieveProfile(profile) {
  return {
    type: RECIEVE_PROFILE,
    value: profile,
  };
}
