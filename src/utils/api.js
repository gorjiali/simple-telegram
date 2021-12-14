const baseURL = "https://my-json-server.typicode.com/gorjiali/jp-st";
const errorMsg = "something went wrong try again";

function handleError(error = null) {
  alert(errorMsg);
  return error;
}

function fetchProfile() {
  return fetch(`${baseURL}/profile`)
    .then((res) => {
      if (!res.ok) throw new Error(handleError());
      return res.json();
    })
    .then((profile) => {
      return profile;
    })
    .catch((error) => handleError(error));
}

function fetchGroups() {
  return fetch(`${baseURL}/groups`)
    .then((res) => {
      if (!res.ok) throw new Error(handleError());
      return res.json();
    })
    .then((groups) => {
      return groups;
    })
    .catch((error) => handleError(error));
}

export function fetchMessages(groupId) {
  return fetch(`${baseURL}/messages/?group_id=${groupId}`)
    .then((res) => {
      if (!res.ok) throw new Error(handleError());
      return res.json();
    })
    .then((messages) => {
      return messages;
    })
    .catch((error) => handleError(error));
}

export function fetchInitialData() {
  return Promise.all([fetchProfile(), fetchGroups()])
  .then((res) => res);
}
