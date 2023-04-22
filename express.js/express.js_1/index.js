const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    const arr = [1, 2, 2, 3, 3];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) newArr.push(arr[i]);
    }
    response.send(newArr);
});

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const array = [1, 2, 3, 4, 5, 6];
    const wrapper = [];
    let item = [];
    for (let i = 0; i < array.length; i++) {
        item.push(array[i]);
        if (item.length == id) {
            wrapper.push(item);
            item = [];
        }
    }
    response.send(wrapper);
});

app.get('/about', (request, response) => {
    response.send('about');
});

app.get('/contact', (request, response) => {
    response.send('contact');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});