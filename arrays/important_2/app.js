let base = [
    { "id": "javascript", "label": "Javascript", "category": "programmingLanguages", "priority": 4 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 4 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 4 },
    { "id": "python", "label": "python", "category": "programmingLanguages", "priority": 4 },
]
let input = { "label": "C++", "category": "programmingLanguages", "priority": 4 }
let res = base.filter(element => element.label === input.label)
if (res.length === 0) {
    base.push({ id: input.label.toLowerCase(), ...input })
}
console.log(base);