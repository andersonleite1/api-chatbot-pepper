const { readFile, writeFile } = require('fs/promises');

const getUser = async () => {
  try {
    const textData = await readFile('database/user.json', 'utf-8');
    const user = JSON.parse(textData);

    return { code: 200, user };
  } catch (err) {
    console.log(err);
  }
};

const create = async (username) => {
  try {
    const data = {
      username: username
    };

    const stringData = JSON.stringify(data, null, 2);
    
    await writeFile('database/user.json', stringData);
    return { code: 201 };
  } catch (err) {
    console.log(err);
  }
};

const clear = async () => {
  try {
    const data = {
      username: ""
    };

    const stringData = JSON.stringify(data, null, 2);
  
    await writeFile('database/user.json', stringData);
    return { code: 200 };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUser,
  create,
  clear,
};
