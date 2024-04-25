import PropTypes from "prop-types";
import { Star, CheckCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
export default function Banner({ docId }) {
  const Stars = (rating) => {
    const starArray = [];
    for (let i = 1; i < rating; i++) {
      starArray.push(
        <Star key={i} className="h-full text-orange-400" weight="fill" />
      );
    }
    return starArray;
  };
  const doctor = {
    name: "Dr Bruce Willis",
    id: docId,
    desig: "Gynecologist",
    rating: 4.2,
    info: {
      Followers: 850,
      Following: "18k",
      Posts: 250,
    },
  };
  return (
    <span
      id="banner"
      className="col-span-2 w-full h-[200px] flex  rounded-lg overflow-hidden "
    >
      <span className="relative w-full h-full bg-blue-400 overflow-hidden">
        <img src="/banner1.png" alt="" />
        <div className="absolute flex bottom-0 bg-bg2  w-full z-10">
          <div className="w-28 h-28  rounded-full border-4 border-white -translate-y-6 translate-x-6 overflow-hidden">
            <img
              src="/bannerpfp.png"
              className="w-full h-full object-cover"
              alt=""
            />{" "}
          </div>
          <div
            id="texts"
            className="h-full ml-9 flex justify-center items-center"
          >
            <span
              id="names"
              className="text-sm  text-accent1 flex flex-col gap-1 justify-center px-10 my-5"
            >
              <h1 className="flex gap-1 text-xl items-center text-black">
                {doctor.name}
                <CheckCircle className="h-full text-blue-900" weight="fill" />
              </h1>
              <h2 className="font-medium">{doctor.desig}</h2>
              <h3 className="flex gap-1 item-center ">
                {doctor.rating} {Stars(doctor.rating)}
              </h3>
            </span>
            <span id="info" className="flex justify-center items-center">
              <ul className="flex gap-4">
                {Object.entries(doctor.info).map(([key, value], index) => {
                  return (
                    <li key={index} className="text-center">
                      <h2 className="text-accent1 font-semibold">{key}</h2>{" "}
                      <h1>{value}</h1>
                    </li>
                  );
                })}
              </ul>
            </span>
            <span
              id="Link"
              className="flex justify-center cursor-pointer items-center bg-accent1 text-lg text-white h-fit px-4 py-2 ml-20 rounded-md"
            >
              <Link to={`bookdoc/${docId}`}> Book an Appointment</Link>
              
            </span>
          </div>
        </div>
      </span>
    </span>
  );
}
Banner.propTypes = {
  docId: PropTypes.number.isRequired,
};
