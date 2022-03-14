const BaseUrl = "https://rickandmortyapi.com/api";
export function get(path) {
  return fetch(BaseUrl + path).then((result) => result.json());
}
