const mongoose = require('mongoose');
import 'dotenv/config';
const userName = process.env.USER_NAME;
const password = process.env.PAASMONGODB;
const cluster_pass = process.env.PASSCLUSTERS;
const endpoint = process.env.ENDPOINTCLUSTER;


const uri = `mongodb+srv://${userName}:${cluster_pass}${endpoint}`
const connection =  async (): Promise<void> => {
  try{
    await mongoose.connect(uri)
  }
  catch(err){
    console.log(err);
  }
}

module.exports = connection

// const disconnect = async (): Promise<void> => {
//   await mongoose.disconnect();
// }

// module.exports = disconnect