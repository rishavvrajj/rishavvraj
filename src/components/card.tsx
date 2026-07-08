import Link from "next/link";

const projectLink = [
  { title: "mojito landing page", description: "landing page built with GSAP ScrollTrigger and smooth scroll‑based effects.", link: "https://mojito-gules-omega.vercel.app/", img: "/mojito.png", status: "" },
  { title: "Coming Soon", description: "Something exciting is on the way.", link: "./", img: "/coming-soon.jpg", status: "Coming Soon"},
  // { title: "C", description: "awefa", link: "", img: "/profile.jpg", status: "" },
  // { title: "D", description: "aegv", link: "", img: "/profile.jpg", status: "" },
];

export default function Card() {
  return (
    <div className="border-t flex-wrap max-w-3xl hover:cursor-pointer border-zinc-500 text-blue-100 pt-3 flex items-start justify-between gap-5">
      {projectLink.map((card) => (
        <Link key={card.title} href={card.link} target="_blank">
          <div
            key={card.title}
            className="max-w-92 h-fit gap-2 flex flex-col justify-start rounded-lg shadow-sm opacity-60 hover:opacity-80 transition duration-300 ease-in-out"
          >
            <div className="img overflow-hidden rounded-md">
              <img
                src={card.img}
                alt={card.title}
                className="h-50 w-fit rounded-md object-fit border 2 solid border-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>

            <div className="m-1">
              <h2 className="text-sm text-blue-50">{card.title}</h2>

              {card.description && (
                <p className="text-xs text-blue-100 mt-1">{card.description}</p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}