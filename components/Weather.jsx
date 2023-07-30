import React from "react";
import Image from "next/image";
const Weather = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className="relative flex   justify-between  w-5/6 flex-col  max-w-[500px]  m-auto ">
        <div className="relative flex justify-between">
          <div className="flex flex-col  items-center">
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              width={100}
              height={100}
            />
            <p className=" text-2xl sm:text-2xl text-white">
              {data.weather[0].main}
            </p>
          </div>
          <div>
            <p className="sm:text-5xl text-3xl sm:pt-3 pt:-2 sm:my-5 my-4 text-white">
              {data.main.temp.toFixed(0)}°C
            </p>
          </div>
        </div>

        <div className="relative bg-black/50 text-white mx-2 rounded-md p-8">
          <p className="text-2xl md:max-w-2x text-center">
            Weather in {data.name}
          </p>
          <div className="effectweat">
            <div>
              <p className="">Temperatue</p>
              <p className=""> {data.main.temp.toFixed(1)}°C</p>
            </div>
            <div>
              <p>Humidity</p>
              <p> {data.main.humidity}%</p>
            </div>
            <div>
              <p>Wind speed</p>
              <p> {data.wind.speed}</p>
            </div>
          </div>
          <div className="effectweat">
            <div>
              <p>Maximum Temp.</p>
              <p> {data.main.temp_max}</p>
            </div>
            <div>
              <p>Pressure </p>
              <p>{data.main.pressure} mbar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
