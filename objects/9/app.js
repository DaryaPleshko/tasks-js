// На вход подается объект. Необходимо проверить пустой он или нет. Если же пустой, то выводим false, если же он содержит хотя бы одну пару (ключ: значение), то true

let obj = {},
    value = 0
for (let key in obj) {
    if (obj[key]) value += 1;
}
if (value) console.log(true);
else console.log(false);
