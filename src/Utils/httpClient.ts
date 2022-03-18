const BASE_URL = "https://rickandmortyapi.com/api";

//export function get(path: string) {
//return fetch(BaseUrl + path).then((result) => result.json());
//}
export const getCharacters = (path?: string) => {
  return fetch(path || BASE_URL + "/character").then((result) => result.json());
};

export const getCharacter = (path: string) => {
  return fetch(BASE_URL + path).then((result) => result.json());
};
