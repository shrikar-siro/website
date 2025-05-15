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

  return (
    // add the navbar component here - or add it in the layout page.
    <>
      <section id="first">
        <div className = "text-7xl font-semibold mt-50 text-center fade-in">
          <div className = "text-container">
            <p className = "text-to-animate">Hey. I'm Shrikar.</p>
          </div>
        </div>
      </section>

      <section id="about" className = "py-35 place-content-center scroll-mt-20">
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
          <Card className = " w-full mx-auto mb-5 bg-transparent border border-gray-300 transform transition hover:-translate-y-1 duration-300">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-2 items-center">
                  <img className = "w-10 h-10" src = "stLogo.jpg" alt = "..."></img>
                  <p className = "text-lg">Incoming Software Engineering Intern</p>
                </div>
              </CardTitle>
              <CardDescription>ST Engineering</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal text-lg">
                  <li>• Summer Software Engineering Intern on the DevOps team.</li>
                </ul>
            </CardContent>
          </Card>
          <Card className = " w-full mx-auto mb-5 bg-transparent border border-gray-300 transform transition hover:-translate-y-1 duration-300">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-2 items-center">
                  <img className = "w-10 h-10" src = "uvaIcon.png" alt = "..."></img>
                  <p className = "text-lg">Undergraduate Research Intern</p>
                </div>
              </CardTitle>
              <CardDescription>UVA School of Data Science</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal text-lg">
                  <li>• Develop a visual analytics platform using Python and SQL to analyze multi-modal neuroscience datasets.</li>
                  <li>• Support early diagnosis and treatment strategies for cognitive disorders through deep learning architectures.</li>
                  <li>• Optimize model accuracy and provide an intuitive user interface for data exploration.</li>
                </ul>
            </CardContent>
          </Card>
          <Card className = "w-full mx-auto mb-5 bg-transparent border border-gray-300 transform transition hover:-translate-y-1 duration-300">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-2 items-center">
                  <img className = "w-10 h-10" src = "uvaEngrLogo.png" alt = "..."></img>
                  <p className = "text-lg">Undergraduate Teaching Assistant</p>
                </div>
              </CardTitle>
              <CardDescription>UVA School of Engineering</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal text-lg">
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
          <div className = "mt-5 md:mt-5 sm:mt-5 p-5 md:p-0">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full"
                  >
                  <CarouselContent>
                    <CarouselItem className = "md:basis-1/2 lg:basis-1/1">
                      <div className = "lg:h-[500px] md:h-[500px] border-2 border-gray-200 border-opacity-60 rounded-md overflow-hidden transform transition duration-150 hover:bg-gray-900 flex flex-col">
                        <img src = "laLigaInsights.png" className = "w-full h-[250px] object-cover object-center"></img>
                        <div className = "lg:p-6 md:p-4 sm:p-4 hidden md:block flex-grow text-center">
                          <h1 className = "text-lg font-semibold mb-3 text-center">LaLiga Insights</h1>
                          <p className = "lg:text-md md:text-base mx-auto leading-relaxed mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum similique, nisi, maiores ipsam 
                            natus reiciendis 
                            consequuntur alias est atque.</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className = "md:basis-1/2 lg:basis-1/1">
                      <div className = "lg:h-[500px] md:h-[500px] border-2 border-gray-200 border-opacity-60 rounded-md overflow-hidden transform transition duration-150 hover:bg-gray-900">
                        <img src = "LungCancerClassifier.png" className = "w-full h-[250px] object-cover object-center"></img>
                        <div className = "lg:p-6 md:p-4 sm:p-4 hidden md:block flex-grow text-center">
                          <h1 className = "text-lg font-semibold mb-3 text-center">Lung Cancer Classifier</h1>
                          <p className = "lg:text-md md:text-base mx-auto leading-relaxed mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum similique, nisi, maiores ipsam 
                            natus reiciendis 
                            consequuntur alias est atque iste sequi beatae fugiat 
                            reprehenderit quis quo repudiandae neque earum.</p>
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
    </>
  );
}
