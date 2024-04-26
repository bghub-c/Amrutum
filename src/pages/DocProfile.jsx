import { useParams } from "react-router-dom";
import Banner from "./components/docprofile components/Banner";
import Speciality from "./components/docprofile components/Speciality";
import About from "./components/docprofile components/About";
import Concerns from "./components/docprofile components/Concerns";
import Work from "./components/docprofile components/Work";
import Reviews from "./components/docprofile components/Reviews";
import Appointment from "./components/docprofile components/Appointment";

export default function DocProfile() {
  const { docId } = useParams(); // Can be used to make fetch request for aspecific doctor
  return (
    <section className="w-screen h-full flex justify-center">
      <section
        id="mainconainer"
        className="w-11/12 h-full mt-10 grid gap-3 grid-cols-2"
      >
        <Banner docId={docId} />
        <div id="leftcont" className="flex flex-col gap-5 h-fit">
          <About />
          <Speciality />
          <Concerns/>
          <Work/>
          <Reviews/>
        </div>
        <div id="rightcont" className=""> <Appointment/> </div>
        
      </section>
    </section>
  );
}
