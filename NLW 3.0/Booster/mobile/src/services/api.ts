import axios from "axios";

const ip = "192.168.2.109"; //ip do servidor
const port = "3333"; //porta utilizada no servidor

const api = axios.create({
  baseURL: `http://${ip}:${port}`,
});
export default api;
