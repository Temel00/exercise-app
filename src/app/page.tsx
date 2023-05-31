"use client";

import {useState, useEffect} from "react";
import {Combobox} from "@headlessui/react";
import {CheckIcon} from "@heroicons/react/20/solid";
import Exercise from "./components/Exercise";

const muscles = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];

export default function Home() {
  const [muscle, setMuscle] = useState("abdominals");
  const [query, setQuery] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let options = {
        method: "GET",
        headers: {"x-api-key": "V/8dfnt3pXoRZNHFo0Hzpg==WnBd89Tek66c3fVj"},
      };
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/exercises?muscle=` + muscle,
          options
        );
        const data = await res.json();
        setExercises(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [muscle]);

  const filteredMuscle =
    query === ""
      ? muscles
      : muscles.filter((musc) => {
          return musc.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="homeContent flex flex-col item-center text-center gap-3">
        <h1>Click a group</h1>
        <svg
          enableBackground="new 0 0 500 304"
          height="304"
          viewBox="0 0 500 304"
          width="500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={
              muscle === "abdominals" ? {fill: "#2222ff"} : {fill: "#999999"}
            }
            onClick={() => {
              setMuscle("abdominals");
            }}
            className="abdominals"
          >
            <path d="m162.5 130.8c.1-2.7.1-5.6.1-8.3 0-5.7-2.5-8.2-8.2-8.4-1.7-.1-2.7.4-2.5 2.4.2 2.4 0 5.1.6 7.4 1.4 5.9 3 11.7 4.9 17.3.3 1 2.1 1.5 3.2 2.2.6-1.1 1.6-2.1 1.7-3.3.3-2.9.2-6 .2-9.3z" />

            <path d="m165.7 130.6c.2 0 .5 0 .7.1 0 3.1-.1 6.3.1 9.4.1 1.2.9 2.3 1.5 3.4 1.1-.7 2.3-1.3 3.4-2 .4-.3.6-.9.8-1.4 3-7.6 4.5-15.6 4.9-23.7 0-.6-.2-1.5-.6-1.8-1.6-1.3-8.5.6-8.8 2.7-.9 4.3-1.4 8.8-2 13.3z" />
            <path d="m150.5 131.3c-.6-7.4-1-14-1.9-20.5-.3-1.7-2.2-3.5-3.8-4.8-1.9-1.5-3-.8-3.1 1.7-.2 4.1 0 8.1-.8 12-1.2 6.2 2.9 9.9 7.8 12.2.4.1 1.5-.6 1.8-.6z" />
            <path d="m187.3 119.9c0-4.1.1-8.2 0-12.3 0-2.1-1-2.8-2.9-1.9-2.3 1.1-4.2 2.9-4.5 5.7-.7 6.2-1.1 12.5-1.7 18.7-.2 2.1.8 2.6 2.5 1.7 5.6-3.3 8.2-6.1 6.6-11.9z" />
            <path d="m162.6 108.4c0-5.9-1-6.8-6.7-6.3-3.8.4-6.5 5.1-4.7 8.5.3.6 1.3.9 2.1 1.1 1.4.3 2.8.2 4.3.5 5 1.4 5 1.6 5-3.8z" />
            <path d="m166.3 113.4c3.8-.5 7.1-1 10.4-1.6.4-.1.8-.9.9-1.4.8-2.6-.1-5.6-2-7-1.7-1.3-6.8-1.5-8.4-.3-.4.3-.9 1-.9 1.5z" />
            <path d="m162.6 99.8c0-1.7 0-3.4 0-5.1 0-4.5-1.7-5.7-5.9-4.1-1.3.5-2.5 1.3-3.7 2.2-2.5 2.3-3 6-1.5 7.8 3.8-.3 7.2-.5 11.1-.8z" />
            <path d="m177.5 100.7c1-2.4.6-4.9-1.2-7.1-2-2.4-4.8-3.8-8-3.3-.7.1-1.8.9-1.9 1.4-.2 2.7-.1 5.6-.1 8.1 3.9.3 7.4.5 11.2.9z" />
            <path d="m151.2 90.7c3.5-1.1 6.8-2 10-3.1.6-.2 1.2-1 1.3-1.7.2-1.2.2-2.5 0-3.8-.1-.6-.8-1.4-1.4-1.5-3.3-.5-6.2.9-8.4 3.1-2 1.9-2.4 4.4-1.5 7z" />
            <path d="m177.5 90.7c1.3-4.7-1-8.4-6.2-9.8-4.2-1.1-5.2-.4-5 3.9 0 1 .5 2.5 1.2 2.8 3.2 1 6.6 2 10 3.1z" />
          </g>

          <g
            style={
              muscle === "abductors" ? {fill: "#2222ff"} : {fill: "#999999"}
            }
            onClick={() => {
              setMuscle("abductors");
            }}
            className="abductors"
          >
            <path d="m144.3 198.9c-.8-5.4-1.7-10.7-2.3-16.1-1.1-9.8-1.5-19.6-.5-29.5.6-6.5 1.2-13 1.7-19.5.1-1-.5-2.1-.7-3.2-.3.1-.6.1-.9.2-5.7 23-4.3 45.6 2.7 68.1z" />
            <path d="m184.5 199.8c7.1-22.8 8.4-45.8 2.4-69.2-.6.6-1.1 1.3-1.1 2 0 1.7.1 3.3.2 5.1.6 7.7 1.5 15.3 1.8 23 .6 13.2-.8 26.3-3.3 39.1z" />
            <path d="m191.4 145.4c0-5.5-.3-11-1.9-16.2-.3 0-.6.1-.9.1.9 5.5 1.8 10.8 2.8 16.1z" />
            <path d="m137.1 144.3c.2 0 .4 0 .6.1.8-5 1.7-9.8 2.5-14.8-.4-.1-.8-.1-1.2-.2-.7 4.9-1.3 9.8-1.9 14.9z" />
            <path d="m362.7 140.2c-1-4.5-1.7-9-2.9-13.5-.8-3.1-2.6-4.2-5.5-4.1-2.8.1-5.3 1.9-6.1 4.6 10.6 6.1 10.6 6.1 14.5 13z" />
            <path d="m310.8 139.7c.2.1.5.2.7.3 1.7-7.4 7.6-10.4 13.9-12.8-1.8-3.4-4.5-5-7.5-4.7-3.1.3-4.3 2.7-4.9 5.4-.8 3.9-1.5 8-2.2 11.8z" />
          </g>

          <g
            style={
              muscle === "adductors" ? {fill: "#2222ff"} : {fill: "#999999"}
            }
            onClick={() => {
              setMuscle("adductors");
            }}
            className="adductors"
          >
            <path d="m161.6 182.7c-3-16.9-10.6-32.3-17-48.6-.6 5.1.3 9.5 2 13.7 4.9 11.8 10 23.4 15 34.9z" />
            <path d="m167.8 182.3c1.2-3.1 2.3-6.3 3.7-9.4 3.5-8.2 7.2-16.3 10.6-24.5 2.2-5.4 2.8-10.2 2.1-13.8-6.3 15.8-13.8 30.9-16.4 47.7z" />
            <path d="m168.8 170c.9-3 1.9-6.1 2.7-9.1.3-1 .1-2.3-.3-3.3-1.5-3-3.2-6-4.8-8.9-1.4 4.4-.1 17.1 2.4 21.3z" />
            <path d="m160.2 170.8c2.6-7.7 3.1-15 2.3-22.4-1.5 2.8-3 5.6-4.5 8.4-.5 1-1.2 2.2-1 3.1.9 3.4 2 6.8 3.2 10.9z" />
            <path d="m154.8 142.7c-3.5 5.2-2.2 9.6 1.5 13.9 5.8-8.9 5.6-9.9-1.5-13.9z" />
            <path d="m173.8 142.3c-1.7 1.5-3.4 3-5.1 4.7-.3.3-.5 1.2-.4 1.6 1.1 2.7 2.4 5.5 3.9 8.5 3.9-5 5.5-9.4 1.6-14.8z" />
            <path d="m178 139.3c-3 1.8-3.1 4.1-.2 6.4 1.3-2.2 2.2-4.2.2-6.4z" />
            <path d="m150.7 139.3c-1.6 2.3-1 4.4.6 6.5 2.6-2.9 2.3-5-.6-6.5z" />
            <path d="m333 155.7c-3.7.3-4.2.9-4.2 4 .1 3.3-.2 6.6 0 9.9.3 5.9.8 11.7 1.2 17.5h.8c2.1-10.5 2.1-20.9 2.2-31.4z" />
            <path d="m342.9 187.1c.2-1.4.4-2.5.6-3.8.4-3.9 1-7.6 1.1-11.5.1-4.2-.4-8.4-.2-12.6.2-2.9-1.1-3.8-3.7-4-1 6 .4 27.5 2.2 31.9z" />
          </g>

          <g
            style={muscle === "biceps" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("biceps");
            }}
            className="biceps"
          >
            <path d="m133.2 71.3c-1.7.7-3.3 1.3-5 2-.6.3-1.3.7-1.5 1.3-1.5 5.9-3.1 11.9-4.3 17.8-.3 1.4.8 4 2 4.7 2 1.2 3.8-.5 5.2-2.1.3-.3.5-.7.7-1.1 3.3-4.7 4.6-10.1 5.7-15.7.7-3 .8-5.7-2.8-6.9z" />
            <path d="m195.1 70.8c-1 1.5-2.8 2.9-2.6 4.1.6 5.9 1.6 11.7 4.7 16.8 1.1 1.8 2.4 3.7 4 5 2.1 1.8 4.6.8 5.1-2 .2-1.1.4-2.3.2-3.4-.7-4-1.7-7.8-2.5-11.8-.8-3.8-2.2-6.9-6.6-7.5-.8-.1-1.3-.6-2.3-1.2z" />
          </g>

          <g
            style={muscle === "calves" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("calves");
            }}
            className="calves"
          >
            <path d="m329.4 256c5.2-6.1-1.5-42.6-7.7-45.1 0 5.2-.1 10.5 0 15.8.2 6.3.7 12.5 1 18.8.3 4.9 3.1 7.9 6.7 10.5z" />
            <path d="m352.3 210.4c-.3-.1-.5-.2-.8-.3-.7 1.3-1.7 2.6-2.2 4.1-1.1 2.9-1.9 6-2.9 8.8-2.7 7.4-4.4 15.1-4.8 23-.2 3.4-.1 7.1 2.4 10.2 3.2-2.8 6.4-5.3 6.6-9.9.3-8.6.9-17.3 1.3-26 .1-3.3.2-6.5.4-9.9z" />
            <path d="m356.2 207.7c-2.4.8-2.7 2.5-2.7 4.2-.1 4.9-.3 9.6-.1 14.5.2 6.9.4 13.8-1.5 20.5-.9 3.2-.2 5.3 2.7 6.8.2-.1.4-.2.6-.4.3-.2.5-.5.7-.8 2.9-5.7 5.1-11.7 4.2-18.3-1-7.2-2.1-14.3-3.1-21.4-.4-1.7-.5-3.4-.8-5.1z" />
            <path d="m318.5 253.8c3.9-2.7 3.4-2.7 2.9-6.7-.8-6.2-1.2-12.4-1.5-18.6-.3-5.9-.2-11.8-.4-17.6 0-1.1-1.1-2.1-1.6-3.2-.3.1-.6.2-.9.4-.5 3.9-1 7.7-1.5 11.6-.8 6.3-1.9 12.5-2.2 18.8-.3 5.6 2 10.6 5.2 15.3z" />
            <path d="m325.3 297.4h.9c.1-.9.2-1.9.3-2.8.7-8.2 1.2-16.3 2-24.5.5-5.6 1.8-11.4-3.1-15.7-.9-.8-2.7-1.6-3.5-1.3-1.5.7-3.3 1.8-2.6 4.4.8 2.8 1.5 5.7 1.9 8.6 1.3 9.7 2.5 19.5 3.8 29.2 0 .6.2 1.3.3 2.1z" />
            <path d="m347.2 297.3h.9c.1-.8.3-1.5.4-2.3.9-8 1.6-15.9 2.7-23.9.6-4.8 1.8-9.4 2.8-14.1.5-2.3-1.2-3.4-2.6-4.2-.7-.4-2.4.5-3.3 1.2-4.2 3.5-4.1 8.3-3.7 13.3.9 9.1 1.5 18.3 2.3 27.4.2.9.4 1.8.5 2.6z" />
          </g>

          <g
            style={muscle === "chest" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("chest");
            }}
            className="chest"
          >
            <path d="m193 70.4c-2.3-1.6-4.4-2.9-6.3-4.4-1.9-1.4-3.8-3-5.8-4.3-3-1.9-6.1-3.8-9.2-5.3-1.2-.6-3.2-.8-4.2-.1-.9.7-1.2 2.6-1.2 4.1 0 3.9.3 7.7.5 11.6 0 .3-.2.7-.3 1-.9 3.4-.1 5.1 3.5 5.7 9.1 1.3 15.9-3.4 23-8.3z" />

            <path d="m136.1 70.3c5.1 4.4 10.4 7.1 16.6 8.3 2 .4 4.3.3 6.3 0 3.4-.6 4.4-2.1 3.5-5.5-.1-.6-.3-1.2-.3-1.8.1-4.3.4-8.5.4-12.7 0-2.3-1.8-3.4-4.1-2.6-2 .8-4.1 1.6-5.8 2.7-5.5 3.6-10.9 7.5-16.6 11.6z" />
            <path d="m191.1 67.3c-1.9-3.2-3.7-6.2-5.3-9.2s-4.2-4.9-7.4-5.8c-2.9-.8-6.5-.2-8.4 1.6 8.7 2.3 14.2 8.5 21.1 13.4z" />
            <path d="m137.8 67.3c6.9-5.1 12.7-11.4 21.3-13.5-4.3-3.3-13.1-1.8-16.2 4.6-1.6 2.9-3.3 5.8-5.1 8.9z" />
          </g>

          <g
            style={
              muscle === "forearms" ? {fill: "#2222ff"} : {fill: "#999999"}
            }
            onClick={() => {
              setMuscle("forearms");
            }}
            className="forearms"
          >
            <path d="m119.2 97.8c-3.5 3.3-5.8 7.8-7.6 15.5-1.9 8.5-3.7 17-9.2 24.3.7-.2 1.3-.5 1.6-1 4-6.2 7.7-12.5 11.7-18.6 4.1-6.2 5.5-12.7 3.5-20.2z" />
            <path d="m225.9 137.8c.2-.1.4-.3.6-.4-4.8-6.2-6.9-13.4-8.6-20.8-1.1-4.7-2.7-9.2-4.5-13.7-.7-1.8-2.2-3.4-3.7-5.4-2.2 8.1-.5 14.8 3.7 21.2 4 5.9 7.5 12 11.3 17.8.3.6.8.9 1.2 1.3z" />
            <path d="m123.6 114c-9.6 5.4-11.4 16.1-17 24.1 5.6-8 11.3-16.1 17-24.1z" />
            <path d="m222.3 137.9c-5.7-7.8-7.3-18.5-16.7-23.6 5.5 7.9 11.1 15.9 16.7 23.6z" />
            <path d="m218.9 140.4c.2-.1.4-.2.5-.3-3.5-7.6-7.4-15.1-13.3-21.3 4.3 7.1 8.6 14.3 12.8 21.6z" />
            <path d="m109 139.8c.3.2.6.3.9.5 4.3-7.2 8.4-14.3 12.7-21.5-.4-.2-.7-.4-1.1-.6-4.1 7.2-8.2 14.4-12.5 21.6z" />
            <path d="m128.5 111.8c-.2-.1-.4-.2-.6-.3-4 7.4-7.9 14.8-11.9 22.3 5-7 10.3-13.6 12.5-22z" />
            <path d="m213.4 134.7c-4.3-7.8-8.4-15.7-12.7-23.5 1.8 9.2 7.5 16.1 12.7 23.5z" />
            <path d="m297 107.7c-.3-.2-.5-.4-.8-.6-2.9 8.6-5.9 17.2-8.8 25.9 6.6-7.9 11.5-16.6 14.5-26.3-1.9.3-3.4.7-4.9 1z" />
            <path d="m371.6 106.7c1.1 6.4 9.4 21.9 13.9 25.8-1.2-4.3-2.3-8.5-3.8-12.7-1.5-4.3-3.2-8.4-5-12.6-.2.2-.4.4-.6.6-1.5-.4-3.1-.8-4.5-1.1z" />
            <path d="m390.8 138.3c.5-6.1-4.9-27.2-7.7-31 .6 10.6 2.2 21.2 7.7 31z" />
            <path d="m289.7 108.2c-3.8 9.8-6.9 19.8-7.8 31.1 5.7-10.1 7.8-20.4 7.8-31.1z" />
            <path d="m393.7 139.4c1.8-.7 4.2-.5 3.3-3.2-2.1-7.3-4.4-14.7-6.8-22-1.2-3.7-2.9-7.2-4.5-10.7-.2.1-.5.2-.7.3 4.8 11.3 7.6 23 8.7 35.6z" />
            <path d="m287.5 105.2c-.3-.1-.5-.2-.8-.3-1.2 3-2.6 6-3.7 9-2.2 7.1-4.3 14.3-6.5 21.4-.9 2.8-.1 4 3.1 3.7 1-11.7 3.9-23 7.9-33.8z" />
          </g>

          <g
            style={muscle === "glutes" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("glutes");
            }}
            className="glutes"
          >
            <path d="m333.9 150.9c.4-.1.7-.2 1.1-.2.1-1.7 0-3.5.4-5.3 1-5.1-.1-9.1-6.2-11.4 1.7 5.9 3.2 11.4 4.7 16.9z" />
            <path d="m338.4 150.6c3.1-5 4.9-10.2 4.9-16-4.4 1.6-6.1 4.5-5.5 8.7.4 2.4.4 4.7.6 7.3z" />
            <path d="m313.4 165.8c2.9-4.6 7.3-6.7 11.6-8.8.7-.3 1.4-.7 2.1-1.1 3.2-2 4.1-4.1 3.3-7.9-.8-4.7-1.7-9.2-2.3-14-.7-5.1-1.3-5.6-6-3.3-.1 0-.1.1-.2.1-9.1 4.5-13.4 14.7-10.7 26.1.7 2.7 1.4 5.3 2.2 8.9z" />
            <path d="m360.4 164.8c.7-4.1 1.9-8.6 2.2-13.2.8-10.1-4.3-18.5-13.1-21.7-3-1.1-3.8-.6-4.2 2.5-.7 4.5-1.4 9-2.1 13.5-1.2 6.8-.5 8 5.7 11.5 3.9 2 7.5 4.7 11.5 7.4z" />
          </g>

          <g
            style={
              muscle === "hamstrings" ? {fill: "#2222ff"} : {fill: "#999999"}
            }
            onClick={() => {
              setMuscle("hamstrings");
            }}
            className="hamstrings"
          >
            <path d="m344.8 219.9c.3 0 .7 0 1 .1.8-2.1 1.7-4.3 2.4-6.4 1.7-4.8 3.8-9.5 5-14.4 2.9-11.6 1.1-23.1-.3-34.6-.4-3.1-2.5-4.9-6-5.2-1.3 8.3.5 16.5 1.2 24.7.6 6.8.7 13.7.2 20.5-.3 3.7-2.3 7.1-3.3 10.6-.3 1.6-.1 3.2-.2 4.7z" />
            <path d="m326.3 159.2c-4.1.6-5.9 2.3-6.2 6.1-.5 5.2-1.3 10.3-1.4 15.5-.1 5.4-.3 10.8.9 16 1.9 7.9 5 15.5 7.6 23.6 2.6-2.3 1.4-4.6.5-6.4-4.8-10.1-4.2-20.7-2.5-31.3 1.2-7.8 1.8-15.5 1.1-23.5z" />
            <path d="m358.9 216.5h.4c.1-2.4.3-5 .4-7.4.2-3.3-.1-6.9.8-10 2.5-8.6 2.1-17 .4-25.7-.8-4.1-2.1-7.7-5.9-9.4.5 5.4 1.4 11.1 1.5 16.7.1 6.2-1.1 12.5-.7 18.7.3 5.7 2 11.4 3.1 17.1z" />
            <path d="m314.1 217c1-4.6 1.9-8.6 2.6-12.7.4-2.5.5-5.1.4-7.6-.1-5-.7-9.9-.5-14.9.2-5.9 1-11.7 1.6-18.4-1.8 2-4 3.4-4.5 5.4-2.3 8.6-4.3 17.3-1.8 26.4 1.4 5.1 2.1 10.2 1.7 15.6-.1 1.8.3 3.9.5 6.2z" />
          </g>

          <g
            style={muscle === "lats" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("lats");
            }}
            className="lats"
          >
            <path d="m334.6 133.3c.2-1.2.5-1.7.4-2.3-.4-12.4-.7-24.6-1.3-37-.2-3.3-.2-7-2.7-9.8-4.3-4.9-9-8.8-15.7-9.7-3.1-.4-6.4-1-10-1.6.5 2 .7 3.2 1.1 4.4 4.5 12.9 8.9 25.8 13.6 38.5.7 2 2.1 3.9 3.5 5.6 2.6 3.2 5.6 6.3 8.4 9.3.8.9 1.6 1.6 2.7 2.6z" />
            <path d="m368.1 73.3c-1.3 0-2.2-.1-3 0-4.3.9-8.6 1.5-12.8 2.9-5 1.7-8.2 5.8-11.3 9.9-.6.8-.9 1.9-1 3-.7 13.5-1.3 27-1.9 40.5 0 1.1.2 2.2.3 3.3.4.3.9.6 1.3 1 .4-.9.6-1.9 1.2-2.6 2.4-2.9 5.1-5.7 7.5-8.7 1.8-2.2 3.9-4.6 4.9-7.1 4-10.1 7.5-20.4 11.2-30.6 1.2-3.9 2.3-7.5 3.6-11.6z" />
          </g>

          <g
            style={
              muscle === "lower_back" ? {fill: "#2222ff"} : {fill: "#999999"}
            }
            onClick={() => {
              setMuscle("lower_back");
            }}
            className="lower_back"
          >
            <path d="m319.4 120.4c-1.5-4.7-3-9.2-4.6-13.7-.1.1-.2.1-.3.2-.2 5-.5 10-.7 15.2 1.9-.7 3.5-1.1 5.6-1.7z" />
            <path d="m359.7 121.9c-.4-5.1-.7-9.6-1-14.2-.2 0-.4 0-.6-.1-1.3 4.3-2.6 8.5-4 12.9 2.2.6 3.7 1 5.6 1.4z" />
          </g>

          <g
            style={
              muscle === "middle_back" ? {fill: "#2222ff"} : {fill: "#999999"}
            }
            onClick={() => {
              setMuscle("middle_back");
            }}
            className="middle_back"
          >
            <path d="m321 73.2c-2-4.9-3.7-8.8-5.5-12.9-.8-1.7-2.3-2.5-3.9-1.1-3.3 2.9-5.7 6.5-6.5 11.1 5.3 1 10.2 1.9 15.9 2.9z" />
            <path d="m352.3 73.2c5.7-1 10.6-1.9 15.7-2.9-.6-4.3-2.8-7.3-5.4-10.1-2.1-2.3-3.9-2.1-5.2.7-1.7 3.7-3.1 7.5-5.1 12.3z" />
          </g>

          <g
            style={muscle === "neck" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("neck");
            }}
            className="neck"
          >
            <path d="m165.7 53.5c3.9-6.3 8.1-12.4 8.1-20.5-4.8 6.2-8.7 12.4-8.1 20.5z" />
            <path d="m155.1 33.2c-.1 8.2 4.3 14.2 7.8 20.6 1.6-5.2-1.6-12.9-7.8-20.6z" />

            <path d="m160.4 37.4c1.3 1.9 2.7 3.9 4.1 5.8 1.3-1.8 2.6-3.8 4-5.7-2.2-1.8-5.6-2-8.1-.1z" />
          </g>

          <g
            style={muscle === "quads" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("quads");
            }}
            className="quads"
          >
            <path d="m153.2 208.4c.4-8.8.7-17.4 1.1-26.1.2-4.1 1.7-8.1 0-12.2-3.3-7.7-6.8-15.4-10.3-23.5-1.3 8.5-2.5 16.5-.5 24.8 2.2 9.1 3.9 18.3 5.8 27.5.6 3.1 1 6.4 1.5 9.4h2.4z" />
            <path d="m177.6 208.4c2-10.3 3.7-20.7 6.1-30.7 1.6-6.9 3.2-13.7 2.4-20.9-.4-3.3-.9-6.7-1.3-10-.9 1.2-1.2 2.3-1.7 3.3-2.6 6.1-5.4 12.1-7.9 18.2-1.3 3.1-1.7 6.3-1.4 9.8.8 8.1 1.2 16.2 1.6 24.3.1 2-.3 4-.4 6.1 1.2-.1 2-.1 2.6-.1z" />
          </g>

          <g
            style={muscle === "traps" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("traps");
            }}
            className="traps"
          >
            <path d="m174.2 42c.8 4.4 5.9 8.5 11.9 6.4-4-2.3-7.8-4.3-11.9-6.4z" />
            <path d="m142.7 48.5c6.4 2 11.6-2.7 11.9-6.4-4.1 2-7.9 4.2-11.9 6.4z" />
            <path d="m339.7 23.9c-.4 0-.8-.1-1.2-.1-.3 1-1 2.1-.9 3.1.6 7.1 1.3 14.2 2 21.3.3 3.3.7 3.8 4 2.7 4.2-1.2 8.2-2.5 12.1-3.8-2.3-1.8-5.1-3.9-7.8-6-5.7-4.2-10-9.2-8.2-17.2z" />
            <path d="m317.8 47.4c3.7 1.1 7.6 2.3 11.6 3.5 3.5 1.1 4 .8 4.3-2.7 0-.7.2-1.4.3-2.1 1.3-6.4 2.3-12.8 1.8-19.4-.1-1-.8-1.9-1.1-2.9-.3.1-.5.2-.8.3.1.9.3 1.8.4 2.8.2 4.7-1.6 8.5-5.2 11.6-4 3-7.9 6-11.3 8.9z" />
            <path d="m306.7 50.2c0 .2-.1.5-.1.7 6.6 0 10.1 3.8 12.6 9.3 2.8 6.5 6.3 12.7 11.7 17.4.8.7 1.7 1.3 2.9 2.2.3-1.2.6-1.8.6-2.5-.1-6.3-.3-12.5-.6-18.8-.1-3.1-1.7-5.3-4.8-6.1-5.1-1.3-10.1-2.7-15.3-3.7-2 .2-4.5 1.2-7 1.5z" />
            <path d="m366.8 50.7c-.7-.4-1.1-.6-1.4-.7-7.8-2.2-14.9.5-22 3-2.6.9-3.8 2.8-3.9 5.5-.2 6.3-.4 12.5-.5 18.8 0 .7.2 1.4.4 2.6 1-.7 1.8-1 2.3-1.6 2.5-2.8 5.3-5.6 7.4-8.8 2.4-3.8 4.5-7.9 6.4-12.1 1.6-3.3 4.1-5.4 7.6-6.1 1-.1 2.1-.2 3.7-.6z" />
          </g>

          <g
            style={muscle === "triceps" ? {fill: "#2222ff"} : {fill: "#999999"}}
            onClick={() => {
              setMuscle("triceps");
            }}
            className="triceps"
          >
            <path d="m369.9 68.4c-.4 4.3-.8 8.1-1.1 12.1-.2 3.1-.6 6.4-.3 9.5.5 4.7 2.7 8.6 5.5 11.8.4-5.9.5-12 1.1-17.9.8-5.9-1.5-10.7-5.2-15.5z" />
            <path d="m298.6 102.2c3.8-3.7 6.3-8.1 6.3-13.4-.1-6.7-.9-13.4-1.4-20.2-4.4 4.8-6.1 10.2-5.2 16.7.7 5.7 1.6 11.2.3 16.9z" />
          </g>

          <g fill="#b9b9b9" className="none">
            <path d="m169.6 284.9c.3.2.6.4.8.6.4-.8 1-1.6 1.2-2.4 2.7-11.7 5.6-23.2 8.1-34.9 1.4-6.5 2.6-13.1 3.7-19.7.2-1.3-.7-4-1.6-4.3-2.2-.6-2.6 1.8-3.4 3.3-.5.9-.8 2-1 3-.8 5.3-1.8 10.5-2.3 15.8-.7 8-.8 16-1.8 24-.6 5.2-2.5 10-3.7 14.6z" />
            <path d="m158.6 285.4c.3-.2.5-.4.8-.7-2.9-9.2-5.3-18.5-5.4-28.2-.1-6.3-.4-12.5-1.1-18.7-.5-4-1.8-7.8-3.1-11.6-.3-1-1.8-1.5-2.8-2.3-.5 1-1.3 2-1.4 3.1-.1 2.1-.1 4.4.3 6.4 1.6 7.5 3.3 14.9 5.1 22.4 2.1 9.2 4.3 18.4 6.4 27.6.1.9.7 1.5 1.2 2z" />
            <path d="m157 177.8c-.3 3.4-.8 7-1 10.4-.3 6.2-.4 12.5-.4 18.7 0 1.8.1 4.3 2.6 4.3 2.5.1 2.8-2.4 3.2-4.3 1.8-10.2-.5-19.8-4.4-29.1z" />
            <path d="m172.4 177.5c-.3 0-.6 0-1 0-3.3 9-5.5 18.4-4.1 28.1.2 1.5.7 3.1 1.5 4.5 1.1 1.8 3 1.5 4-.4.3-.7.6-1.5.6-2.3-.3-10-.7-19.9-1-29.9z" />
            <path d="m126.4 71.4c7.5-.2 13.7-7.6 17.1-18.7-2-.7-3.8-.5-5.4.9-5.8 4.6-9.3 10.8-11.7 17.8z" />
            <path d="m185.8 51.9c2.8 11.4 9.3 19.6 16.7 19.5-2.4-6.9-5.8-13.1-11.6-17.5-1.4-1.2-3.4-1.3-5.1-2z" />
            <path d="m144.3 238.3c-.3 0-.5 0-.8 0 .2 3.1 0 6.5.7 9.5 2.6 11.4 5.7 22.6 8.5 33.9.3 1.4.7 2.7 1.1 4.7 1.2-2.2-7.8-45.6-9.5-48.1z" />
            <path d="m105 141.7c-1.9 1.6-3.4 3.2-5.3 4.6-1.7 1.2-3.8 2.1-5.5 3.3-2.1 1.5-2.1 2.9.3 3.9 2.6 1 5.5 1.5 8.3 1.8 3 .4 3.7-.4 2.7-3.4-.2-.7-.5-1.4-.5-2 0-2.9 0-5.5 0-8.2z" />
            <path d="m184.9 238.3c-.2 0-.4 0-.6-.1-.3.5-.6 1-.7 1.6-3.2 15-6.4 30-9.5 45-.1.3.5.8 1 1.5 1-4.6 1.9-8.6 2.9-12.6 2.3-9 4.8-18 6.9-27.2.6-2.4 0-5.3 0-8.2z" />
            <path d="m224.5 142.8c-.5 2.9-1 6.8-1.6 10.5-.3 1.8 1 2 2.1 1.9 2.7-.3 5.5-.7 8.1-1.4 1.1-.3 2-1.5 3-2.2-.9-.9-1.6-2-2.6-2.7-3.1-2.4-6.4-4.4-9-6.1z" />
            <path d="m123.8 71.9c3.4-6.9 6.4-14.1 13.1-18.9-4.7-1.5-9.1.5-11.1 5-1.9 4.3-2.4 8.9-2 13.9z" />
            <path d="m204.9 71.9c.3-5.7.2-11.5-3.4-16.4-2.1-2.7-6.2-3.8-9.4-2.3 6.4 4.5 9.5 11.6 12.8 18.7z" />
            <path d="m186.1 175.1c-3.4 10.7-5.2 22-6.6 33.2-.1.6.6 1.3 1.1 2.5 3.9-12.1 4.6-23.8 5.5-35.7z" />
            <path d="m148.6 209.9c0-11.8-2.5-23.1-5.7-34.4.7 11.6 1.5 23.2 5.7 34.4z" />
            <path d="m166.8 209.6c0 3-.5 5.9.1 8.3 1.6 6 3.8 11.8 5.7 17.6 1.4-4.8.4-9.1-1.6-13.5-1.9-3.7-2.8-7.8-4.2-12.4z" />
            <path d="m161.9 210.8c-1.5 4.4-2.9 9-4.9 13.4-1.7 4-1.7 7.7-.8 11.4.8-2.4 1.2-5.4 2.6-7.8 3.4-5.5 3.7-11.3 3.1-17z" />
            <path d="m163.7 8c0-1.9.1-4.3-.1-6.5-.1-.6-1.3-1.5-2-1.5-5 .1-6.6 2.8-5 7.4 2.5.3 4.8.4 7.1.6z" />
            <path d="m172.7 7.5c.2-.8.8-2.2.5-3.3s-1.3-2.5-2.4-2.9c-1.5-.7-3.3-.6-5.1-.9-.1 0-.3.4-.3.7-.2 2.5-.4 5.1-.5 7.1 2.7-.4 5.1-.5 7.8-.7z" />
            <path d="m169.4 230.7c-1.5 6.9-2.8 13.7-.8 20.7 3.3-6.8 2.1-13.7.8-20.7z" />
            <path d="m190.4 88.6c-2.4 3.2-5 6.2-7.1 9.4-1.1 1.7-1.4 4-.2 6 4.5-2.2 7.3-8.3 7.3-15.4z" />
            <path d="m160.3 251.4c2.2-7 .5-13.7-.9-20.5-1 6.9-2.6 13.8.9 20.5z" />
            <path d="m138.4 88.6c.4 6.4 1.7 11.9 7.2 15.8 1.4-2.5.9-4.8-.5-6.7-2-3-4.3-5.9-6.7-9.1z" />
            <path d="m225.5 140.4c1.8 4.4 6.4 6.1 11 4.2-3.1-3.1-6.5-4.8-11-4.2z" />
            <path d="m172 250.8c-.4-.1-.8-.1-1.2-.2-3.9 8.5.8 17.4-1.3 26.1.3 0 .7 0 1 .1.5-8.8 1-17.4 1.5-26z" />
            <path d="m130.6 103.7c-5 1.9-9.9 6.7-10.5 10 2.5-1.3 5.1-2.7 7.7-4.1 2.7-1.3 3.4-2.7 2.8-5.9z" />
            <path d="m158.1 274.8h.6c.2-4.1.5-8.1.7-12.3.4-8 .2-9.5-2.3-11.8.3 8.2.7 16.2 1 24.1z" />
            <path d="m184.6 206.7c-.2 0-.3-.1-.5-.1-1.7 5.3-3.4 10.6-5.3 16.3 1.7-1.2 2.9-2 4.1-2.9.7-.6 1.5-1.4 1.6-2.1.2-3.7.1-7.5.1-11.2z" />
            <path d="m209.4 114c-2.6-5.1-6.5-8-11.3-10.6-.3 2.5-.1 4.6 1.8 5.7 3 1.6 6 3.2 9.5 4.9z" />
            <path d="m149.9 222.6c-1.5-4.9-2.9-9.4-4.4-13.9-.2-.6-.5-1.1-1-2.2v12.7c1.8 1.1 3.3 2.2 5.4 3.4z" />
            <path d="m176.5 211.4c-2.2 0-3.8 1.2-3.8 2.8s1.8 3.8 3.5 3.9c1.4.1 3.5-2.2 3.5-3.9 0-2.1-1.8-2.5-3.2-2.8z" />
            <path d="m149.1 215.4c.8.7 1.9 2.1 3.3 2.6s3.9-2.2 3.7-3.9c-.2-2.1-1.8-2.8-3.5-2.7-1.8 0-3.3.8-3.5 4z" />
            <path d="m92.2 144.8c5.8 1.4 9.9-.3 11.1-4.4-4.3-.7-7.7 1.1-11.1 4.4z" />
            <path d="m141 87.2c-.1 2.9 2.6 6.7 5.7 7.8 1-4.2-.7-6.6-5.7-7.8z" />
            <path d="m182.6 96.1c2.2-3 4.2-5.7 6.4-8.7-5.6.2-8.4 4.3-6.4 8.7z" />
            <path d="m124.8 74.9c-4.9 3.9-6.3 22.2-1.8 26.8-3.6-9.4-1.8-18.1 1.8-26.8z" />
            <path d="m204.1 75c3.5 8.6 5.4 17.2 1.7 26.9 4.4-4.8 3-22.9-1.7-26.9z" />
            <path d="m156.2 297.4c.2.2.5.4.7.7.6-.6 1.7-1 1.8-1.7.4-2.6.6-5.3.8-7.9 0-.5-.6-1-1-1.5-.4.4-1.1.8-1.2 1.3-.4 3-.7 6.1-1.1 9.1z" />
            <path d="m171.9 298.1c.2-.2.5-.5.7-.7-.3-3-.6-6-1-9-.1-.5-.8-.9-1.2-1.4-.4.6-1.1 1.2-1 1.7.2 2.5.5 5.2.9 7.6 0 .7 1 1.2 1.6 1.8z" />
            <path d="m158.8 26.6c2.3 3.4 9.5 3.3 11.3 0-3.8 0-7.5 0-11.3 0z" />
            <path d="m173.1 14.3c.1-3.3-1-5.4-2.9-5.7-2.1-.4-4 1.2-4.7 4.6 2.8-1.8 5.2-1.3 7.6 1.1z" />
            <path d="m181.7 88.1c.3.1.6.3.9.4 1.4-2.7 2.8-5.6 4.4-8.3-.2-.1-.5-.2-.7-.4-5.5 3.8-5.8 4.3-4.6 8.3z" />
            <path d="m163.1 13.1c-.5-3.1-2.2-4.7-4.4-4.4-2 .3-3.1 2.1-2.9 5.3 2.2-1.7 4.5-2.6 7.3-.9z" />
            <path d="m142.1 79.4c.8 3.8 2 6.7 4.8 9 1.5-3.9 1-4.8-4.8-9z" />
            <path d="m232.1 155.5c-.2.3-.4.6-.6.9 1.1 2.5 2.1 5.1 3.3 7.5.3.6 1.1.9 1.6 1.4.1-.8.4-1.6.2-2.3-.8-2.1-1.8-4.3-2.8-6.3-.3-.5-1.2-.7-1.7-1.2z" />
            <path d="m96.4 155.3c-.3 0-.5.1-.8.1-1.2 2.6-2.4 5.3-3.5 8-.2.5.2 1.2.3 1.8.5-.4 1.2-.6 1.5-1.1 1.1-2.2 2.1-4.5 3-6.8.2-.4-.3-1.2-.5-2z" />
            <path d="m236.4 147.9c1.5 1 2.9 1.9 4.5 2.6.5.2 1.2-.2 1.9-.3-.1-.6-.1-1.5-.4-1.8-.7-.7-1.7-1.2-2.6-1.9-1.8-1.3-2.8-1-3.4 1.4z" />
            <path d="m165.9 14.3c.7 2.2 3.7 4.1 5.9 3.3.8-.2 1.2-1.5 2.1-2.7-3.3-.3-5.5-.5-8-.6z" />
            <path d="m158.8 24.9h11.5c-2.7-2.7-9.2-2.7-11.5 0z" />
            <path d="m122.7 103.8c4.7-1.7 7.7-4.9 9.2-9.3.3.3.6.7.9 1-3.3 2.9-6.7 5.7-10.1 8.3z" />
            <path d="m163.1 14.3c-2.5.2-4.9.4-7.8.6.5 1 .6 2.2 1.3 2.5 1.9 1.1 5.5-.8 6.5-3.1z" />
            <path d="m205.7 104.3.8-.8c-3.7-2.8-7.4-5.7-11.1-8.5l1-1c1.7 4.7 4.8 8.2 9.3 10.3z" />
            <path d="m93 154.8c-.2-.3-.4-.7-.6-.8-.4-.1-1 0-1.2.2-1.4 2.2-2.7 4.6-4.1 6.9-.1.2.1.8.4 1.1.1.1.8.1.9-.1 1.5-2.4 3.1-4.9 4.6-7.3z" />
            <path d="m230.4 165.7c.4-.1.7-.2 1.1-.2.4-3-1.5-5.7-2.3-8.5-.1-.3-1-.4-2.1-.7 1.1 3.4 2.2 6.4 3.3 9.4z" />
            <path d="m240.7 162.6c.4-.2.9-.5 1.3-.7-1.1-2.9-2.8-5.5-4.7-8-.1-.2-1 .3-1.7.5 1.9 3 3.5 5.6 5.1 8.2z" />
            <path d="m97.4 165.6c.3.1.7.1 1 .2.9-2.8 1.9-5.7 2.8-8.5 0-.2-.6-.8-.8-.7-.4.2-.9.5-1.1.9-.8 2.1-1.5 4.2-2.1 6.3-.1.5.1 1.2.2 1.8z" />
            <path d="m221.3 150.8c.4-.1.8-.1 1.3-.2-.1-2.3-.2-4.7-.5-7 0-.4-.7-.8-1-1.2-.3.4-1 .9-1 1.3.4 2.3.8 4.8 1.2 7.1z" />
            <path d="m171.8 28.8c-3.9.2-5 2.8-6.4 5.7 3.6-.6 5-2.9 6.4-5.7z" />
            <path d="m175 15.3c2.2-4.2 2-7.7-.2-9.8-1.8 3.2.6 6.1.2 9.8z" />
            <path d="m175.7 297.9c-.6-3.5-.4-7-2.4-9.7 0 2.9.3 5.9.8 8.7 0 .4 1 .7 1.6 1z" />
            <path d="m106.7 142c-.2 3.2-.3 5.9-.4 8.5 3-3.8 3.2-6.7.4-8.5z" />
            <path d="m154.1 5.3c-2.3 2.2-2.4 4.7-.6 9.6.4-3.3 1.9-6.2.6-9.6z" />
            <path d="m152.6 297.8c2.2-.4 3.5-5.5 3-9.6-.2-.1-.5-.1-.7-.2-.7 3-1.5 6.3-2.3 9.8z" />
            <path d="m163 34.4c-1.2-4.2-2.2-5.1-5.8-5.5 1.2 2.8 2.6 5 5.8 5.5z" />
            <path d="m175.4 21.9c-1.2 3.2-2.2 6.2-3.3 9.1 3.5-2.3 5.3-6.8 3.3-9.1z" />
            <path d="m156.7 30.9c-.9-2.8-1.7-5.2-2.5-7.5-.2-.5-.6-.9-.9-1.3-.2.5-.7 1-.7 1.4.1 3 1.1 5.6 4.1 7.4z" />
            <path d="m162.1 288c-.3 0-.6 0-.9 0-.3 2.8-.6 5.6-.8 8.4 0 .4.6.8 1 1.2.2-.4.7-.8.7-1.2 0-2.8 0-5.5 0-8.4z" />
            <path d="m167.7 288c-.3 0-.7 0-1 0v8.6c0 .3.6.7 1 .9.1.1.8-.5.8-.7-.3-2.8-.5-5.8-.8-8.8z" />
            <path d="m142.8 85.5c-1.2-2-2.2-3.7-3.4-5.7-1.5 4.1-.7 5.4 3.4 5.7z" />
            <path d="m186.2 85.5c4.1-.1 4.9-1.7 3.1-5.6-1.1 1.9-2 3.6-3.1 5.6z" />
            <path d="m171.6 24.9c1-1.3 1.9-2.3 2.5-3.4.2-.4.2-1.3-.1-1.5-.3-.3-1.4-.4-1.5-.2-1 1.4-2.6 2.9-.9 5.1z" />
            <path d="m102.3 163.8c.4.1.8.2 1.3.3.7-2.2 1.4-4.4 2-6.6.1-.2-.3-.8-.4-.8-.4 0-.9.2-1 .4-.7 2.1-1.3 4.4-1.9 6.7z" />
            <path d="m225.3 164.1c.3-.1.5-.1.8-.2.5-2.4-.9-6.5-3.1-7.6.8 2.9 1.6 5.3 2.3 7.8z" />
            <path d="m153.5 225.6c.8-2.5 1.3-4.4 1.8-6.2-1.3.4-2.3.7-3.5 1 .6 1.6 1 3 1.7 5.2z" />
            <path d="m157.2 24.9c2-1.8.3-3.2-.3-4.6-.2-.3-1.1-.3-1.7-.5-.1.6-.5 1.3-.3 1.7.5 1.2 1.4 2.2 2.3 3.4z" />
            <path d="m174.4 49.1c-.7-1.8-1.1-3-1.7-4.6-.8 1.7-1.4 3.2-2.3 5.3 1.6-.3 2.7-.6 4-.7z" />
            <path d="m175.3 225.6c.6-1.9 1.1-3.5 1.6-5.3-1.2-.3-2.3-.6-3.4-.9.6 2.1 1.2 4 1.8 6.2z" />
            <path d="m159.1 22.4c2.4-.7 2.1-2.3 1.6-4.3-1 .3-2 .6-3.1.9.5 1.4.9 2.4 1.5 3.4z" />
            <path d="m158.8 49.9c-1-2.1-1.8-3.5-2.7-5.3-.6 1.7-1 2.9-1.5 4.5 1.1.1 2.3.4 4.2.8z" />
            <path d="m171.5 19.2c-1.1-.3-2.2-.6-3.2-.9-.5 3.1-.5 3.1 1.6 4.1.3-1 .8-1.9 1.6-3.2z" />
            <path d="m175.7 290c1.2 6.2 2.2 7.7 4.2 6.7-1.3-2.2-2.8-4.4-4.2-6.7z" />
            <path d="m153.1 291.4c-.2-.1-.4-.2-.6-.3-1.2 1.9-2.5 4-3.8 5.9.2.2.5.3.7.5 3-1 2.4-4.1 3.7-6.1z" />
            <path d="m179.5 80.9c.3.4.6.8 1 1.1 1.2-1.1 2.4-2.3 3.8-3.4-.2-.2-.3-.4-.5-.5-1.6.9-3 1.9-4.3 2.8z" />
            <ellipse cx="160.3" cy="301.7" rx="1.6" ry="2.3" />
            <ellipse cx="168.2" cy="301.7" rx="1.6" ry="2.3" />
            <path d="m173.9 303.1c-.4.2-.8.1-1-.3l-.7-1.2c-.2-.4-.1-.8.3-1s.8-.1 1 .3l.7 1.2c.2.3.1.8-.3 1z" />
            <path d="m177.3 303.1c-.4.2-.8.1-1-.3l-.7-1.2c-.2-.4-.1-.8.3-1s.8-.1 1 .3l.7 1.2c.2.3.1.8-.3 1z" />
            <path d="m179.8 302.2c-.4.2-.8.1-1-.3l-.7-1.2c-.2-.4-.1-.8.3-1s.8-.1 1 .3l.7 1.2c.2.4.1.9-.3 1z" />
            <path d="m182.1 301.6c-.4.2-.8.1-1-.3l-.7-1.2c-.2-.4-.1-.8.3-1s.8-.1 1 .3l.7 1.2c.1.3 0 .8-.3 1z" />
            <path d="m154.2 303.6c.4.2.8.1 1-.3l.7-1.2c.2-.4.1-.8-.3-1s-.8-.1-1 .3l-.7 1.2c-.1.3 0 .8.3 1z" />
            <path d="m151.4 303.1c.4.2.8.1 1-.3l.7-1.2c.2-.4.1-.8-.3-1s-.8-.1-1 .3l-.7 1.2c-.2.3 0 .6.3 1z" />
            <path d="m148.9 302.2c.4.2.8.1 1-.3l.7-1.2c.2-.4.1-.8-.3-1s-.8-.1-1 .3l-.7 1.2c-.2.3-.1.8.3 1z" />
            <path d="m146.7 301.5c.4.2.8.1 1-.3l.7-1.2c.2-.4.1-.8-.3-1s-.8-.1-1 .3l-.7 1.2c-.2.2-.1.7.3 1z" />
            <path d="m328.9 31.8c4.4-4.3 4.4-7.5 0-12.3z" />
            <path d="m344.4 19.2c-4.4 5.7-4.5 9.3-.4 13.1 1.4-4.5.4-8.6.4-13.1z" />
            <path d="m292.1 97.1c1.5-7.2 3-14.3 4.8-22.2-4.5 7.2-5 14.7-4.8 22.2z" />
            <path d="m376.4 74.9c1.6 7.8 3.3 15.4 5 23 .2-7.9-.4-15.9-5-23z" />
            <path d="m377.3 84.6c-.3 0-.5 0-.8 0 0 4.2-.1 8.3.1 12.5 0 .6.8 1.2 1.2 1.9.5-.7 1.4-1.4 1.3-2-.6-4.3-1.2-8.4-1.8-12.4z" />
            <path d="m297 84.6c-.3 0-.7 0-1 0-.6 4.1-1.2 8.2-1.6 12.3-.1.7.9 1.4 1.4 2.1.4-.7 1-1.3 1.1-2 .2-2 .1-4.1.1-6.2s0-4.2 0-6.2z" />
            <path d="m401.9 155.3c-.2.3-.4.6-.6.8.9 2.5 1.8 5.2 2.9 7.7.2.6 1 1 1.5 1.5.1-.8.5-1.6.3-2.3-.6-2.1-1.4-4.3-2.3-6.3-.2-.5-1.1-.8-1.8-1.4z" />
            <path d="m266.9 165.1c.4.1.7.3 1.1.4 2.1-2.7 2.7-6.1 3.9-9.2 0-.1-.6-.7-.9-.7-.4.1-1 .4-1.2.8-.7 1.8-1.4 3.7-2 5.5-.5.8-.7 2.1-.9 3.2z" />
            <path d="m292.5 112.5c1.5-3.8 2.8-7.2 4.5-11.2-4 2.1-5.8 7.1-4.5 11.2z" />
            <path d="m380.5 111.9c1.1-4.4-.4-8.4-4.1-9.9 1.5 3.4 2.8 6.8 4.1 9.9z" />
            <path d="m408.5 145.5c-.5.5-1.1.8-1.4 1.3-.2.4-.2 1.2 0 1.4 1.3 1 2.7 2 4.2 2.8.3.2 1.1 0 1.4-.3s.3-1.2.1-1.4c-1.2-1.4-2.6-2.5-4.3-3.8z" />
            <path d="m264.8 145.5c-1.3 1-2.7 1.8-4.1 2.9-.4.4-.3 1.3-.4 2 .7.1 1.5.4 2.1.1.9-.3 1.5-1.2 2.4-1.6 2.2-1 1.9-2 0-3.4z" />
            <path d="m267.7 154.3c-2.4-.3-5.7 5.1-5 8.2 2.1-2.3 3.3-5.3 5-8.2z" />
            <path d="m397.6 155.9c-.2.1-.3.3-.5.4.7 2.6 1.3 5.3 2.1 7.8.1.4.9.6 1.3.9.2-.4.6-.9.5-1.3-.6-2.3-1.2-4.6-2-6.9-.1-.4-.9-.6-1.4-.9z" />
            <path d="m410.9 162.5c.2-.2.5-.4.7-.6-1.3-2.5-2.5-5.1-4-7.6-.2-.3-.9-.3-1.3-.4-.1.5-.3 1-.2 1.4 1 2.1 2.1 4.3 3.3 6.3.4.5 1.1.6 1.5.9z" />
            <path d="m271.9 165.2c1-.1 1.5 0 1.5-.1.9-2.7 1.7-5.5 2.5-8.3.1-.2-.4-.7-.6-.7-.4 0-1 .2-1 .4-.8 2.7-1.5 5.5-2.4 8.7z" />
            <path d="m404.7 149.5c.3-2.6-2.6-7-4.4-7.4-.3-.1-.8.1-.9.3-.1.3-.2.9 0 1.2 1.6 1.8 3.3 3.6 5.3 5.9z" />
            <path d="m274.4 142.9c-.1-.2-.2-.4-.3-.6-.6.1-1.4.1-1.7.4-1.6 1.8-4.9 2.7-3.7 6.7 2-2.4 3.9-4.4 5.7-6.5z" />
            <path d="m322.5 302c.6-2.8-2.2-5.8-5.5-5.7 1.8 1.8 3.5 3.6 5.5 5.7z" />
            <path d="m350.5 301.4c2.9-1.3 4.9-3.5 5.1-5.8-3.4 1.4-5.4 3.5-5.1 5.8z" />
            <path d="m346.4 26c.4 0 .8 0 1.2-.1.1-1.8.2-3.7.2-5.5 0-.4-.8-.7-1.2-1.1-.3.4-1 .9-1 1.3.2 1.8.5 3.6.8 5.4z" />
            <path d="m325.7 26h1.3c.2-1.8.5-3.5.6-5.4 0-.4-.6-.9-.9-1.3-.4.4-1.1.8-1.1 1.2-.1 1.9 0 3.7.1 5.5z" />
            <path d="m278.9 155.1c-.6 3-1 5.5-1.5 8 .2 0 .5.1.7.1 1.7-2.3 2.3-6.5.8-8.1z" />
            <path d="m394.6 163.5c.3-.1.6-.1.9-.2.3-2.7-.7-6.7-2.7-7.9.7 3 1.3 5.5 1.8 8.1z" />
            <path d="m338.5.7c-.3.4-.5.9-.8 1.3 2.4 1 4.9 1.9 7.3 2.9.1-.3.3-.5.4-.8-2.3-1-4.6-2.2-6.9-3.4z" />
            <path d="m328.1 5.2c2.5-1 5-2 7.9-3.2-3.2-1.1-5.8.1-7.9 3.2z" />
            <path d="m344.7 298.6c.3-.2.7-.3 1-.5-.8-1.7-1.5-3.4-2.3-5.2-.4.2-.7.3-1.1.5-1.5 2.7 2.2 3.2 2.4 5.2z" />
            <path d="m327.7 298.1c.2.1.5.2.7.3 3.4-3.9 3.4-3.9 1.4-5.4-.8 1.8-1.5 3.4-2.1 5.1z" />
            <path d="m271.2 149.6.7 2 3.3-5.9z" />
            <path d="m274.4 151.9h1.6l.9-5.5z" />
            <path d="m278.1 151.9h1.6l.5-6z" />
            <path d="m393.1 146.4.7 5.5h1.5z" />
            <path d="m396.6 146.3 1.1 5.6h1.4v-1.3z" />
            <path d="m399.1 145.2 2.4 6.4.9-1.5z" />
            <path d="m325.8 301.2c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z" />
            <path d="m347.8 301.2c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z" />
            <path d="m312.2 55c-3.9-2.6-8.6-2.9-11.5-.8-4.8 3.7-6.8 13.4-3.5 18.5 5.1-5.9 10-11.9 15-17.7z" />
            <path d="m361.1 55c5.1 6 10 11.9 15 17.7.3-.1.7-.2 1-.3.1-2.9.7-6 .3-8.9-1.1-9.8-8.6-13.4-16.3-8.5z" />
            <path d="m343.8 213.4c3.9-7.1 4.3-14.8 1.7-31.4-2.2 7.1-3.3 27.4-1.7 31.4z" />
            <path d="m329.5 213.9c1.5-6 .3-25.6-1.8-31.2-.4 3.8-.6 7.5-1.1 11.2-1 6.8-.5 13.4 2.9 20z" />
            <path d="m350.5 296.9c.3.1.7.2 1 .3.2-.8.6-1.6.7-2.4.1-1.4-.2-2.8 0-4.3.5-3.9 1.5-7.7 1.8-11.6.3-3.7.1-7.3.1-11-.4 0-.9 0-1.3 0-.6 9.7-1.5 19.4-2.3 29z" />
            <path d="m322 297.4c0-5.4.3-10.2-.1-15.1-.4-4.8-1.4-9.4-2.1-14.1-.3 0-.5.1-.8.1 0 3.3-.2 6.6.1 9.9s.6 6.8 1.7 10c.9 2.8-1.2 6.4 1.2 9.2z" />
            <path d="m334.5 7.8c-3 1.7-6 3.1-8.7 5-.9.6-.7 2.3 1.1 2.3 1.4 0 2.8-.3 4.3-.6 3.8-.9 4.5-2.1 3.3-6.7z" />
            <path d="m338.8 8c-1 4.6-.4 5.7 3.4 6.6.8.2 1.6.5 2.3.4 1.1-.1 2.2-.4 3.4-.7-.8-.9-1.5-1.9-2.4-2.7s-2-1.4-3.1-1.9c-1.2-.7-2.4-1.2-3.6-1.7z" />
            <path d="m309.3 176.7c2.8-5.9 3.8-11.7 0-18.2z" />
            <path d="m362.9 177.5h.9c0-6.1 0-12.1 0-18.2-1.2 1.9-2.3 4.1-2.2 6.1.1 4.1.9 8.2 1.3 12.1z" />
          </g>
        </svg>

        <h1>Type a Muscle</h1>
        <Combobox value={muscle} onChange={setMuscle}>
          <Combobox.Input
            className="border-solid border-2 border-green-nuetral-300"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Options>
            {filteredMuscle.map((musc, i) => (
              <Combobox.Option
                key={musc + i}
                value={musc}
                className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
              >
                <CheckIcon className="hidden ui-selected:block" />
                {musc}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        <div className="flex flex-col divide-y gap-3">
          {exercises.map((exer: any) => (
            <Exercise
              key={exer.name}
              name={exer.name}
              type={exer.type}
              muscle={exer.muscle}
              equip={exer.equipment}
              diff={exer.difficulty}
              inst={exer.instructions}
            ></Exercise>
          ))}
        </div>
      </div>
    </main>
  );
}
