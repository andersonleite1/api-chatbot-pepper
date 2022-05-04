const { readFile, writeFile } = require('fs/promises');

const getData = async (displayName) => {
  try {
    const textData = await readFile('data/infor.json', 'utf-8');
    const data = JSON.parse(textData);

    return { code: 200, data };
  } catch (err) {
    console.log(err);
  }
};

const create = async (displayName) => {
  try {
    const data = {
      name: displayName
    };

    const stringData = JSON.stringify(data, null, 2);
    
    await writeFile('data/infor.json', stringData);
    return { code: 201 };
  } catch (err) {
    console.log(err);
  }
};

const clear = async () => {
  try {
    const data = {
      name: ''
    };

    const stringData = JSON.stringify(data, null, 2);
  
    await writeFile('data/infor.json', stringData);
    return { code: 200 };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getData,
  create,
  clear,
};
