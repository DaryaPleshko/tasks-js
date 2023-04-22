const array = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
    { "id": "firebasestorage", "label": "Firebase Storage", "category": "databases", "priority": 2 },
    { "id": "ibmcloudant", "label": "IBM Cloudant", "category": "databases", "priority": 2 },
    { "id": "react", "label": "React", "category": "webTechnologies", "priority": 1 },
    { "id": "angularjs", "label": "ANGULARJS", "category": "webTechnologies", "priority": 1 },
    { "id": "redux", "label": "Redux", "category": "webTechnologies", "priority": 1 },
    { "id": "materialui", "label": "Material UI", "category": "webTechnologies", "priority": 1 },
    { "id": "git", "label": "Git", "category": "otherSkills", "priority": 2 },
    { "id": "adobephotoshop", "label": "Adobe Photoshop", "category": "otherSkills", "priority": 2 },
];

const getValues = () => {
    return array;
}

const getValuesById = (id) => {
    const filtered = array.filter(el => el.id == id);
    return filtered;
}

const createValues = (label, category, priority) => {
    array.push({ id: label.toLowerCase(), label, category, priority });
    return array;
}

const updareValues = (id, label, category, priority) => {
    const filtered = array.filter(el => el.id != id);
    if (filtered.length !== array.length) {
        filtered.push({ id: label.toLowerCase(), label, category, priority });
        return filtered;
    } else {
        return `id is empty`;
    }
}

const deleteValues = (id) => {
    const filtered = array.filter(el => el.id != id);
    return filtered;
}

module.exports = { getValues, getValuesById, createValues, updareValues, deleteValues }