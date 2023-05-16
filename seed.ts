import { faker } from '@faker-js/faker';
import bcrypt from "bcrypt";
import { User } from './src/interfaces/userDb';
import { Bookings } from './src/interfaces/bookingsDb';
import { Room } from './src/interfaces/roomDb';
import connection,{ dbQuery } from './src/database/queryConnect';
import { IReviews } from './src/interfaces/contact';

async function run(): Promise<void> {
  await connection.connect();
  // await dataUsers(10)
  // await dataBookings(20)
  // await dataRoom(20)
  await dataReviews(10)
  await connection.end()
}

run()

export function createRandomUser(): User {
  return {
    idUser:faker.datatype.number(10),
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
  for(let i = 0; i < users; i++){
      const user = await createRandomUser()
      await dbQuery('INSERT INTO users SET ?', user)
  }
}

export function createRandomBookings(): Bookings {
  return {
    idBooking:faker.datatype.number(10),
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
  for(let i = 0; i < bookings; i++){
      const booking = await createRandomBookings()
      await dbQuery('INSERT INTO booking SET ?', booking)
  }
}

export function createRandomRoom(): Room {
  return {
    idRoom:faker.datatype.number(10),
    img: faker.image.avatar(),
    bed_type: faker.name.firstName(),
    room_floor: faker.datatype.number(10),
    amenities: faker.company.catchPhrase(),
    rate:faker.datatype.number(10),
    status: faker.datatype.number({min:1, max:2}),
  };
}

const dataRoom = async (room:number) => {
  for(let i = 0; i < room; i++){
      const room = await createRandomRoom()
      await dbQuery('INSERT INTO room SET ?', room)
  }
}


const dataReviews = async (number: number)=> {

  for (let i = 0; i < number; i++) {
    const review = await createRandomReviews()
    await dbQuery("INSERT INTO reviews SET ?", review);
  }
}

export  function createRandomReviews():IReviews {
  return  {
    id:faker.datatype.number(10),
    date: faker.date.past(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number("+## ## ### ## ##"),
    subject: faker.company.catchPhrase(),
    comment: faker.random.words(30),
  };
}