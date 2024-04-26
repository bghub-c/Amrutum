export default function Work() {
    const works = [
      {
        name:"Midtown Medical Clinic",
        desig:"Senior doctor",
        duration:"2016-PRESENT"
      },
      {
        name:"Midtown Medical Clinic",
        desig:"Senior doctor",
        duration:"2010-2015"
      }
    ];
  const workexp=7;
    return (
      <section id="Work" className="border rounded-2xl overflow-hidden flex flex-col w-full h-full text-zinc-800">
        <h1 className="w-full h-fit text-xl pl-6 py-2 bg-bg3 place-self-start nunito">
          My Work Experience
        </h1>
        <div id="contain" className="w-full h-full ml-4 poppins">
        <h2 className="text-accent1 w-fit my-4 pb-5 font-semibold border-b text-sm ">I HAVE BEEN IN PRACTICE FOR : {workexp}+ YEARS </h2>
        {
            works.map((work, index)=>{
                return(
                    <div key={index} className="w-full flex items-center gap-4 my-2 text-zinc-500 text-sm">
                        <img src="/home.png" className="w-fit h-fit" alt="" />
                        <span id="name" className="flex flex-col "> <h1 className="font-semibold text-zinc-800">{work.name}</h1><h2>{work.desig}</h2> </span>
                        <span className="mx-auto">{work.duration}</span>
                    </div>
                );
            })
        }
        </div>
        
      </section>
    );
  }
  