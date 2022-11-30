import { useUserContext } from "../context/UserContext";

const Form = () => {
  const { user, dispatch } = useUserContext();
  const { contact } = user;
  const {
    firstname,
    lastname,
    occupation,
    address,
    phone,
    email,
    nationality,
    link
  } = contact;

  return (
    <div className="bg-gray-300 p-4">
      <form>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">Contact Information</h1>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, firstname: e.target.value }
                  }
                })
              }
            />
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, lastname: e.target.value }
                  }
                })
              }
            />
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="text"
              placeholder="Occupation"
              value={occupation}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, occupation: e.target.value }
                  }
                })
              }
            />
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, address: e.target.value }
                  }
                })
              }
            />
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, phone: e.target.value }
                  }
                })
              }
            />
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, email: e.target.value }
                  }
                })
              }
            />
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="text"
              placeholder="Nationality"
              value={nationality}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, nationality: e.target.value }
                  }
                })
              }
            />
            <input
              className="p-2 rounded-lg outline-none border-none bg-slate-100"
              type="url"
              placeholder="Link"
              value={link}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_USER",
                  payload: {
                    ...user,
                    contact: { ...contact, link: e.target.value }
                  }
                })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
