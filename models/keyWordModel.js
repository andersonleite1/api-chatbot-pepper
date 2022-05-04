const { writeFile } = require('fs/promises');

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
  create,
  clear,
};
