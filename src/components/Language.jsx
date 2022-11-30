import { useUserContext } from "../context/UserContext";
import { GrStar } from "react-icons/gr";

const Language = () => {
  const { user } = useUserContext();
  const { language: languages } = user;

  return (
    <ul>
      <div className="flex flex-col mb-5">
        <h2 className="text-lg font-bold">Langues</h2>
        <span className="bg-gray-400 w-full h-1 rounded-lg"></span>
      </div>
      {languages.map((language, index) => {
        const { description, level } = language;
        return (
          <li key={index} className="flex justify-between">
            <p>{description}</p>
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
  );
};

export default Language;
