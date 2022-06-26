let base = [
    { "id": "javascript", "label": "Javascript", "category": "programmingLanguages", "priority": 4 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 4 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 4 },
    { "id": "c++", "label": "python", "category": "programmingLanguages", "priority": 4 },
]
let input = { id: "c++", "label": "C++", "category": "programmingLanguages", "priority": 4 }
let res = base.filter(element => element.id === input.id)
if (res.length > 0) {
    let bd = base.filter(element => element.id != input.id);
    bd.push(input);
    base = bd;
}
else console.log(`error`);
console.log(base);