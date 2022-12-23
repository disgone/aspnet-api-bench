import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 100,
    duration: "60s"
};

export default function () {
    const res = http.get('http://localhost:5200/weatherforecast');
    check(res, {
        'response code was 200': (res) => res.status == 200,
    });
}