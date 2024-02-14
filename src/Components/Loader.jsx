import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          comp.current.style.display = "none";
        },
      });
      t1.from("#introSlider", {
        opacity: 0,
        duration: 0,
      })
        .from(["#tittle1", "#tittle2", "#tittle3", "#tittle4"], {
          opacity: 0,
          x: "-=30",
          stagger: 0.5,
        })
        .to(["#tittle1", "#tittle2", "#tittle3", "#tittle4"], {
          opacity: 0,
          x: "+=30",

          stagger: 0.5,
        })

        .to("#introSlider", {
          opacity: 0,
          duration: 0,
          delay: 0,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex " ref={comp}>
      <div
        id="introSlider"
        className="h-screen justify-center bg-[#E1D7C4] font-spaceGrotesk w-full flex  absolute top-0 left-0"
      >
        <div className="flex h-screen w-[100%] justify-center place-items-center p-0 gap-10 tracking-tight text-[black] container  absolute top-0 left-0">
          <div className="flex flex-col gap-5 ">
            <h1 id="tittle1" className="text-8xl font-extrabold">
              MUIZ
            </h1>
            <h1 id="tittle2" className="text-8xl font-extrabold">
              FRONTEND
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1 id="tittle3" className="text-8xl">
              OWOLABI
            </h1>
            <h1 id="tittle4" className="text-8xl">
              DEVELOPER
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
