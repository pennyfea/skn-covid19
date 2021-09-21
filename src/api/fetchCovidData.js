import axios from "axios";

const mMediaGroupStats = axios.create({
    baseURL: 'https://covid-api.mmediagroup.fr/v1'
});

const novelCOVIDAPI = axios.create({
    baseURL: 'https://coronavirus-19-api.herokuapp.com'
});

export {
    mMediaGroupStats,
    novelCOVIDAPI
  };