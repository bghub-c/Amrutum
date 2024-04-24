import { useParams } from "react-router-dom";
import Banner from "./components/docprofile components/Banner";

export default function DocProfile(){
    const { docId } =useParams();  // Can be used to make fetch request for aspecific doctor
    return(
        <section className="w-screen h-full flex justify-center">
                <section id="mainconainer" className="w-4/5 h-screen grid grid-cols-2">
                    <Banner docId={docId}/>
                    <div id="leftcont"><div id="About" className="">About</div>
                    <div id="Speciality" className="col-span-2">Speciality</div>
                    <div id="Treatment" className="col-span-2">Treatment</div>
                    <div id="Experience">Experience</div>
                    <div id="Reviews">Reviews</div></div>
                    
                    <div id="Rightcont" className="row-span-2 bg-blue-300"> 123</div>
                    
                </section>
        </section>
    );
}