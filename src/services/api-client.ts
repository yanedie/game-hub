import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "14cdb9d729944e8db6f524d1f9b91b66",
  },
});
