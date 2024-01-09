
import ProjectCard from "./ProjectCard";
import {AiOutlineArrowRight} from 'react-icons/ai'
import resumily from '../assets/resumily.png';
import resumilyia from '../assets/resumilyia.png';
import weather from '../assets/weather.png';
import netflix from '../assets/netflix.png';
import agency from '../assets/agency.png'
import TrackVisibility from 'react-visibility-sensor';


const Projects = () => {
  const projects = [
    {
      title: "Resumily",
      description: "Resumily is a dedicated online platform crafted by my team and me. Our goal with Resumily is to simplify the learning journey for CS students, providing them with easy access to a wide range of  course notes.",
      imgUrl: resumily,
      url:"https://resumily-3ba3c.web.app/index.html",
      urltitle: "go live"
    },
    {
      title: "Resumily AI",
      description: "Resumily AI, another project crafted by my team and me, is a website dedicated to the diverse fields and applications of Artificial Intelligence ",
      imgUrl: resumilyia,
      url:"https://resumily-ai.web.app/",
      urltitle: "go live"
    },
    {
      title: "netflix clone",
      description: "I've developed a Netflix clone featuring robust authentication functionality, powered by Firebase. ",
      imgUrl: netflix,
      url:"https://github.com/medjbersoundous/netflix-clone-auth-tailwind-react.git",
      urltitle: "go code"
    },
    {
        title: "weather app ",
        description: "The Weather App offers a seamless weather experience. It delivers detailed current-day weather data upon location search and extends its functionality to provide a week-long weather forecast, ensuring users are well-informed  ",
        imgUrl: weather,
        url:"https://github.com/medjbersoundous/weather-app-using-tailwind.git",
        urltitle: "go code"
      },
      // {
      //   title: "travel project app ",
      //   description: "react a netflix clone app with firebase and authenontication  ",
      //   imgUrl: agency,
      //   url:"https://github.com/medjbersoundous/projet-daw.git",
      //   urltitle: "go code"
      // },
    
  
  ];

  return (
    <section className="project ps-[80px] px-0 relative  bg-black" id="projects">
      
      <div className="container mx-auto py-10">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "" : ""}>
              <h2 className="text-[45px] text-center font-semibold">Projects</h2>
  
              <p className="text-gray-600 text-[18px] mt-[14px] mx-auto mb-[30px] text-center w-[56%] leading-[22px] ">
  
              Discover my world of web development through these carefully crafted projects. Each one is a testament to my dedication to creating user-friendly, visually appealing websites. Dive in to see how I bring ideas to life in the digital realm

              </p>
              <div className="mt-8">
    
                <div id="slideInUp" className={isVisible ? "" : ""}>
                  <div id="tab1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
      <div className="flex justify-center items-center"> 

            <button className="md:relative overflow-hidden font-semibold rounded-[15px] text-white border border-solid border-white py-3 px-8 text-lg ml-4 bg-transparent transition duration-300 ease-in-out z-10 group hover:text-black mr-[6%] ">
              <a href="https://github.com/medjbersoundous"><span className="relative z-10 flex items-center"> Other projects <AiOutlineArrowRight className="font-bold ml-2 text-xl"/> </span></a> 
              <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
      </div>
    </section>
  );
};

export default Projects;
