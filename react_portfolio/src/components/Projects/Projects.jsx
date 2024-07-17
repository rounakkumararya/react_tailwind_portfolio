import { content } from "../../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-zinc-900 min-h-fit " id="projects">
      <div className="  px-16  py-14  flex flex-col justify-between">
        <div>
          <h2
            className="title text-lime-500  lg:text-6xl text-start"
            data-aos="fade-down"
          >
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex flex-wrap items-center align-middle justify-center w-full gap-5">
          {Projects.project_content.map((content, i) => (
            <figure key={i} className="snip0019 ">
              <img src={content.image} alt="sample11" />
              <figcaption>
                <div>
                  <h2>{content.title}</h2>
                </div>

                <div>
                  <p>{content.description}</p>
                </div>
                <a href={content.link} target="_blank" rel="noreferrer"></a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
