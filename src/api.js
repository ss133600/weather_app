import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "ac75a126d6676fa6e44c86da4db97295",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = () => {
  const lat = 35.15793268247596;
  const lon = 129.0593051119102;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => console.log(response.data));
};

// *axios
// => npm i axios
// => 포론트에서 필요한 데이터를 서버에 요청하는데
// url에 필요한 변수값 등을 설정함
