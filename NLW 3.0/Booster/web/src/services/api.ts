import axios from "axios";
const server="192.168.2.109";
const port="3333";
const api = axios.create({
  baseURL:`http://${server}:${port}`,
})
export default api;