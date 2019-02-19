import axios from 'axios';
const URL = axios.create({
    baseURL: 'src/components/data'
});
export function getData() {
    return URL.get('data.json').then(res => { return res }).catch(error => { return { error: error } });
}