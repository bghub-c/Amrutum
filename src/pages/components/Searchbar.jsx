import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight,MapPin } from "@phosphor-icons/react";


export default function Searchbar(){
const circleclass="absolute bg-accent1 rounded-full w-[150px] h-[150px] opacity-20"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data); // Values can be sent to backend for rendering of cards in card component

  useEffect(() => {
    console.log(errors);
  }, [errors]);
return(
    <section className="relative bg-accent1lt w-screen flex flex-col justify-center items-center overflow-hidden" > 
    <div id="circles" className={`${circleclass} left-28 -top-20 `}></div>
    <div id="circles" className={`${circleclass} left-64 -bottom-16 z-10`}></div>
    <div id="circles" className={`${circleclass} right-28 -top-20`}></div>
    <div id="circles" className={`${circleclass} right-52 -bottom-14 z-10 `}></div>
        <div className="flex flex-col items-center my-9">
        <h1 className="text-2xl tracking-widest mb-4 mfont font-bold">Find Expert Doctors For An In-Clinic Session Here</h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex gap-3  items-center">
          <span className=" flex rounded-md border border-gray-300 bg-white text-zinc-400 z-40">
          <MapPin className="text-accent1 my-2 mx-1" weight="fill" />
          <select
          className={`mr-1 text-sm p-1 `}
        >
          <option value="" className="text-sm " disabled selected>Select Location
          </option>
          <option value="Lucknow" className="">Lucknow</option>
          <option value="Hydrabad">Hydrabad</option>
          <option value="Delhi">Delhi</option>
          <option value="custom">Etc</option>
        </select></span>
        <span className="flex w-[330px] p-1 px-2  rounded-md border border-gray-300 bg-white text-accent1 placeholder:text-zinc-400">
            <input className="outline-none w-full placeholder:text-xs placeholder: text-accent1"
          type="text"
          placeholder="eg. Doctor, specialisation, clinic name"
          {...register("search", { required: true })}/> <button type="submit"> <ArrowRight className="h-full" weight="fill" /></button>   </span>
        
      </form></div>
        </section>
);
}