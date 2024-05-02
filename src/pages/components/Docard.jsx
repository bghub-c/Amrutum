import { Pill, GraduationCap, ChatText, Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
export default function Docard() {
  const docs = [
    {
      id: 1,
      stars:4.5,
      name: "Dr. Prerna Narang",
      imgsrc: "/09217e175d69b8cfd3da49cb2a8a6437.png",
      rating: 4.5,
      expertise: "Male-Female Infertility",
      experience: "7",
      Languages: ["English", "Hindi", "Marathi"],
      charges: [
        { type: "Video Consultation", money: 800 },
        { type: "Chat Consultation", money: "Free" },
      ],
    },
    {
      id: 2,
      stars:4.5,
      name: "Dr. Prerna Narang",
      imgsrc: "/09217e175d69b8cfd3da49cb2a8a6437.png",
      rating: 4.5,
      expertise: "Male-Female Infertility",
      experience: "7",
      Languages: ["English", "Hindi", "Marathi"],
      charges: [
        { type: "Video Consultation", money: 800 },
        { type: "Chat Consultation", money: "Free" },
      ],
    },
    {
      id: 3,
      stars:4.5,
      name: "Dr. Prerna Narang",
      imgsrc: "/09217e175d69b8cfd3da49cb2a8a6437.png",
      rating: 4.5,
      expertise: "Male-Female Infertility",
      experience: "7",
      Languages: ["English", "Hindi", "Marathi"],
      charges: [
        { type: "Video Consultation", money: 800 },
        { type: "Chat Consultation", money: "Free" },
      ],
    },
  ];
  return (
    <section className="h-full w-screen flex justify-center nunito">
      <div id="cards" className="w-9/12 h-full grid grid-cols-3 gap-6">
        {docs.map((doc, index) => (
          <div
            key={index}
            className="laptop:w-full h-full mx-5 group bg-bg2 rounded-2xl shadow-xl flex flex-col items-center justify-start"
          >
            <div id="img-name" className="relative flex flex-col items-center mt-9 ">
              <div className=" rounded-full overflow-hidden w-[120px] h-[120px] flex items-center justify-center">
                <img
                  src={doc.imgsrc}
                  className="h-[120px] w-[120px] rounded-full object-cover"
                  alt={doc.name}
                />
                <span className="absolute bottom-10 z-50 py- px-2 text-white rounded-full bg-gradient-to-b from-black to-black/50 flex items-center gap-1">{doc.stars} <Star className="h-full text-yellow-500" weight="fill"/></span>
              </div>
              <h1 className="mt-4 w-full tracking-widest  text-lg font-bold">
                {doc.name}
              </h1>
            </div>
            <div id="specs" className="grid grid-rows-3">
              <span className="flex justify-start gap-2 text-accent1 text-xs items-center">
                <Pill size={20} />
                <h2 className="text-zinc-600">{doc.expertise}</h2>
              </span>
              <span className="flex justify-start gap-2 text-accent1 text-xs items-center">
                <GraduationCap size={20} />
                <h2 className="text-zinc-600">{`${doc.experience} years of Experience `}</h2>
              </span>
              <span className="flex justify-start gap-2 text-zinc-600 text-xs items-center">
                <ChatText size={20} className="text-accent1" /> Speaks: <span className="flex gap-1"> 
                {doc.Languages.map((lang, index) => (
                  <h2 className="text-zinc-600" key={index}>{lang}{(index<2)?",":"."}</h2>
                ))}</span>
              </span>
            </div>
            <div id="charges" className="flex flex-row gap-2 text-xs mt-4">
              {doc.charges.map((charge, index) => (
                <span
                  className="border border-accent1 rounded-lg text-center p-2"
                  key={index}
                >
                  <h1>{charge.type}</h1> <h2 className="text-accent1 font-semibold">{`\u20B9 ${charge.money}`}</h2>
                </span>
              ))}
            </div>
            <div
              id="links"
              className="w-full flex justify-center flex-col gap-1 px-8 my-7 text-xs tracking-widest"
            >
              <Link to={`/docs/${doc.id}`}>
                <h1 className="w-full bg-white border border-accent1 hover:bg-accent1 hover:text-white rounded-lg text-accent1 text-center py-1 transition-colors">
                  View Profile
                </h1>
              </Link>
              <Link to={`/appointment/${doc.id}`}>
                <h1 className="w-full bg-accent1 rounded-lg text-white hover:bg-white hover:text-accent1 border hover:border-accent1 text-center py-1 transition-colors">
                  Book Appointment
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}