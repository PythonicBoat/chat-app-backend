import { Router } from "express";
import {
  createInvite,
  createRoom,
  getAllRooms,
  getRoomMessages,
  join,
  removeRoom,
} from "../controllers/room";
import { getUser } from "../middlewares/user";

export const roomRouter = Router();

roomRouter.post("/create", getUser, createRoom);
roomRouter.get("/getallroom", getUser, getAllRooms);
roomRouter.get("/getroommessages/:roomId", getUser, getRoomMessages);
roomRouter.get("/join/:id", getUser, join);
roomRouter.post("/invite", getUser, createInvite);
roomRouter.delete("/delete/:roomId", getUser, removeRoom);
