const { getAllEnvironmentDB } = require('../repository/environment.repository');

const getAllEnvironment = async () => {
    const data = await getAllEnvironmentDB();
    return data;
}

module.exports = { getAllEnvironment }