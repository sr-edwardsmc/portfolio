/* eslint-disable react-refresh/only-export-components */
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/Ball";

function Tech() {
  return (
    <>
      <p className="text-center text-2xl font-semibold mb-6">
        Can't see the logos? Hit the balls and discover my{" "}
        <span className="underline leading-tight">tech stack!</span>
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div key={tech.name} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Tech, "tech");
