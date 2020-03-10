import axios from "axios";

export default function server() {
  return axios.create({
    baseURL: "http://35.236.151.184"
  });
}
