import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors, faLaptop, faMobileAlt, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    icon: faScissors,
    title: 'barberShop',
    description: 'An appointment booking system using HTML, CSS, JavaScript, PHP'
  },
  {
    icon: faScissors,
    title: 'barberShop React Native',
    description: "An appointment booking system using React Native and API's"
  },
  {
    icon: faMobileAlt,
    title: 'MobileMania',
    description: 'Mobile phone sales using HTML, CSS, JavaScript, PHP'
  },
  {
    icon: faPaw,
    title: 'petAdopt',
    description: 'Pet adoption using HTML, CSS, JavaScript, PHP'
  },
  {
    icon: faLaptop,
    title: 'HTML, SCSS, CSS',
    description: 'A website created using HTML, CSS, SCSS, JavaScript.'
  }
];

function Projects() {
  const sectionRef = useRef(null);

  return (
    <section id="projects" className="lg:h-[100vh] bg-black h-full" ref={sectionRef}>
      <div className="container page-wrapper mx-auto transition-opacity duration-500">
        <div className="w-full uppercase text-center lg:h-[95vh] lg:text-left font-bold h-auto">
          <h1 className="text-xl text-white">Projects</h1>
          <hr className="border-gray-300 w-full my-1" />
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
              }}
              className="w-full h-[35vh]"
              pagination={{ clickable: true }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded shadow-md text-center h-full p-4 flex flex-col justify-center items-center">
                    <div className="text-4xl mb-4">
                      <FontAwesomeIcon icon={project.icon} />
                    </div>
                    <h2 className="text-sm font-bold">{project.title}</h2>
                    <p className="text-lg mt-2">{project.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full flex flex-col justify-center items-center my-20 text-white">
              <h2 className="mb-2">If you want more, click the GITHUB button</h2>
              <a href="https://github.com/lacikovacs330" className="w-[120px] flex justify-between items-center px-2 py-2 border-2 border-white text-white rounded-xl">
                More
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
