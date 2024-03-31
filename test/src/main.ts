import axios from 'axios'

const main = async () => {
  const response = await axios.post('http://localhost:3000/');
  
  console.log(response.data);
}

main();
