import { useParams } from "react-router-dom";
import Banner from "./components/docprofile components/Banner";
import Speciality from "./components/docprofile components/Speciality";
import About from "./components/docprofile components/About";

export default function DocProfile() {
  const { docId } = useParams(); // Can be used to make fetch request for aspecific doctor
  return (
    <section className="w-screen h-full flex justify-center">
      <section
        id="mainconainer"
        className="w-11/12 h-full mt-10 grid gap-3 grid-cols-2"
      >
        <Banner docId={docId} />
        <div id="leftcont" className="flex flex-col gap-3 h-fit">
          <About />
          <Speciality />
          <div id="Treatment" className="col-span-2">
            Treatment
          </div>
          <div id="Experience">Experience</div>
          <div id="Reviews">Reviews</div>
        </div>

        <div id="Rightcont" className="row-span-2 bg-blue-300">
          123
        </div>
      </section>
    </section>
  );
}
