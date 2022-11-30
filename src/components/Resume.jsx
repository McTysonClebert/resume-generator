import { useUserContext } from "../context/UserContext";
import Contact from "./Contact";
import Language from "./Language";
import Skills from "./Skills";

const Resume = () => {
  const { user } = useUserContext();
  const { firstname, lastname, occupation } = user.contact;

  return (
    <div className="flex-1 flex flex-col items-center gap-4 p-4">
      <h1 className="font-bold text-2xl">Resume</h1>

      <div className="flex w-4/5 overflow-y-auto shadow-lg shadow-black">
        <div className="flex flex-col gap-10 w-72 px-4 py-8">
          <div className="text-center flex flex-col">
            <h1 className="font-bold text-2xl">
              {firstname} {lastname}
            </h1>
            <h2 className="font-bold text-gray-800">({occupation})</h2>
          </div>

          <Contact />
          <Skills />
          <Language />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Resume;
