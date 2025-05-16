'use client'

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useEffect } from "react";

import { setupIntersectionAnimations } from "../app/animateIfInView"








export default function Home() {
  // made the script runnable, so now we can use useEffect to call the setup function.
  useEffect(() => {
    setupIntersectionAnimations();
  }, []);

  const mySkills = [ 
    {name: "Python", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'},
    {name: "Java", icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg'},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    {name: "Amazon Web Services (AWS)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"},
    {name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    {name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},
    {name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"},
    {name: "Tensorflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"}

  ];

  return (
    // add the navbar component here - or add it in the layout page.
    <>
      <section id="first">
        <div className = "text-4xl md:text-6xl lg:text-7xl font-semibold mt-50 text-center fade-in">
          <div className = "text-container">
            <p className = "text-to-animate">Hey. I'm Shrikar.</p>
          </div>
        </div>
      </section>

      <section id="about" className = "py-35 place-content-center -scroll-mt-20">
        {/** have a big div as the container div, and 2 children divs. */}
        <div className = "lg:flex lg:gap-20 items-start p-15 md:p-10 sm:p-5 mx-auto">
          <div className = "flex flex-shrink-0 justify-center">
            <img src = "profile.jpeg" alt = "..." className = "w-[400px] h-[540px] fade-in rounded-md border-4 border-neutral-200"></img>
          </div>
          <div className = "flex-grow max-w-l mt-10 md:mt-10">
            <p className = "text-4xl font-bold mb-4 fade-in text-center">About Me</p>
            <p className = "fade-in text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor quia sed labore 
              deleniti architecto illum provident saepe esse, necessitatibus ipsum ipsa itaque deserunt 
              sit ex consectetur cupiditate incidunt iure.</p>
          </div>
        </div>
      </section>

      <section id="experience" className = "place-content-center font-bold mb-40 scroll-mt-20">
        <div className = "text-4xl text-center">
          Experience
        </div>
        <div className = "flex flex-col experiences animate justify-center mt-10 p-15 md:p-10 sm:p-5 mx-auto">
          <Card className = " w-full mx-auto mb-5 bg-transparent border-2 transform transition duration-300 hover:border-blue-500">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-2 items-center">
                  <img className = "w-10 h-10" src = "stLogo.jpg" alt = "..."></img>
                  <div className = "text-lg">
                    Incoming Software Engineering Intern
                    <CardDescription>ST Engineering</CardDescription>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal text-md">
                  <li>• Summer Software Engineering Intern on the DevOps team.</li>
                </ul>
            </CardContent>
          </Card>
          <Card className = " w-full mx-auto mb-5 bg-transparent border-2 transform transition duration-300 hover:border-blue-500">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-2 items-center">
                  <img className = "w-10 h-10" src = "uvaIcon.png" alt = "..."></img>
                  <div className = "text-lg">
                    Undergraduate Research Intern
                    <CardDescription>UVA School of Data Science</CardDescription>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal text-md">
                  <li>• Develop a visual analytics platform using Python and SQL to analyze multi-modal neuroscience datasets.</li>
                  <li>• Support early diagnosis and treatment strategies for cognitive disorders through deep learning architectures.</li>
                  <li>• Optimize model accuracy and provide an intuitive user interface for data exploration.</li>
                </ul>
            </CardContent>
          </Card>
          <Card className = "w-full mx-auto mb-5 bg-transparent border-2 transform transition duration-300 hover:border-blue-500">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-2 items-center">
                  <img className = "w-10 h-10" src = "uvaEngrLogo.png" alt = "..."></img>
                  <div className = "text-lg">
                    Undergraduate Teaching Assistant
                    <CardDescription>UVA School of Engineering</CardDescription>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal text-base">
                  <li>• Teaching Assistant for CS 2130 - Computer Systems & Organization I</li>
                </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id = "projects" className = "py-30 grid place-items-center p-15 md:p-10 sm:p-5 experiences animate scroll-mt-20">
        <div className = "flex flex-col lg:flex-row items-center justify-center lg:gap-30">
          <div className = "flex-grow">
            <p className = "text-4xl font-bold mb-4 fade-in text-center">Projects</p>
             <p className = "fade-in text-center text-xl">Here are some of my projects. Feel free to look around! For more information about
              each project, click on the card to visit its GitHub Repo. 
             </p>
          </div>
          <div className = "mt-5 md:mt-5 sm:mt-5 p-3 md:p-0">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
                orientation="horizontal"
              >
              <CarouselContent>
                <CarouselItem className = "md:basis-1/2 lg:basis-1/1">
                  <div className = "flex flex-col justify-between lg:h-[540px] md:h-[540px] border-2 border-opacity-60 rounded-md overflow-hidden transform transition duration-150 hover:bg-black/30">
                    <img src = "laLigaInsights.png" className = "w-full h-[300px] object-cover object-center"></img>
                    <div className = "lg:p-6 p-4 md:p-3 hidden md:block flex-grow text-center">
                      <h1 className = "text-lg font-semibold mb-3 text-center">LaLiga Insights</h1>
                      <p className = "lg:text-base md:text-sm mx-auto leading-relaxed mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum similique, nisi, maiores ipsam 
                        natus reiciendis 
                        consequuntur alias est atque.</p>
                    </div>
                    <div className = "flex flex-row justify-between place-content-end p-3">
                      <div className = "items-center">
                         <h2 className = "text-md font-semibold p-2">Skills Used:</h2>
                      </div>
                      <div className = "flex flex-row">
                        <img src = {mySkills[0].icon} alt="Python" className="w-10 h-10 ms-3 p-2 border-1 rounded-md"></img>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className = "md:basis-1/2 lg:basis-1/1">
                  <div className = "flex flex-col justify-between lg:h-[540px] md:h-[540px] border-2 border-opacity-60 rounded-md overflow-hidden transform transition duration-150 hover:bg-black/30">
                    <img src = "LungCancerClassifier.png" className = "w-full h-[300px] object-cover object-center"></img>
                    <div className = "lg:p-6 p-4 md:p-3 hidden md:block flex-grow text-center">
                      <h1 className = "text-lg font-semibold mb-3 text-center">Lung Cancer Classifier</h1>
                      <p className = "lg:text-base md:text-sm mx-auto leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum similique, nisi, maiores ipsam 
                        natus reiciendis 
                        consequuntur alias est atque iste sequi beatae fugiat 
                        reprehenderit quis quo repudiandae neque earum.</p>
                    </div>
                    <div className = "flex flex-row justify-between place-content-end p-3">
                      <div className = "items-center">
                         <h2 className = "text-md font-semibold p-2">Skills Used:</h2>
                      </div>
                      <div className = "flex flex-row">
                        <img src = {mySkills[0].icon} alt="Python" className="w-10 h-10 ms-3 p-2 border-1 rounded-md"></img>

                        <img src = {mySkills[7].icon} alt="Python" className="w-10 h-10 ms-3 p-2 border-1 rounded-md"></img>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="skills" className="py-40 place-content-center -scroll-mt-10">
        <div className = "text-4xl text-center font-bold">
          Skills
        </div>
        {/*grid of cards with each skill pulled from list above.*/}
        <div className = "m-auto mt-5 p-15 md:p-10 sm:p-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 experiences animate">
          {mySkills.map((item, index) =>(
            <div key = {index} className = "justify-center items-center p-10 border-1 rounded-md transform transition duration-200 hover:border-blue-500">
                <img className = "w-auto h-20 lg:h-30 md:h-25 mx-auto mb-3" src={item.icon} />
                <h3 className = "text-xl text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
