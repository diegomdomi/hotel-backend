
import { Router } from "express";
import { getUser, getUsers, postUser, updateUser, deleteUser } from '../controllers/users'

const router = Router();

router.get('/', getUsers);
router.get("/:userid", getUser);
router.put("/:userid", updateUser);
router.post("/", postUser);
router.delete("/:userid", deleteUser);

export { router };