import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { AnimatePresence, m } from "framer-motion" 

export default function Filters() {
  const [filters, setFilters] = useState({});
  const selectclass =
    "bg-zinc-100 text-zinc-600 w-[147px] py-2 pl-1 rounded-lg my-3 text-sm tracking-wide outline-none";
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    const selectedId = event.target.id;
    setFilters((prevFilters) => {
      return { ...prevFilters, [selectedId]: selectedValue };
    });
  };

  const handleFilterRemove = (keyToRemove) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[keyToRemove];
      resetSelect(keyToRemove);
      return updatedFilters;
    });
  };
  const resetSelect = (key) => {
    document.getElementById(key).selectedIndex = 0;
  };

  return (
    <section className="w-screen ">
      <div className="h-fit w-full border-b border-zinc-300 font-normal flex justify-center gap-8 py-1 mb-6">
        <select
          className={selectclass}
          id="Expertise"
          onChange={handleFilterChange}
        >
          <option value="" disabled selected>
            Expertise
          </option>
          <option value="Hair care">Hair care</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Gastroenterologist">Gastroenterologist</option>
        </select>
        <select
          className={selectclass}
          id="Gender"
          onChange={handleFilterChange}
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          className={selectclass}
          id="Fees"
          onChange={handleFilterChange}
        >
          <option value="" disabled selected>
            Fees
          </option>
          <option value="Rs.0-Rs.500">{"Rs.0-Rs.500"}</option>
          <option value="Rs.500-Rs.1000">{"Rs.500-Rs.1000"}</option>
          <option value="Rs.1000-Rs.1500">{"Rs.1000-Rs.1500"}</option>
        </select>
        <select
          className={selectclass}
          id="Languages"
          onChange={handleFilterChange}
        >
          <option value="" disabled selected>
            Languages
          </option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
          <option value="Urdu">Urdu</option>
        </select>
        <select
          className="bg-bg3 w-[147px] text-accent1 p-2 rounded-lg my-3 text-sm tracking-wide outline-none"
          id="Allfilters"
          value=""
        >
          <option value="" disabled selected>
            All filters
          </option>
          {Object.entries(filters).map(([key, value], index) => (
            <option key={`${index + key}`} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-end pr-10 mb-6 w-full h-[50px]">
        <AnimatePresence>{Object.entries(filters).map(([key, value], index) => (
          <m.span
          initial={{scale:0.5,opacity:0}}
          animate={{scale:1,opacity:1}}
          exit={{scale:0.5,opacity:0}}
          transition={{ease:"easeInOut", type:"spring", duration:0.2}}
            key={index}
            className="bg-accent1lt text-zinc-900 flex items-center justify-center text-sm interfont h-fit mx-2 px-4 py-1 pr-1 rounded-full"
          >
            {value}
            <X
              className="h-full mx-2 text-zinc-400"
              weight="bold"
              onClick={() => handleFilterRemove(key)}
            />
          </m.span>
        ))}</AnimatePresence>
      </div>
    </section>
  );
}
