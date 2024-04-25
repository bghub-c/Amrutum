export default function Speciality(){
    const specials=[ 
        {
            title:"Women's Health",
            img:"/Clip path group.png"
        },
        {
            title:"Skin Care",
            img:"/Skincare.png"
        },
        {
            title:"Immunity",
            img:"/Immunity.png"
        },
        {
            title:"Hair Care",
            img:"/Hair.png"
        }
    ]
        
    return(
        <section id="specialityico" className="border rounded-2xl overflow-hidden flex flex-col w-full h-fit text-zinc-800">
         <h1 className="w-full h-fit text-xl pl-6 py-2 bg-bg3 place-self-start">I Specialize In</h1>
         <div id="specialityico" className="flex mt-16 ml-4 mb-8 gap-4 text-zinc-800 font-medium">
        {specials.map((special, index) => (
          <div key={index} className="flex flex-col items-center justify-center ">
            <span id="img" className="p-2 bg-bg2 rounded-lg border border-zinc-300"><img src={special.img} alt="" /></span>
            <span className="mt-4">{special.title}</span>
          </div>
        ))}
      </div>
        </section>
    )
}