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
    special_request: faker.helpers.arrayElement(['Late Checkout', 'Gluten Free', 'None', 'Birthday Gift', ]),
    room_type: faker.helpers.arrayElement(['Suite','Single Bed', 'Double Bed', 'Double Bed Superior', 'Deluxe A']),
    status: faker.datatype.number({min:1, max:3}),
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
    img:faker.helpers.arrayElement([
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  ]),
    bed_type: faker.helpers.arrayElement(['Suite','Single Bed', 'Double Bed', 'Double Bed Superior', 'Deluxe A']),
    room_floor: faker.helpers.arrayElement(['Floor A-1','Floor A-2', 'Floor B-2', 'Floor B-1']),
    amenities: faker.helpers.arrayElement(['Tv - WiFi','Coffe Set', 'LED TV - AC', 'WiFi - Coffee Set - LED TV - AC', 'Towel - Double Bed']),
    rate: faker.datatype.number({min:150, max:500}),
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