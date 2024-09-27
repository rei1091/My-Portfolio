import React from "react";
import StarRating from "./StarRating";

const SkillList = () => {
  const skills = [
    { id: 1, name: "HTML", level: 3 },
    { id: 2, name: "CSS", level: 3 },
    { id: 3, name: "JavaScript", level: 3 },
    { id: 4, name: "React", level: 2 },
    { id: 5, name: "Next.js", level: 2 },
    { id: 6, name: "Tailwind CSS", level: 2 },
    { id: 7, name: "Java", level: 1 },
    { id: 8, name: "PHP/Laravel", level: 2 },
    { id: 9, name: "MySQL", level: 1 },
  ];

  return (
    <div className="container mx-auto p-5">
      <ul className="grid md:grid-cols-2 gap-2 md:gap-6 p-2">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="border rounded shadow-lg transition-shadow bg-slate-500"
          >
            <h3 className="text-xl ml-2 font-semibold text-white">
              {skill.name}
            </h3>
            <StarRating level={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
