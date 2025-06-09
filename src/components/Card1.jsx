import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Card1() {
    return (
      <Card className="mt-6 w-full bg-[#112240] border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-all duration-300 hover:transform hover:scale-105">
        <CardBody className="p-4 sm:p-6">
          <Typography variant="h5" className="mb-3 sm:mb-4 text-[#64ffda] font-bold text-lg sm:text-xl">
            Payment Solution App
          </Typography>
          <Typography className="text-[#8892b0] text-base sm:text-lg leading-relaxed">
            A mockup payments solution that demonstrates a full-stack approach to secure transactions. Built with <span className="text-[#64ffda] font-semibold">Node.js, Express.js, and React,</span> the app offers end-to-end functionality—from user signup to fund transfers—featuring <span className="text-[#64ffda] font-semibold">JWT authentication</span> and custom middleware for secure access.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
          <Button className="bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 transition-all duration-300 w-full sm:w-auto">
            <a href="https://github.com/sanchit-560/Payment-Application-Mockup" className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View Project
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  }