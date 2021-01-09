export default function actFetchApi(url) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    return fetch(baseUrl +  url).then(response => response.json());
}
