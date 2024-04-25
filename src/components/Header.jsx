import { Link, useLocation } from "react-router-dom";
import { m } from "framer-motion";

export default function Header() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.12
      }
    }
  };
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  const containerr = {
    hidden:{ opacity: 0, y:-50 },
    visible:{ opacity: 1, y:0 } };
  const words = [
    { cha: "A" },
    { cha: "M" },
    { cha: "R" },
    { cha: "U" },
    { cha: "T" },
    { cha: "A" },
    { cha: "M" },
  ];
  const location = useLocation();
  return (
    <header className="bg-bg2 w-screen top-0 flex items-center">
      <div
        id="1stpart"
        className="w-3/4 flex items-center justify-center oswald"
      >
        <a
          href="/"
          className="w-3/4 pl-20 my-3 text-accent1 font-semibold tracking-zaydawide overflow-hidden "
        >
          <m.h1
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word,index) => (
          <m.span key={index} variants={item}>
            {word.cha}
          </m.span>
        ))}
      </m.h1>
        </a>
        <m.div variants={containerr} initial="hidden" animate="visible" className=" w-full flex gap-2 px-1 text-xs text-black montserrat">
        <Link key={1} to="/" className={`p-1 tracking-wideestcum ${
              location.pathname === "/" ? "text-accent1 boldy " : ""
            } mr-1 transition-all`}
          >
          Home
           </Link>
          <Link key={2} to="/FindDoctors" className={`p-1 tracking-wideestcum ${
              location.pathname === "/FindDoctors" || location.pathname === "/docs/1" ? "text-accent1 boldy " : ""
            } mr-1 transition-all`}
          >
          Find Doctors
          </Link>
          <Link key={3} to="/AboutUs" className={`p-1 tracking-wideestcum ${
              location.pathname === "/AboutUs" ? "text-accent1 boldy " : ""
            } mr-1 transition-all`}
          >
          About Us
          </Link>
        </m.div>
      </div>
      <div
        id="2ndpart"
        className="w-1/4 pr-20 flex justify-end oswald laptop:text-sm"
      >
        <button className="px-3 w-2/3 p-0.5 m-2 mx-4 border border-accent1 hover:bg-accent1ltt text-accent1  rounded-lg transition-colors">
          Login {/* Clickable button login redirection */}
        </button>
        <button className="px-1 w-full  p-0.5 m-2 border border-accent1 rounded-lg bg-accent1 hover:bg-accent1ltt text-white hover:text-accent1 transition-colors">
          Sign-up {/* Clickable button login redirection */}
        </button>
      </div>
    </header>
  );
}
