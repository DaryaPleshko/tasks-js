const {
  getAllEnvironmentDb,
  getEnvironmentByIdDb,
  createEnvironmentDb,
  updateEnvironmentDb,
  deleteEnvironmentDb,
} = require('../repository/environment.repository.js');

const getAllEnvironment = async () => {
  const data = await getAllEnvironmentDb();
  if (!data.length) throw new Error('массив data пустой');
  return data;
};

const getEnvironmentById = async id => {
  const data = await getEnvironmentByIdDb(id);
  if (!data.length) throw new Error('такого id нет');
  return data;
};

const createEnvironment = async (label, category, priority) => {
  const data = await createEnvironmentDb(label, category, priority);
  if (!data.length) throw new Error('данные не сохранены');
  return data;
};

const updateEnvironment = async (id, label, category, priority) => {
  const data = await updateEnvironmentDb(id, label, category, priority);
  if (!data.length) throw new Error('такого id нет');
  return data;
};

const deleteEnvironment = async id => {
  const data = await deleteEnvironmentDb(id);
  if (!data.length) throw new Error('такого id нет');
  return data;
};

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment };
