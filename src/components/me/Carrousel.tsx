import { Icon } from "astro-icon/components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react"

export const Carrousel = () => {
    const content = [
        { 
            id: 1, 
            name: "Zahid Hernandez Mejia", 
            img: "/yo.png",
            description: "Desarrollador apasionado por las nuevas tecnologias, enfocado en soluciones escalables y sostenibles.",
            linkedin: "", 
            github: "https://github.com/ZahidHM"
        },
        { 
            id: 2, 
            name: "Fernando Aguilar", 
            img: "/Fer.jpg",
            description: "Desarrollador enfocado en tecnologías modernas.",
            linkedin: "https://www.linkedin.com/in/bryan-fernando-aguilar-torres-05b488354/",
            github: "https://github.com/FernandoBATY"
        }
    ]
    const [current, setCurrent] = useState(0);
    const handlePrev = () => {
        if (current != 0) {
            setCurrent(current - 1);
        }
    }

    const handleNext = () => {
        if (current < content.length - 1) {
            setCurrent(current + 1);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center w-full ">
                <button
                    className="hover:animate-pulse bg-linear-to-br from-slate-600 via-slate-500 to-slate-700
                     text-2xl  opacity-90 cursor-pointer rounded-l-md p-2"
                    onClick={handlePrev}>
                    <ChevronLeft color="white" />
                </button>
                {content.map((person, index) => index === current && (
                    <div key={index} className="w-md">
                        <main>
                            <div className="relative flex justify-center items-center">
                                <div
                                    className="absolute inset-0 bg-linear-to-br from-slate-600 via-slate-500 to-slate-700 opacity-90 rounded-xl"
                                >
                                </div>
                                <div className="relative flex flex-col items-center justify-center">
                                    <h1 className="text-xl mt-2 text-white text-center font-montserrat font-semibold">{person.name}</h1>
                                    <img
                                        src={person.img}
                                        alt=""
                                        className="animate-blurred-fade-in animate-duration-[2.2s] animate-delay-500 w-60 h-60 object-cover mask-radial-at-center mask-radial-from-60% mask-radial-to-64%"
                                    />
                                </div>
                                <div className="absolute bottom-0 flex gap-2">
                                    <a className="bg-white p-2 rounded animate-tada" href={person.linkedin || "#"}>
                                        <svg className="icon w-10 h-10 fill-blue-500">
                                            <use xlinkHref="/assets/sprites/sprite.svg#linkedin"
                                            ></use>
                                        </svg>
                                    </a>
                                    <a
                                        className="bg-white p-2 rounded animate-tada animate-delay-800"
                                        href={person.github}
                                    >
                                        <svg className="icon w-10 h-10">
                                            <use xlinkHref="/assets/sprites/sprite.svg#github"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </main>
                        <section className="my-10">
                            <div className="relative flex justify-center items-center">
                                <div
                                    className="absolute inset-0 bg-linear-to-br from-slate-600 via-slate-500 to-slate-700 blur-xs opacity-90 rounded-xl"
                                >
                                </div>
                                <div
                                    className="w-full m-1 timeline-view animate-fade-in-up animate-range-[entry_70%_cover_90%] bg-white p-6 rounded-lg"
                                >
                                    <p className="text-center font-montserrat font-semibold">
                                        {person.description}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>


                )
                )}
                <button
                    className="hover:animate-pulse bg-linear-to-br from-slate-600 via-slate-500 to-slate-700 
                    text-2xl  opacity-90 cursor-pointer rounded-r-md p-2"
                    onClick={handleNext}>
                    <ChevronRight color="white" />
                </button>
            </div>
        </>
    )
}

