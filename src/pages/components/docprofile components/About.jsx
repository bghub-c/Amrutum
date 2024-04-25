import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const languages = ["English", "Hindi", "Telugu"];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      id="About"
      className="row-span-2 border rounded-2xl overflow-hidden flex flex-col w-full h-full text-zinc-800"
    >
      <h1 className="w-full h-fit text-xl pl-6 py-2 bg-bg3 place-self-start">
        A Little About me
      </h1>
      <div className="w-full px-6 py-2">
        <p>
          Hello, I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital in
          Surat. I love to work with all my hospital staff and senior doctors.
          Completed my graduation in Gynaecologist Medicine from the <br />
          {expanded ? (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              exercitationem eum nesciunt cumque aperiam beatae quos rerum
              consequuntur repudiandae sapiente.
            </span>
          ) : null}
          <span
            onClick={toggleExpanded}
            className="text-zinc-800  relative cursor-pointer flex flex-row justify-stretch my-4 w-11/12"
          >
            <div className=" h-[1px] w-full bg-zinc-800"></div>{" "}
            <div className="absolute right-0 -top-3 bg-white px-2 underline font-medium">
              {expanded ? " Read Less" : " Read More"}{" "}
            </div>
          </span>
        </p>
      </div>
      <div
        id="languages"
        className="flex items-center font-medium gap-2 ml-4 mt-4"
      >
        Languages Spoken
        {languages.map((language, index) => {
          return (
            <span
              className="bg-zinc-200 text-sm text-zinc-600 text-center px-2 p-1 rounded-full"
              key={index}
            >
              {language}
            </span>
          );
        })}
      </div>
      <div id="socials" className="flex gap-2 ml-4 my-4 text-accent1">
        <a href="/"  className="p-1 bg-zinc-100 border border-zinc-500 rounded-full">
          <FacebookLogo size={25} />
        </a>
        <a href="/" className="p-1 bg-zinc-100 border border-zinc-500 rounded-full">
          <InstagramLogo size={25} />
        </a>
        <a href="/" className="p-1 bg-zinc-100 border border-zinc-500 rounded-full">
          <YoutubeLogo size={25} />
        </a>
        <a href="/" className="p-1 bg-zinc-100 border border-zinc-500 rounded-full">
          <TwitterLogo size={25} />
        </a>
      </div>
    </section>
  );
}
