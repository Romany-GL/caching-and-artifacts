const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

export { fetchData, sum };
