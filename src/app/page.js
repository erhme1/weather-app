"use client";
import { useState, useEffect } from "react";
import { WhiteSquare,Circle,CircleGray,Searchinput,Square,MidCircle,} from "./component";
import { Card } from "./Imagechange";
const API_KEY = "a9bd50909a544a9c84172455241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [forecastDate, setForecastDate] = useState("");
  const [dayweather, setDayWeather] = useState({
    number: 0,
    condition: "",
  });
  const [nightweather, setNightWeather] = useState({
    number: 0,
    condition: "",
  });
 
  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
 
  const onPressEnter = (e) => {
    if (e.code === "Enter" && search.trim()) {
      setCity(search);
    }
  };
 
  useEffect(() => {
    if (city) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          const forecastDay = data.forecast?.forecastday[0];
 
          const date = new Date(forecastDay.date);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          setForecastDate(formattedDate);
 
          setDayWeather({
            number: Math.round(forecastDay.day.maxtemp_c),
            condition: forecastDay.day.condition.text,
          });
          setNightWeather({
            number: Math.round(forecastDay.day.mintemp_c),
            condition: forecastDay.hour[23].condition.text,
          });
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);
 
  return (
    <div className="h-screen w-full flex justify-center overflow-hidden">
      <div className="bg-stone-50 w-full h-[1200px] flex items-center flex-col-reverse justify-between pb-[200px] pt-[50px] rounded-l-[50px] text-black">
        <Card
          value="day"
          city={city}
          weather={dayweather}
          forecastDate={forecastDate}
        />
        <Searchinput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />
      </div>
 
      <div className="relative w-full h-[1200px] bg-[#0F141E] flex items-center flex-col-reverse justify-between pb-[200px]">
        <MidCircle size={160} top={420} left={-80} />
        <Circle size={340} top={330} left={-170} />
        <CircleGray size={340} top={330} left={-170} />
        <Circle size={540} top={230} left={-270} />
        <CircleGray size={540} top={230} left={-270} />
        <Circle size={940} top={50} left={-460} />
        <CircleGray size={940} top={50} left={-460} />
        <Circle size={1340} top={-120} left={-650} />
        <CircleGray size={1340} top={-120} left={-650} />
        <Circle size={1740} top={-300} left={-880} />
        <CircleGray size={1740} top={-300} left={-880} />
        <Card
          value="night"
          city={city}
          weather={nightweather}
          forecastDate={forecastDate}
        />
        <Square size={100} top={326} left={-0} />
        <Square size={100} top={574} left={-0} />
        <WhiteSquare size={40} top={390} left={-12} />
        <WhiteSquare size={40} top={566} left={-12} />
        <img src="leftlogo.png" className="absolute top-[450px] left-[-50px]" />
        <img src="rightlogo.png" className="absolute top-[450px] left-[10px]" />
      </div>
    </div>
  );
}