import {
  GrLocation,
  GrPhone,
  GrMailOption,
  GrLink,
  GrFlag
} from "react-icons/gr";

import { useUserContext } from "../context/UserContext";

const ProfessionalInformation = () => {
  const { user } = useUserContext();
  const { address, phone, email, link, nationality } = user.contact;

  return (
    <div>
      <div className="flex flex-col mb-5">
        <h2 className="text-lg font-bold">Information Professional</h2>
        <span className="bg-gray-400 w-full h-1 rounded-lg"></span>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <GrLocation />
          <h2 className="">{address}</h2>
        </div>

        <div className="flex items-center gap-4">
          <GrPhone />
          <h2 className="">{phone}</h2>
        </div>

        <div className="flex items-center gap-4">
          <GrMailOption />
          <h2 className="">{email}</h2>
        </div>

        <a href={link} target={"_blank"} className="flex items-center gap-4">
          <GrLink />
          <h2 className="">{link}</h2>
        </a>

        <div className="flex items-center gap-4">
          <GrFlag />
          <h2 className="">{nationality}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInformation;
