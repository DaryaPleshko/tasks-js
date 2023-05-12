const { getAllEnvironmentDB, createEnvironmentDB, updateEnvironmentDB } = require('../repository/environment.repository');

const getAllEnvironment = async () => {
    const data = await getAllEnvironmentDB();
    return data;
}

const createEnvironment = async (label, category, priority) => {
    const data = await createEnvironmentDB(label, category, priority);
    return data;
}

const updateEnvironment = async (id, label, category, priority) => {
    const data = await updateEnvironmentDB(id, label, category, priority);
    return data;
}

module.exports = { getAllEnvironment, createEnvironment, updateEnvironment }