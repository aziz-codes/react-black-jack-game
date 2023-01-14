import { NavLink } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("");
  const [typed, setTyped] = useState(false);
  const handleChange = (e) => {
    setName(e);
    setTyped(true);
  };
  return (
    <section className="flex flex-row justify-center items-center my-auto h-screen">
      <div className="w-80 h-56 flex flex-col border shadow-lg items-center gap-10">
        <h3 className="text-3xl font-semibold">
          <span className="font-semibold tracking-tight text-3xl text-sky-500">
            B
          </span>
          lack<span className="text-yellow-300">J</span>ack
        </h3>
        <div className="w-full flex flex-col items-start px-2">
          <label className="text-slate-500 text-xs">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="rounded-md outline-none border p-1 text-sm w-full"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <p
            className={`px-2 text-red-500 text-xs ${
              name.length >= 4 ? "hidden" : "block"
            }`}
          >
            {typed ? "Name must be more than 3 chars" : ""}
          </p>
          <NavLink
            to={`${name.length >= 4 ? `/game/${name}` : "/"}`}
            name={name}
            className="p-1 bg-sky-500 text-md rounded-sm border mx-auto mt-4 text-white font-semibold tracking-tight"
          >
            Start Game
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
// test commit