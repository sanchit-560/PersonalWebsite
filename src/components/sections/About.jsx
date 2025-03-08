import React from "react"
export const About  = ()=> {
    
    return(
<div className="flex flex-col md:flex-row md:justify-between items center px-4 py-10 xl:px-12 xl:py-14 xl:pt-36 mt-20">
    <div className="flex flex-col items-start w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
        <div className="text-3xl font-bold pb-4">
           <span className="text-[oklch(0.985 0 0)]">LET ME </span>
            <span className="text-[#00df9a]">INTRODUCE</span>
            <span className="text-[oklch(0.985 0 0)]"> MYSELF</span>
            <p className="text-xl pt-10 text-left">
            I fell in love with programming, and I've learned enough along the way to keep that passion burning bright… or at least,
            <i><b className="text-[#00df9a]"> or at least, that's what I like to believe 🤷‍♂️</b></i>
            <br></br>
            <br></br>
            I am fluent in classics like
            <i><b className="text-[#00df9a]"> HTML, CSS3, SQL, JavaScript, and TypeScript </b></i>
            <br></br>
            <br></br>
            My field of Interest's are building new
            <i><b class="text-[#00df9a]"> Web Technologies and Products </b> and also in areas related to <b class="text-[#00df9a]">Blockchain.</b></i>
            <br></br>
            <br></br>
            Whenever possible, I also apply my passion for developing products with 
            <b class="text-[#00df9a]"> Node.js </b>
             and
            <i><b class="text-[#00df9a]"> Modern Javascript Library and Frameworks</b></i> 
            &nbsp; like
            <i><b class="text-[#00df9a]"> React.js and Next.js</b></i>
            </p>
          </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center items-center mt-12 md:mt-0">
            <img src = "https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg" alt="Programming Image" className="max-h-1/2" />
        </div>
    </div>

     )

}