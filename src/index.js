import { sayHello } from './helpers.js';
import axios from 'axios';
import './index.css';

const message = sayHello('Студент')
console.log(message);

console.log("hello");

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log('Дані з сервера:', response.data);
    })
    .catch(function (error) {
        console.error('Помилка:', error);
    });


