import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"






export default function Home() {
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

      <section id="experience" className = "place-content-center font-bold">
        <div className = "text-4xl text-center">
          Experience
        </div>
        <div className = "flex flex-col mt-10 p-5">
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
    </>
  );
}
