import { styled } from "styled-components";

const Layout = styled.div`
  width: 500px;
  height: 700px;
  /* background-color: black; */
`;

const Location = styled.div`
  text-align: center;
  font-size: 30px;
  /* color: white; */
`;

const Temp = styled.div`
  text-align: center;
  font-size: 50px;
  /* color: white; */
`;

const Desc = styled.div`
  text-align: center;
`;

const ConWrap = styled.div``;

const Con = styled.div``;

export const Weather = ({ data }) => {
  const {
    name,
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = data;

  return (
    <Layout>
      <Location>{data.name}</Location>
      <Temp>{data.main.temp}°</Temp>
      <Desc>{data.weather[0].description}</Desc>
      <ConWrap>
        <Con>
          <p>체감온도</p>
          <p>{data.main.feels_like}°</p>
        </Con>
        <Con>
          <p>최고온도</p>
          <p>{data.main.temp_max}°</p>
        </Con>
        <Con>
          <p>최저온도</p>
          <p>{data.main.temp_min}°</p>
        </Con>
      </ConWrap>
    </Layout>
  );
};
