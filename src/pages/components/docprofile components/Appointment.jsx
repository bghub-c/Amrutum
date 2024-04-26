import {
  CheckCircle,
  CalendarBlank,
  ArrowCircleRight,
  ArrowCircleLeft,
} from "@phosphor-icons/react";
export default function Appointment() {
  const appointments = {
    Inclinic: "45 Mins",
    Video: "45 Mins",
    Chat: "10 Mins",
  };
  const times = [
    {
      date: "Mon, 10 Oct",
      slotes: "10",
      easee: 1,
    },
    {
      date: "Tue, 11oct",
      slotes: "02",
      easee: 3,
    },
    {
      date: "Wed, 12 Oct",
      slotes: "05",
      easee: 2,
    },
  ];
  return (
    <section className="w-full pt-6 px-3 border border-zinc-200 rounded-2xl interfont">
      <div className="border border-zinc-200 rounded-xl pl-8 p-2 flex justify-between font-semibold text-lg">
        {" "}
        Appointment Fee{" "}
        <span className="text-accent1  mr-10">{`\u20B9`} 699.00 </span>
      </div>
      <div id="mode" className="">
        <span className="text-zinc-800  relative flex flex-row justify-stretch my-14 w-11/12">
          <div className=" h-[1px] w-full bg-zinc-200"></div>{" "}
          <div className="absolute left-0 -top-3 bg-white px-2 font-semibold ">
            Select your mode of session
          </div>
        </span>
        <div
          id="modebuttons"
          className="w-full flex gap-3 justify-center tracking-widest text-center"
        >
          <button className="py-3 px-8 border border-zinc-300 rounded-xl focus:border-accent1 focus:bg-accent1lt transition-all group poppins">
            <h1 className="flex items-center justify-center gap-2 font-medium group-focus:text-accent1">
              In Clinic{" "}
              <CheckCircle
                className="h-full group-focus:flex hidden  text-accent1"
                weight="fill"
              />
            </h1>{" "}
            <h2 className="text-zinc-400 text-sm font-light">
              {appointments.Inclinic}
            </h2>
          </button>
          <button className="py-3 px-8 border border-zinc-300 rounded-xl focus:border-accent1 focus:bg-accent1lt transition-all group poppins">
            <h1 className="flex items-center justify-center gap-2 font-medium group-focus:text-accent1">
              Video{" "}
              <CheckCircle
                className="h-full group-focus:flex hidden  text-accent1"
                weight="fill"
              />
            </h1>{" "}
            <h2 className="text-zinc-400 text-sm font-light">
              {appointments.Video}
            </h2>
          </button>
          <button className="py-3 px-8 border border-zinc-300 rounded-xl focus:border-accent1 focus:bg-accent1lt transition-all group poppins">
            <h1 className="flex items-center justify-center gap-2 font-medium group-focus:text-accent1">
              Chat{" "}
              <CheckCircle
                className="h-full group-focus:flex hidden  text-accent1"
                weight="fill"
              />
            </h1>{" "}
            <h2 className="text-zinc-400 text-sm font-light">
              {appointments.Chat}
            </h2>
          </button>
        </div>
      </div>
      <div id="time" className="w-full ">
        <span className="text-zinc-800  relative flex flex-row justify-stretch my-14 w-11/12">
          <div className=" h-[1px] w-full bg-zinc-200"></div>{" "}
          <div className="absolute left-0 -top-3 bg-white px-2 font-semibold ">
            Pick a time slot
          </div>
          <div></div>
          <CalendarBlank
            onClick={() => {
              console.log("Calender");
            }}
            className="absolute right-0 -top-5 bg-white px-2 font-semibold "
            size={42}
          />
        </span>
        <div className="flex w-full justify-between items-center border p-5 rounded-2xl">
          <ArrowCircleLeft size={32} />
          <div id="timecards" className="flex gap-4">
            {times.map((time, index) => {
              return (
                <span
                  key={index}
                  className=" p-3 border rounded-xl text-center"
                >
                  <h1>{time.date}</h1>
                  <h2
                    className={`${
                      time.easee === 1
                        ? "text-zinc-400"
                        : time.easee === 2
                        ? "text-yellow-500"
                        : time.easee === 3
                        ? "text-red-600"
                        : ""
                    }`}
                  >
                    {time.slotes}
                  </h2>
                </span>
              );
            })}
          </div>
          <ArrowCircleRight size={32} />
        </div>
      </div>
      <div></div>
    </section>
  );
}
