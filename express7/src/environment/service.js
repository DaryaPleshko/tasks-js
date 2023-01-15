const { createdEnvironmentDB, getAllEnvironmentDB, getEnvironmentByIdDB, putEnvironmentDB, deleteEnvironmentDB } = require("./repository")

const createdEnvironment = async (environment) => {
    const values = await createdEnvironmentDB(environment)
    return values;
};

const getAllEnvironment = async () => {
    const values = await getAllEnvironmentDB();
    return values;
}

const getEnvironmentById = async (id) => {
    const values = await getEnvironmentByIdDB(id);
    return values;
}

const putData = async (id, fromClient) => {
    const values = await putEnvironmentDB(id, fromClient);
    return values;
}

const deleteData = async (id) => {
    const values = await deleteEnvironmentDB(id);
    return values;
}

module.exports = { createdEnvironment, getAllEnvironment, getEnvironmentById, putData, deleteData }