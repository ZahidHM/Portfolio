import { Icon } from "astro-icon/components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react"

export const Carrousel = () => {
    const content = [
        { id: 1, name: "Zahid Hernandez Mejia", img: "/yo.png" },
        { id: 2, name: "Fernando Aguilar", img: "/Fer.jpg" }
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
                    className="hover:animate-pulse bg-linear-to-br from-sky-600 via-cyan-400 to-blue-400
                     text-2xl  opacity-80 cursor-pointer rounded-l-md p-2"
                    onClick={handlePrev}>
                    <ChevronLeft color="white" />
                </button>
                {content.map((person, index) => index === current && (
                    <div key={index} className="w-md">
                        <main>
                            <div className="relative flex justify-center items-center">
                                <div
                                    className="absolute inset-0 bg-linear-to-br from-sky-600 via-cyan-400 to-blue-400 opacity-80 rounded-xl"
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
                                    <a className="bg-white p-2 rounded animate-tada" href="">
                                        <svg className="icon w-10 h-10 fill-blue-500">
                                            <use xlinkHref="/assets/sprites/sprite.svg#linkedin"
                                            ></use>
                                        </svg>
                                    </a>
                                    <a
                                        className="bg-white p-2 rounded animate-tada animate-delay-800"
                                        href=""
                                    >
                                        <svg className="icon w-10 h-10">
                                            <use xlinkHref="/assets/sprites/sprite.svg#github"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </main>
                    </div>


                )
                )}
                <button
                    className="hover:animate-pulse bg-linear-to-br from-sky-600 via-cyan-400 to-blue-400 
                    text-2xl  opacity-80 cursor-pointer rounded-r-md p-2"
                    onClick={handleNext}>
                    <ChevronRight color="white" />
                </button>
            </div>
        </>
    )
}

