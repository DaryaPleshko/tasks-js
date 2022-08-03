const express = require("express");//импортируем библиотеку экспресс в папку
const app = express();//вызываем экспресс. переменная имеет все библиотеки экспресса
const { Task } = require("./src/task") //импорт данных 


app.get('/', (request, response) => {
    const task = new Task();
    response.send(task.taskFunc()) 
}) //метод маршрута get принимает url и колбэк

app.get('/about', (request, response) => {//два обязательных параметра запрос->ответ
    response.send(`Route 2`)//метод send отправляет данные клиенту
})
app.get('/contact', (request, response) => {
    response.send(`Route 3`)
    console.log(`route`)
})
app.get('/:id', (request, response) => {
    const { id } = request.params
    response.send(id)
})
app.get('/num/:num', (request, response) => {
    const task = new Task()
    const { num } = request.params
    response.send(task.taskSplit(num))
})

const port = 8000;
app.listen(port, () => {
    console.log(`Cервер работает`);
})//слушатель

//localhost:8000/
// чтобы поставить сервер- node app
// сонтрл С - чтобы выключить
// npm init 
//
//