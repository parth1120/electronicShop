import axios from "axios";


const urls = [
    'https://run.mocky.io/v3/5d9e1de2-e6e7-49fa-a4ac-7c510226f0ef',
    'https://run.mocky.io/v3/14ae4112-0c3f-44cc-b76f-4d81626f41fb',
    'https://run.mocky.io/v3/04413f6f-6708-4fb4-9d5d-82beebc8b9a4',
    'https://run.mocky.io/v3/e2341566-fe26-4896-8217-da3b74cf5d2d',
    'https://run.mocky.io/v3/0fe546bd-f433-4ceb-8723-96610f8a745b'
]

export const getData = (index) => {
    return axios.get(urls[index]);
}