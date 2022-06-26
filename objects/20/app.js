//Анаграмма. Решить являются ли 2 строки анаграммами. Если да, то в ключ объекта добавить true, в противном случае false

let obj = {};
let valueA = 'анна'.trim().toLowerCase().replaceAll(/[^a-zа-яё]/g, '').split('').sort().join('');
let valueB = 'ннаа'.trim().toLowerCase().replaceAll(/[^a-zа-яё]/g, '').split('').sort().join('');
let rez = 0;
if (valueA === valueB) obj.avg = true;
else obj.avg = false;