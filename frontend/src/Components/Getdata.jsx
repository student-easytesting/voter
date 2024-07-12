import { useRef, useState } from "react";
import axios from "axios";

const Getdata = () => {
  const fvoter = useRef();
  const [userData, setUserData] = useState({});
  const [isData, setIsData] = useState(false);

  const API = import.meta.env.VITE_APP_URI_API;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let voter = fvoter.current.value;

    const response = await axios.post(`${API}/data/service`, {
      voter: voter,
    });

    response && setIsData(true);
    const data = response.data;
    // console.log(data);
    setUserData(data);

    fvoter.current.value = "";
  };

  const { name, aadhar, dob, phone, email, city, voter } = userData;

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="aadhar" className="label">
          Voter No:
        </label>
        <br />
        <input type="text" id="aadhar" className="input" ref={fvoter} />
        <button className="btn submit">Get Voter Details</button>
      </form>

      {isData && (
        <div className="card">
          <div>
            <span className="data bold aadhar">Voter No: </span>
            <span className="data aadhar">{voter}</span>
          </div>
          <br />
          <div>
            <span className="data bold">Name: </span>
            <span className="data">{name}</span>
          </div>
          <br />
          <div>
            <span className="data bold">City: </span>
            <span className="data">{city}</span>
          </div>
          <br />
          <div>
            <span className="data bold">DOB: </span>
            <span className="data">{dob}</span>
          </div>
          <br />
          <div>
            <span className="data bold">Mobile: </span>
            <span className="data">{phone}</span>
          </div>
          <br />
          <div>
            <span className="data bold">Email: </span>
            <span className="data">{email}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Getdata;
