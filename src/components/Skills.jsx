import { useUserContext } from "../context/UserContext";
import { GrStar } from "react-icons/gr";

const Skills = () => {
  const { user } = useUserContext();
  const { skill: skills } = user;

  return (
    <div>
      <div className="flex flex-col mb-5">
        <h2 className="text-lg font-bold">Langues</h2>
        <span className="bg-gray-400 w-full h-1 rounded-lg"></span>
      </div>
      <ul className="flex flex-col gap-3">
        {skills.map((skill, index) => {
          const { description, level } = skill;
          return (
            <li key={index} className="flex justify-between items-center">
              <p className="w-1/2">{description}</p>
              <div className="flex gap-1">
                {[...Array(parseInt(5))].map((x, i) => (
                  <GrStar
                    key={i}
                    color={i < level ? "black" : "lightgray"}
                    className=""
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
