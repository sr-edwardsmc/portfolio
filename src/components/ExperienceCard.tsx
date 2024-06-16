import { VerticalTimelineElement } from "react-vertical-timeline-component";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ExperienceCard({ experience }: { experience: any }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2 mb-2">
          {experience.points.map((point: string) => (
            <li
              key={point}
              className="text-secondary text-[16px] font-semibold"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
