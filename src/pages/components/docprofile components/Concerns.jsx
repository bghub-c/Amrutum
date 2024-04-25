export default function Concerns() {
    const concerns = [
      "Skin Treatment", "Pregnancy", "Period Doubts", "Endometriosis", "Pelvic Pain", "Ovarian Cysts", "extra1", "extra2", "extra3", "extra4", "extra5","extra6",
    ];
  
    return (
      <section id="Concerns" className="border rounded-2xl overflow-hidden flex flex-col w-full h-full text-zinc-800">
        <h1 className="w-full h-fit text-xl pl-6 py-2 bg-bg3 place-self-start">
          The Concerns I Treat
        </h1>
        <div id="con" className="flex flex-wrap gap-3 my-5 ml-5 text-sm">
          {concerns.map((concern, index) => (
            <>
              {index <= 5 ? (
                <span key={index} className="bg-accent1lt text-accent1 p-1 px-2 rounded-full">
                  {concern}
                </span>
              ) : index === concerns.length - 1 ? (
                <span key={index} className="bg-accent1lt text-accent1 p-1 px-2 rounded-full">
                  + {concerns.length - 6} more
                </span>
              ) : null}
            </>
          ))}
        </div>
      </section>
    );
  }
  