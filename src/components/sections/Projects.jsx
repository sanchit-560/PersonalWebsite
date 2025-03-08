import { Card1} from "../Card1";
import { Card2} from "../Card2";
export const Projects = () => {
    return (
      <div className="flex flex-col items-center px-4 py-10 xl:px-12 xl:py-14 xl:pt-36">
        <div className="text-center md:text-left w-full">
          <div className="text-3xl font-bold pb-4">
            <span className="text-[oklch(0.985 0 0)]">My Recent </span>
            <span className="text-[#00df9a]">Work</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 w-full pt-10">
          <Card1 />
          <Card2/>
        </div>
      </div>
    );
  };
  