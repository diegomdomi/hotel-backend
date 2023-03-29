const mongoose = require('mongoose');
import 'dotenv/config';
const userName = process.env.USER_NAME;
const password = process.env.PAASMONGODB;
const cluster_pass = process.env.PASSCLUSTERS


const uri = `mongodb+srv://${userName}:${cluster_pass}@hotelmiranda.mvvxivx.mongodb.net/hotelmirandaDb?retryWrites=true&w=majority`
const connection =  async (): Promise<void> => {
  try{
    await mongoose.connect(uri)
  }
  catch(err){
    console.log(err);
  }
}

module.exports = connection