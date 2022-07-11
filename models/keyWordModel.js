const { readFile, writeFile } = require('fs/promises');

const getData = async () => {
  try {
    const textData = await readFile('database/infor.json', 'utf-8');
    const data = JSON.parse(textData);

    return { code: 200, data };
  } catch (err) {
    console.log(err);
  }
};

const create = async (displayName, queryText, fulfillmentText) => {
  try {
    const data = {
      intent: displayName,
      queryUser: queryText,
      queryChatbot: fulfillmentText
    };

    const stringData = JSON.stringify(data, null, 2);
    
    await writeFile('database/infor.json', stringData);
    return { code: 201 };
  } catch (err) {
    console.log(err);
  }
};

const clear = async () => {
  try {
    const data = {
      intent: '',
      queryUser: '',
      queryChatbot: ''
    };

    const stringData = JSON.stringify(data, null, 2);
  
    await writeFile('database/infor.json', stringData);
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
