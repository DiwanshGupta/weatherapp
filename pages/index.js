import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";

export default function Home() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState({});
  const [loading, setloading] = useState(false);

  const apiKey = "595912425b10b60d4dd2c417ef62f525";
  // const aurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      // Handle the case where 'city' is empty
      alert("Wrong city enter");
      return;
    }

    try {
      setloading(true);
      const aurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(aurl);
      setweather(response.data);
      setloading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // You can handle the error here, e.g., display an error message to the user.
    }

    setcity("");
  };

  return (
    <>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://source.unsplash.com/1600x900/?weather,city"
        layout="fill"
        className="object-cover"
      />
      <div className="relative flex  justify-between items-center my-5 max-w-[500px] w-full m-auto pt-4 ">
        <form
          className=" border-2 md:w-full  w-11/12 p-2 flex justify-between items-center  m-auto rounded-tr-lg rounded-bl-lg sm:rounded-lg"
          onSubmit={fetchWeather}
        >
          <input
            className="m-2 sm:m-4 bg-green-200 sm:w-4/5  focus:border-none rounded-xl p-1 sm:p-2 focus:outline-none "
            type="text"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            placeholder="Enter city name"
          />
          <button
            className=" text-orange-700 text-1xl sm:text-2xl w-1/5  ml-0 hover:text-2xl sm:hover:text-3xl  rounded-lg  sm:p-3 sm:p-5"
            type="submit"
          >
            <BsSearch />
          </button>
        </form>
        <br />
        {/* Display weather data here using the 'weather' state */}
      </div>
      <div className="">{weather.main && <Weather data={weather} />}</div>
    </>
  );
}
