import { Router } from 'express';
import { getRoom, getRooms, postRoom, updateRoom, deleteRoom } from '../controllers/rooms'

const routerRooms = Router()
routerRooms.get('/', getRooms);
routerRooms.get("/:roomid", getRoom);
routerRooms.put("/:roomid", updateRoom);
routerRooms.post("/", postRoom);
routerRooms.delete("/:roomid", deleteRoom);
export { routerRooms }





