const { getAllDataDb, getDataByIdDb, createDataDb, updateDataDb, patchDataDb, deleteDataDb } = require('../repository/user.repository');

const getAllData = async () => {
  const data = await getAllDataDb();
  if (!data.length) throw new Error('Array is empty');
  return data;
};

const getDataById = async id => {
  const data = await getDataByIdDb(id);
  if (!data.length) throw new Error('Array with this id is empty');
  return data;
};

const createData = async (name, surname, birth, city, age) => {
  const data = await createDataDb(name, surname, birth, city, age);
  if (!data.length) throw new Error(`The value didn't come from the client`);
  return data;
};

const updateData = async (id, name, surname, birth, city, age) => {
  const data = await updateDataDb(id, name, surname, birth, city, age);
  if (!data.length) throw new Error(`Array with this id is empty`);
  return data;
};

const patchData = async (id, clientData) => {
  const data = await patchDataDb(id, clientData);
  if (!data.length) throw new Error(`Array with this id is empty`);
  return data;
}

const deleteData = async id => {
  const data = await deleteDataDb(id);
  if (!data.length) throw new Error(`Array with this id is empty`);
  return data;
};

module.exports = { getAllData, getDataById, createData, updateData, patchData, deleteData };
