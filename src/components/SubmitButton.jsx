import { Button } from "@material-tailwind/react";
 
export function SubmitButton() {
  return (
      <Button type="submit" className="flex items-center gap-3 bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black :text-white">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
         >
     <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" />
      </svg>
      Submit
      </Button>
  );
}