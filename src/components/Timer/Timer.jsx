import Moment from "react-moment";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState([new Date()]);

  useEffect(() => {
    setTime((prev) => [...prev, time]);
  }, []);
  console.log(new Date());

  const now = moment().format("LTS");
  // moment([2007, 0, 29]).fromNow();
  // var a = moment([2007, 0, 28]);
  // var b = moment([2007, 0, 29]);
  // a.from(b); // "a day ago"

  console.log("now: ", now);

  return <Moment interval={1000} durationFromNow format="HH:mm:ss"></Moment>;
}

//   const format = "hh:mm:ss";
//   moment.duration("00:00:00");

// import { useState, useEffect, useRef } from "react";

// export default function Timer() {
//   // const [time, setTime] = useState(new Date());
//   const initialDate = new Date(Date.now());
//   const [time, setTime] = useState([initialDate]);
//   //   const pad = (value) => {
//   //     return String(value).padStart(2, "0");
//   //   };

//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//   const dt_in = new Date(2007, 2, 11, 23, 59, 59);
//   const now = new Date();
//   //   setTime((prev) => [...prev, dt_in]);
//   //   console.log("dt_in", dt_in);
//   //   console.log("now", now);
//   const count = now.getTime() - dt_in.getTime();
//   console.log(count);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       //   setTime(new Date());
//       const currentTime = Date.now();
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return <p>{time.map((t) => t.toLocaleTimeString())}</p>;
// }
