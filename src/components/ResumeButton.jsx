import { Button } from "@material-tailwind/react";
 
export function ResumeButton() {
  return (
      <Button className="flex items-center gap-3 bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black :text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
           viewBox="0 0 24 24"
           strokeWidth="2"
           stroke="currentColor"
           class="h-6 w-6"
          >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
         d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v4h16v-4"
         />
        </svg>
        <a href="/Sanchit_Khosla_Resume.pdf" download="Sanchit_Khosla_Resume.pdf">Download file</a>
      </Button>
  );
}