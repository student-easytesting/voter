import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({});
  const API = import.meta.env.VITE_APP_URI_API;
  const fname = useRef();
  const fdob = useRef();
  const fphone = useRef();
  const femail = useRef();
  const faadhar = useRef();
  const fcity = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = fname.current.value;
    const aadhar = faadhar.current.value;
    const dob = fdob.current.value;
    const phone = fphone.current.value;
    const email = femail.current.value;
    const city = fcity.current.value;

    const response = await axios.post(`${API}/auth/register`, {
      name: name,
      aadhar: aadhar,
      dob: dob,
      phone: phone,
      email: email,
      city: city,
    });
    console.log(response.data);
    if (response.data) {
      toast.success("Successfully Registered");
    } else {
      toast.error("Not Registered");
    }

    fname.current.value = "";
    faadhar.current.value = "";
    fdob.current.value = "";
    fphone.current.value = "";
    femail.current.value = "";
    fcity.current.value = "";
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <br />
        <input id="name" type="text" className="input" ref={fname} />
        <br />
        <label htmlFor="aadhar" className="label">
          Aadhar No:
        </label>
        <br />
        <input id="aadhar" type="text" className="input" ref={faadhar} />
        <br />
        <label htmlFor="dob" className="label">
          DOB:{" "}
        </label>
        <br />
        <input id="dob" type="date" className="input" ref={fdob} />
        <br />
        <label htmlFor="phone" className="label">
          Mobile:{" "}
        </label>
        <br />
        <div>
          <input
            type="tel"
            id="phone"
            pattern="[0-9]{10}"
            className="input"
            ref={fphone}
          />
        </div>

        <label htmlFor="email" className="label">
          Email:
        </label>
        <br />
        <div>
          <input type="email" className="input" ref={femail} />
        </div>

        <label htmlFor="city" className="label">
          City:
        </label>
        <br />
        <div>
          <input type="text" className="input" ref={fcity} />
        </div>
        <br />
        <button className="btn submit">Register</button>
      </form>
    </>
  );
};

export default Register;
