import { Star } from "@phosphor-icons/react";
export default function Reviews() {
  const reviewcount = 102;
  const reviews = [
    {
      name: "Alicent Hightower",
      info: "Consulted for Skin care",
      imgsrc: "/public/pfprev.png",
      stars: 5,
      date: "20 January 2023",
      msg:
        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    },
    {
      name: "Alicent Hightower",
      info: "Consulted for Skin care",
      imgsrc: "/public/pfprev.png",
      stars: 5,
      date: "20 January 2023",
      msg:
        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    },
  ];
  return (
    <section
      id="review"
      className="border rounded-2xl overflow-hidden flex flex-col w-full h-fit text-zinc-800"
    >
      <h1 className="w-full h-fit text-xl pl-6 py-2 bg-bg3 place-self-start">
        Featured Reviews ({reviewcount})
      </h1>
      <div className="flex flex-col gap-5 my-4 w-11/12 place-self-center text-sm">
        {reviews.map((review, index) => {
          return (
            <div key={index} className="bg-zinc-100 rounded-xl px-5">
              <div id="heading" className="flex mt-3 gap-3 items-center text-zinc-500">
                <img src={review.imgsrc} className="m-2" alt="" />
                <span className="flex flex-col ">
                  <h1 className="text-zinc-700 font-semibold text-md">{review.name}</h1>
                  <h1>{review.info}</h1>
                </span>
                <h1 className="mx-auto">{review.date}</h1>
              </div>
              <div id="stars" className="flex">
                {Array.from({ length: review.stars }, (_, index) => (
                  <span key={index}><Star className="h-full text-orange-500" weight="fill" /></span>
                ))}
              </div>
              <div id="msg" className=" mb-5 mt-2">
                {review.msg}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
