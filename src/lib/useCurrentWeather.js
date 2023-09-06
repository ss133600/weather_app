import { useEffect, useState } from "react";

export const useCurrentWeather = () => {
  const defaultLat = 35.15793268247596;
  const defaultLon = 129.0593051119102;
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLat);
  //   최소 오류 난것을 안보여주기위한 것도 있음

  const location = (pos) => {
    // console.log(pos);
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    //   => 현재 위치 정보를 가져오는 메서드
  }, [lat, lon]);
  //   =>페이지가 랜더링 되었을때 한번만 실행, 랜더링 후 실행,
  //   업데이트가 되었을때 실행 등을 지정할 수 있음

  return {
    lat,
    lon,
  };
};
