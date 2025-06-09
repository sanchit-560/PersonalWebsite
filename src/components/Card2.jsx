import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Card2() {
    return (
      <Card className="mt-6 w-full bg-[#112240] border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-all duration-300 hover:transform hover:scale-105">
        <CardBody className="p-4 sm:p-6">
          <Typography variant="h5" className="mb-3 sm:mb-4 text-[#64ffda] font-bold text-lg sm:text-xl">
            UTS Website Enhancement
          </Typography>
          <Typography className="text-[#8892b0] text-base sm:text-lg leading-relaxed">
            As a Junior Software Engineer at UTS, I enhanced the university's website by resolving critical bugs and refining responsive UI components with <span className="text-[#64ffda] font-semibold">React, TypeScript, and Tailwind CSS.</span> This project ensured pixel-perfect alignment with Figma designs, boosting both student engagement and overall site performance.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
          <Button className="bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 transition-all duration-300 w-full sm:w-auto">
            <a href="https://uts.edu.au/" className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Visit Website
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  }