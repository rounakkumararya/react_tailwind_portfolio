// import content
import { useEffect, useRef, useState } from "react";
import { RiLeafFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { content } from "../../Content";
import { createElement } from "react";

const Hero = () => {
  const { socials, hero } = content;
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <section className="">
      <div className=" min-h-screen flex lg:flex-row flex-col lg:items-center justify-between items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="150"
          className="absolute h-full lg:w-6/12 w-3/12 top-0 right-0  bottom-0 -z-10"
        >
          <img
            width="100%"
            className="h-full object-cover"
            src={hero.background}
            alt=""
          />
          <h1 className="rotate-90 absolute top-[50%] right-[-23%] text-lime-500">
            {hero.firstName}{" "}
            <span className=" text-zinc-500">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="pb-10 md:pb-0 lg:px-auto pt-40   flex flex-wrap flex-col justify-start lg:align-middle lg:items-center lg:justify-center w-3/4 lg:w-1/2 lg:pt-20"
          data-aos="fade-down"
        >
          <h1>
            {hero.title[0]}{" "}
            <span className="text-lime-500 text-center block">&</span>
          </h1>
          <h1>{hero.title[1]}</h1>
          <br />

          <div className="flex  w-full text-center align-middle justify-center  mt-5">
            <div
              data-aos="fade-down"
              data-aos-delay={300}
              className="flex align-middle text-center lg:justify-center items-center w-full gap-5"
            >
              <p className="quote w-[80%] lg:w-[70%] italic">
                "{hero.hero_content.text}"
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-10 justify-start">
            <a href={hero.btnLink[0]} target="_blank">
              <button className="btn">{hero.btnText[0]}</button>
            </a>
            <a href={hero.btnLink[1]} target="_blank">
              <button className="btn">{hero.btnText[1]}</button>
            </a>
          </div>
        </div>

        {/* sec col */}
        <div className="md:pt-10 bottom-0 lg:pt-0  lg:h-[100vh] flex w-3/4 md:w-1/2 float-right items-end justify-end lg:justify-start h-100">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Profile"
            className="lg:h-[80%] md:h-[60%] h-[15rem]  object-cover"
          />
        </div>
        <button
          className={` py-2 px-2 border-2 rounded-full 
     border-lime-500  active:scale-95 text-2xl shadow-xl hover:scale-125 duration-200 hover:rounded-tl-3xl hover:bg-lime-500 text-lime-500 hover:text-white fixed left-10 z-50  bottom-10  ${
       !showMenu
         ? "left-6 md:left-10 md:bottom-10 bottom-28"
         : "left-[-100%] bottom-[-100%]"
     }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <RiLeafFill />
        </button>
        <div
          className={`fixed  z-[999] flex flex-col items-center gap-3 duration-300 transition  ${
            showMenu ? "left-6 md:left-10 md:bottom-10 bottom-28" : "hidden "
          }`}
          ref={menuRef}
        >
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className="text-3xl  bg-slate-200/90 px-3 py-3 backdrop-blur-md  text-stone-700 active:scale-95 hover:scale-150 duration-200  p-2 rounded-full "
            >
              {createElement(item.icon, { color: item.color })}
            </a>
          ))}
          <IoClose
            onClick={() => setShowMenu(false)}
            className="text-4xl  active:scale-95 hover:scale-150 transition duration-500 text-lime-500 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
