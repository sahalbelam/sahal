"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import StackIcon from "tech-stack-icons";

gsap.registerPlugin(Draggable, InertiaPlugin);

const icons = [
  { name: "postgresql" },
  { name: "git" },
  { name: "github" },
  { name: "mongodb" },
  { name: "nextjs2" },
  { name: "react" },
  { name: "firebase" },
  { name: "prisma" },
  { name: "expressjs" },
  { name: "nodejs" },
];

const Techstack = () => {
  
  useEffect(() => {
    const area = document.querySelector<HTMLElement>(".drag-area");
    if (!area) return;
    const areaRect = area.getBoundingClientRect();
    const icons = gsap.utils.toArray<HTMLElement>(".draggable-icon");

    icons.forEach((el, i) => {
      // Responsive initial positions
      const iconSize = el.offsetWidth || 48;
      const maxX = areaRect.width - iconSize;
      const maxY = areaRect.height - iconSize;
      gsap.set(el, {
        x: Math.min(i * (iconSize + 12) + Math.random() * 30, maxX),
        y: Math.random() * maxY * 0.7,
      });

      Draggable.create(el, {
        type: "x,y",
        inertia: true,
        bounds: area,
        edgeResistance: 0.8,
      });
    });
    // Reposition on resize
    const handleResize = () => {
      const areaRect = area.getBoundingClientRect();
      icons.forEach((el, i) => {
        const iconSize = el.offsetWidth || 48;
        const maxX = areaRect.width - iconSize;
        const maxY = areaRect.height - iconSize;
        gsap.set(el, {
          x: Math.min(i * (iconSize + 12) + Math.random() * 20, maxX),
          y: Math.random() * maxY * 0.7,
        });
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col space-y-4 max-w-5xl w-full p-2 sm:p-4 mt-4">
        <div className="text-lg sm:text-xl font-extrabold">Tech Stack</div>
        <div
          className="
            drag-area relative
            h-[160px] sm:h-[200px] md:h-[240px]
            mx-1 sm:mx-4
            border-2 border-neutral-500 rounded-2xl
            min-w-[220px] w-full
            overflow-hidden
          "
        >
          {icons.map((icon) => (
            <StackIcon
              key={icon.name}
              className="draggable-icon absolute cursor-pointer w-10 h-10 sm:w-12 sm:h-12"
              name={icon.name}
            />
          ))}
          <svg
            className="draggable-icon absolute cursor-pointer w-10 h-10 sm:w-12 sm:h-12"
            height={50}
            width={50}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Clerk</title>
            <path d="m21.47 20.829-2.881-2.881a.572.572 0 0 0-.7-.084 6.854 6.854 0 0 1-7.081 0 .576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69.57.57 0 0 0 .166.186 12 12 0 0 0 14.113 0 .58.58 0 0 0 .239-.423.576.576 0 0 0-.172-.453Zm.002-17.668-2.88 2.88a.569.569 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0-1.222 3.692 6.86 6.86 0 0 0 .978 3.764.573.573 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405.566.566 0 0 1 .232.418.57.57 0 0 1-.168.448Zm-7.118 12.261a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
