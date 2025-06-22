"use client";

import "../app/lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";

import { setupIntersectionAnimations } from "../app/animateIfInView";
import { ContactForm } from "./contactForm";
import { motion } from "motion/react";

type ExperienceItem = {
  icons: string;
  role: string;
  date: string;
  description: string[];
  skillIconList: string[];
  link: string;
};

const externalLink = (
  <FontAwesomeIcon
    icon={["fas", "external-link"]}
    className="w-5 h-5 text-md"
  />
);

export default function Home() {
  // made the script runnable, so now we can use useEffect to call the setup function.
  useEffect(() => {
    setupIntersectionAnimations();
  }, []);

  const mySkills = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "Tensorflow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "GitLab",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
    },
  ];

  const myExperience: { [key: string]: ExperienceItem } = {
    "ST Engineering IDirect": {
      icons: "stLogo.jpg",
      role: "Incoming Software Engineering Intern",
      date: "May 2025 - Present",
      description: [
        "• Currently working as a DevSecOps Software Engineering Intern at ST Engineering iDirect, exploring CI/CD pipeline development, infrastructure as code (IaC), containerization, and secure software delivery.",
      ],
      skillIconList: [
        mySkills[0].icon,
        mySkills[1].icon,
        mySkills[2].icon,
        mySkills[3].icon,
      ],
      link: "https://www.idirect.net",
    },
    "UVA DS": {
      icons: "uvaIcon.png",
      role: "Undergraduate Research Intern",
      date: "Jan. 2025 - Present",
      description: [
        "• Develop a visual analytics platform using Python and SQL to analyze multi-modal neuroscience datasets.",
        "• Support early diagnosis and treatment strategies for cognitive disorders through deep learning architectures.",
        "• Optimize model accuracy and provide an intuitive user interface for data exploration.",
      ],
      skillIconList: [mySkills[0].icon, mySkills[6].icon, mySkills[7].icon],
      link: "https://datascience.virginia.edu",
    },
    "UVA Engineering": {
      icons: "uvaEngrLogo.png",
      role: "CS 2130 Teaching Assistant",
      date: "Jan. 2025 - Present",
      description: [
        "• Teaching Assistant for CS 2130 - Computer Systems & Organization I",
      ],
      skillIconList: [mySkills[0].icon, mySkills[5].icon],
      link: "https://engineering.virginia.edu",
    },
  };

  const myProjects = [
    {
      name: "LaLiga Insights",
      img: "laLigaInsights.png",
      description:
        "I deployed a Streamlit web app to analyze over 4,000 player statistics from the 2023–2024 LaLiga season. The project features data cleaning & transformation using Pandas and NumPy, and enables users to explore the dataset through interactive graphs and charts.",
      skills: [mySkills[0].icon],
      link: "https://laliga-insights-8vfzplncwqkmzfzczkbjsz.streamlit.app",
      gitHubLink: "https://github.com/shrikar-siro/LaLiga-Insights",
    },
    {
      name: "Lung Cancer Classifier",
      img: "LungCancerClassifier.png",
      description:
        "I engineered a web application using YOLOv8 to detect the presence and proportion of lung cancer in chest X-ray images. Leveraging PyTorch and TensorFlow, the model achieved 95% accuracy on a dataset with over 1,000 images. Users can upload images and view real-time model predictions.",
      skills: [mySkills[0].icon, mySkills[6].icon, mySkills[7].icon],
      link: "https://lung-cancer-classifier-4fxehcwubeuga3qsrtgxyi.streamlit.app",
      gitHubLink: "https://github.com/shrikar-siro/Lung-Cancer-Detection-Repo",
    },
    {
      name: "TopTunes",
      img: "TopTunes.png",
      description:
        "I built a web application using React, TypeScript, and vanilla JavaScript integrating with the Spotify API to let users search for any artist and view their top 10 songs ranked by popularity. Each track includes detailed metadata—such as release date, collaborating artists, and popularity score.",
      skills: [mySkills[2].icon, mySkills[4].icon],
      link: "https://modify-njjv.vercel.app",
      gitHubLink: "https://github.com/shrikar-siro/Modify",
    },
  ];

  const [expName, setExpName] = useState("ST Engineering IDirect");
  const arrowSymbol = "\u2197";
  return (
    // add the navbar component here - or add it in the layout page.
    <>
      <section id="first">
        <div className="text-6xl md:text-7xl lg:text-8xl font-semibold mt-50 text-center fade-in py-30">
          <div className="text-container">
            <p className="text-to-animate bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text inline-block animate">
              Hey. I'm Shrikar.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-30 mb-30 place-content-center -scroll-mt-15"
      >
        {/** have a big div as the container div, and 2 children divs. */}
        <div className="lg:flex lg:gap-20 items-start p-15 md:p-10 sm:p-5 mx-auto">
          <div className="flex flex-shrink-0 justify-center">
            <img
              src="profile.jpeg"
              alt="..."
              className="w-[400px] h-[540px] fade-in rounded-md border-4 border-neutral-200"
            ></img>
          </div>
          <div className="flex-grow max-w-l mt-10 md:mt-10">
            <div className="text-center">
              <p className="text-4xl font-bold mb-4 fade-in text-center">
                About Me
              </p>
            </div>
            <p className="fade-in text-xl md:text-2xl text-center mt-5">
              I'm currently a 3rd year CS major at the University of Virginia
              (UVA) and a Software Engineering Intern at ST Engineering IDirect.
              When I'm not coding, you can find me watching sports, reading tech
              articles, or hitting serves at the local tennis court. I'm always
              looking for opportunities to learn new technologies, build cool
              projects, and grow with others.
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-30 font-bold scroll-mt-20 fadeIn animate"
      >
        <div className="text-4xl text-center">
          <p>Experience</p>
        </div>
        <div className="mt-5 p-15 md:p-10 sm:p-5">
          <div className="flex flex-col md:flex-row justify-center items-start md:gap-25">
            {/** button row */}
            <div className="flex flex-row md:flex-col mx-auto md:w-sm">
              {Object.keys(myExperience).map((exp) => (
                <button
                  key={exp}
                  className={`text-start p-5 md:p-8 font-normal transform transition duration-200 text-md
                  ${
                    expName == exp
                      ? `bg-black/50 text-rose-400`
                      : `hover:bg-black/30`
                  }`}
                  onClick={() => setExpName(exp)}
                >
                  {exp}
                </button>
              ))}
            </div>
            <motion.div
              key={expName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-4xl"
            >
              <Card className="bg-transparent border-0 shadow-none mx-auto mt-8 md:mt-0 pb-40">
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-row gap-2 md:gap-3 items-center">
                      <img
                        className="w-13 h-13 md:w-15 md:h-15"
                        src={myExperience[expName].icons}
                        alt="..."
                      ></img>
                      <div className="text-xl">
                        <p>{myExperience[expName].role}</p>
                        <CardDescription className="text-base CardDescription transform transition duration-200 hover:text-rose-500">
                          {expName}{" "}
                          <a
                            className="arrow"
                            href={myExperience[expName].link}
                            target="blank"
                          >
                            {arrowSymbol}
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="font-normal text-md">
                    {myExperience[expName].description.map((des, index) => (
                      <li key={index} className="p-2 text-lg">
                        {des}
                      </li>
                    ))}
                  </ul>
                  <div className="place-content-start flex flex-row mt-5">
                    <div className="items-center">
                      <h2 className="text-md font-semibold p-2">Skills:</h2>
                    </div>
                    {myExperience[expName].skillIconList.map((icon, index) => (
                      <img
                        src={icon}
                        className="w-10 h-10 ms-3 p-2 border-1 rounded-md bg-black/40"
                        key={index}
                      ></img>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mt-35 py-30 flex items-center justify-center md:pt-15 p-10 fadeIn animate scroll-mt-15 md:scroll-mt-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-30 w-full">
          <div className="flex flex-col max-w-2xl lg:basis-3xl">
            <p className="text-4xl font-bold mb-4 fade-in text-center">
              Projects
            </p>
            <p className="fade-in text-center text-xl">
              Here are some of my projects. You can either click on the image to
              visit the deployed project, or the card title's floating arrow to
              view the source code. Feel free to play around, and enjoy!
            </p>
          </div>
          <div className="mt-5 md:mt-5 p-10 sm:p-5 md:p-0 max-w-5xl lg:basis-7xl">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
              orientation="horizontal"
            >
              <CarouselContent>
                {myProjects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/1 flex items-stretch"
                  >
                    <div className="flex flex-col justify-center border-2 border-opacity-60 rounded-md overflow-hidden">
                      <div className="relative inline-block w-full h-[325px]">
                        <a href={project.link} target="_blank">
                          <img
                            src={project.img}
                            className="w-full h-[325px] object-cover object-center transform transition duration-150 hover:opacity-80"
                          ></img>
                        </a>
                        <a
                          href={project.gitHubLink}
                          className="md:hidden absolute top-2 right-2"
                        >
                          <div className="bg-black/40 rounded-md p-2 transform transition duration-200 hover:bg-black/60">
                            {externalLink}
                          </div>
                        </a>
                      </div>

                      <div className="lg:p-6 p-4 md:p-3 hidden md:block flex-grow text-center">
                        <h1 className="text-lg font-semibold mb-3 text-center CardDescription transform transition duration-200 hover:text-rose-500">
                          {project.name}{" "}
                          <a
                            className="arrow"
                            href={project.gitHubLink}
                            target="_blank"
                          >
                            {arrowSymbol}
                          </a>
                        </h1>
                        <p className="lg:text-base md:text-sm mx-auto leading-relaxed mb-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-row justify-between place-content-end p-3">
                        <div className="items-center">
                          <h2 className="text-md font-semibold p-2">
                            Skills Used:
                          </h2>
                        </div>
                        <div className="flex flex-row">
                          {project.skills.map((skill, skillIndex) => (
                            <img
                              key={skillIndex}
                              src={skill}
                              alt={`Skill ${skillIndex}`}
                              className="w-10 h-10 ms-3 p-2 border-1 rounded-md bg-black/40"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-35 mt-30 fadeIn animate scroll-mt-10  pb-0"
      >
        <div className="text-4xl fade-in text-center font-bold mb-10">
          Top Skills
        </div>
        {/*grid of cards with each skill pulled from list above.*/}
        <div className="mx-auto mt-5 p-10 hidden md:grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {mySkills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-center justify-center items-center p-10 border-1 rounded-md transform transition duration-200 hover:border-blue-500"
            >
              <img className="w-auto h-20 mx-auto mb-3" src={item.icon} />
              <h3 className="md:text-xl">{item.name}</h3>
            </div>
          ))}
        </div>
        <div className="md:hidden h-[600px] overflow-hidden mt-25 p-15">
          {/** made sure to keep a separate animation container, and a separate flex container - not mixing them both! */}
          <div className="animate-infinite-scroll">
            <div className="flex flex-col">
              {[...mySkills, ...mySkills].map((item, index) => (
                <div
                  key={index}
                  className="flex p-5 border rounded-md transition duration-200 hover:border-blue-500 mb-5"
                >
                  <div className="flex flex-row gap-3">
                    <img className="w-12 h-12" src={item.icon} />
                    <div className="flex items-center justify-center">
                      <h3 className="text-md">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/** contact secction. form for form*/}
      <section
        id="contact"
        className="py-35 mt-45 fadeIn animate scroll-mt-20 mb-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-15 lg:gap-20 p-15 md:p-10 mx-auto">
          <div className="flex-grow max-w-3xl text-4xl fade-in text-center font-bold mb-5 sm:mb-5">
            Contact Me
            <p className="text-xl mt-5 font-normal">
              Like what you see? Let's talk!
            </p>
          </div>
          <div className="w-full lg:max-w-2xl mx-auto justify-center items-center md:p-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
