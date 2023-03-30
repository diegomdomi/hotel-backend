import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';
import { User } from './src/interfaces/userDb';
import { Bookings } from './src/interfaces/bookingsDb';
import { Room } from './src/interfaces/roomDb';
import { bookingModel } from './src/models/bookingModel';
import { userModel } from './src/models/userModel';
import { roomModel } from './src/models/roomModel';

const connectionM = require('./src/database/connectionMongo')

async function mongoTest() {
  try{
    await connectionM();
    // await dataBookings(10);
    // await dataUsers(10);
    // await dataRoom(10);
    await mongoose.disconnect();
  }catch(err){
    console.log(err);
  }
}

mongoTest() 

export function createRandomBookings(i: number): Bookings {
  return {
    id: i + 1,
    img: faker.image.avatar(),
    guest: faker.name.firstName(),
    order_date:  faker.date.past(),
    check_in: faker.date.past(),
    check_out: faker.date.past(),
    special_request: faker.company.catchPhrase(),
    room_type: faker.company.catchPhraseAdjective(),
    status: faker.datatype.number({min:1, max:2}),
  };
}


const dataBookings = async (bookings:number) => {
  let bookingsList = [];
  for(let i = 0; i < bookings; i++){
      const booking = await createRandomBookings(i);
      bookingsList.push(booking);
  }
  await bookingModel.create(bookingsList);
  console.log(bookingsList);
}

export function createRandomUser(i:number): User {
  return {
    id: i +1,
    pass:bcrypt.hashSync(faker.internet.password(), 6),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    first_name: faker.name.firstName(),
    job_desk: faker.name.jobTitle(),
    schedules: faker.date.past(),
    contact: faker.phone.imei(),    
    status: faker.datatype.number({min:1, max:2}),
  };
}

const dataUsers = async (users: number) => {
  let userList = [];
  for(let i = 0; i < users; i++){
      const user = await createRandomUser(i);
      userList.push(user);
    }
    await userModel.create(userList);
}

export function createRandomRoom(i:number): Room {
  return {
    id:i+1,
    img: faker.image.avatar(),
    bed_type: faker.name.firstName(),
    room_floor: faker.datatype.number(10),
    amenities: faker.company.catchPhrase(),
    rate:faker.datatype.number(10),
    status: faker.datatype.number({min:1, max:2}),
  };
}

const dataRoom = async (room:number) => {
  let roomList = [];
  for(let i = 0; i < room; i++){
     const room = await createRandomRoom(i);
     roomList.push(room);
  }
  await roomModel.create(roomList);

}