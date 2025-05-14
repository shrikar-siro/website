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

      <section id="about" className = "py-50 flex place-content-center p-5">
        {/** have a big div as the container div, and 2 children divs. */}
        <div className = "flex gap-10 items-start max-w-5xl">
          <div className = "flex flex-shrink-0 justify-center">
            <img src = "profile.jpeg" alt = "..." className = "w-[400px] h-[540px] fade-in rounded-md border-4 border-neutral-200"></img>
          </div>
          <div className = "flex-grow max-w-l">
            <p className = "text-4xl font-bold mb-4 fade-in text-center">About Me</p>
            <p className = "fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor quia sed labore 
              deleniti architecto illum provident saepe esse, necessitatibus ipsum ipsa itaque deserunt 
              sit ex consectetur cupiditate incidunt iure.</p>
          </div>
        </div>
      </section>

      <section id="experience" className = "place-content-center font-bold mb-40">
        <div className = "text-4xl text-center">
          Experience
        </div>
        <div className = "experiences animate flex flex-col mt-10 p-5">
          <Card className = " w-full mx-auto max-w-5xl mb-5 bg-transparent border border-gray-300 transform transition hover:-translate-y-1 duration-300">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-1 items-center">
                  <img className = "w-10 h-10" src = "stLogo.jpg" alt = "..."></img>
                  <p>Incoming Software Engineering Intern</p>
                </div>
              </CardTitle>
              <CardDescription>ST Engineering</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal">
                  <li>• Summer Software Engineering Intern on the DevOps team.</li>
                </ul>
            </CardContent>
          </Card>
          <Card className = " w-full mx-auto max-w-5xl mb-5 bg-transparent border border-gray-300 transform transition hover:-translate-y-1 duration-300">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-1 items-center">
                  <img className = "w-10 h-10" src = "uvaIcon.png" alt = "..."></img>
                  <p>Undergraduate Research Intern</p>
                </div>
              </CardTitle>
              <CardDescription>UVA School of Data Science</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal">
                  <li>• Develop a visual analytics platform using Python and SQL to analyze multi-modal neuroscience datasets.</li>
                  <li>• Support early diagnosis and treatment strategies for cognitive disorders through deep learning architectures.</li>
                  <li>• Optimize model accuracy and provide an intuitive user interface for data exploration.</li>
                </ul>
            </CardContent>
          </Card>
          <Card className = "w-full mx-auto max-w-5xl mb-5 bg-transparent border border-gray-300 transform transition hover:-translate-y-1 duration-300">
            <CardHeader>
              <CardTitle>
                <div className = "flex flex-row gap-1 items-center">
                  <img className = "w-10 h-10" src = "uvaEngrLogo.png" alt = "..."></img>
                  <p>Undergraduate Teaching Assistant</p>
                </div>
              </CardTitle>
              <CardDescription>UVA School of Engineering</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className = "font-normal">
                  <li>• Teaching Assistant for CS 2130 - Computer Systems & Organization I</li>
                </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id = "projects" className = "py-50 flex place-content-center p-5 experiences animate">
        <div className = "flex lg:gap-30 md:gap-15 items-center max-w-5xl min-w-xl">
          <div className = "flex-grow max-w-l">
            <p className = "text-4xl font-bold mb-4 fade-in text-center">Projects</p>
             <p className = "fade-in">Here are some of my projects. Feel free to look around! For more information about
              each project, click on the card to visit its GitHub Repo. 
             </p>
          </div>
          <div className = "">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full min-w-lg"
                  >
                  <CarouselContent>
                    <CarouselItem className = "md:basis-1/2 lg:basis-1/1">
                      <div className = "border-2 border-gray-200 border-opacity-60 rounded-md overflow-hidden transform transition duration-130 hover:bg-gray-900">
                        <img src = "laLigaInsights.png" className = "lg:h-72 md:h-48 w-full object-cover object-center"></img>
                        <div className = "p-6">
                          <h1 className = "text-2xl font-semibold mb-3 text-center">LaLiga Insights</h1>
                          <p className = "leading-relaxed mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum similique, nisi, maiores ipsam 
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
