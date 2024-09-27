import { io } from "socket.io-client";

const serverURL = process.env.NODE_ENV === 'production' ? 'https://sketchbook-server-44mq.onrender.com' : 'http://localhost:3001'; 
export const socket = io(serverURL);