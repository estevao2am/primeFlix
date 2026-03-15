import axios from "axios";

// BASE API : https://api.themoviedb.org/3/

// URL DA API : /movie/now_playing?api_key=8761c57d71624a34dcc17a72b9b1ae49

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
