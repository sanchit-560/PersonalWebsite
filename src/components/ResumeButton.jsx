import { Button } from "@material-tailwind/react";

export function ResumeButton() {
  return (
    <Button 
      className="flex items-center gap-3 border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v4h16v-4"
        />
      </svg>
      <a 
        href="/PersonalWebsite/Sanchit_Khosla_Resume_25.pdf" 
        download="Sanchit_Khosla_Resume.pdf"
        className="font-medium"
      >
        Download CV
      </a>
    </Button>
  );
}