import { Button } from "@material-tailwind/react";
 
export function SubmitButton() {
  return (
    <Button 
      type="submit" 
      className="flex items-center gap-3 bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#64ffda]/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" />
      </svg>
      Submit
    </Button>
  );
}