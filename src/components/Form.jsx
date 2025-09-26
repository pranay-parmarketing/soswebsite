import React, { useContext, useState, useEffect } from "react";
import handshake from "../images/handshake.png";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const { url, source, setSource } = useContext(AppContext);
  const [inputs, setInputs] = useState({
    Customer_Name: "",
    Phone: "",
    E_mail: "",
    Outstanding_Amount: "",
    Messages: "",
    consent: false,
    Created_On: "",
    Source: source ? source : "SOS_LP_Campaign",
    process_id: "4",
    campaign_id: "6",
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  //
  const handleSupport = (e) => {
    setInputs({
      ...inputs,
      Messages: e.target.value,
    });
  };
  const handleConsent = (e) => {
    setInputs({
      ...inputs,
      consent: !inputs.consent,
    });
  };
  //
  const getToken = async () => {
    try {
      const res = await axios.get(`${url}/token`);
      return res.data.token[0].token;
    } catch (error) {
      console.log(error);
    }
  };
  //
  const [searchParams] = useSearchParams();
  const utmSource = searchParams.get("utm_source");
  useEffect(() => {
    setSource(utmSource);
  }, [utmSource]);
  //
  const showSuccessToast = () => {
    toast.success("Data Submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  const showErrorToast = () => {
    toast.error("Something went wrong.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  //
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  //
  const validate = () => {
    let newErrors = {};

    // Customer_Name
    if (!inputs.Customer_Name.trim()) {
      newErrors.Customer_Name = "Customer name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(inputs.Customer_Name)) {
      newErrors.Customer_Name = "Name should contain only letters and spaces.";
    }

    // Phone
    if (!inputs.Phone.trim()) {
      newErrors.Phone = "Phone number is required.";
    } else if (!/^\d+$/.test(inputs.Phone)) {
      newErrors.Phone = "Phone number should contain only digits.";
    } else if (inputs.Phone.length < 10 || inputs.Phone.length > 15) {
      newErrors.Phone = "Phone number should be 10–15 digits long.";
    }

    // E_mail
    if (!inputs.E_mail.trim()) {
      newErrors.E_mail = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputs.E_mail)) {
      newErrors.E_mail = "Invalid email format.";
    }

    // Outstanding_Amount
    if (!inputs.Outstanding_Amount.trim()) {
      newErrors.Outstanding_Amount = "Outstanding amount is required.";
    }

    // Messages
    if (!inputs.Messages.trim()) {
      newErrors.Messages = "Message is required.";
    } else if (inputs.Messages.length < 5) {
      newErrors.Messages = "Message must be at least 5 characters.";
    } else if (inputs.Messages.length > 500) {
      newErrors.Messages = "Message cannot exceed 500 characters.";
    }

    if (inputs.consent === false) {
      newErrors.consent = "Please agree to out terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    //
    const dateString = new Date().toLocaleDateString();
    const year = dateString.split("/")[2];
    const month = dateString.split("/")[1];
    const day = dateString.split("/")[0];
    const newDate = `${year}-${month}-${day}`;
    //
    const token = await getToken();
    if (validate()) {
      try {
        setLoading(true);
        const dailerStatus = await handleDialer(newDate);
        const zohoStatus = await handleZoho(token, newDate);
        if (dailerStatus || zohoStatus) {
          showSuccessToast();
          setInputs({
            Customer_Name: "",
            Phone: "",
            E_mail: "",
            Outstanding_Amount: "",
            Messages: "",
            consent: false,
            Created_On: "",
            Source: source ? source : "SOS_LP_Campaign",
            process_id: "4",
            campaign_id: "6",
          });
        } else {
          showErrorToast();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
  //
  const handleDialer = async (newDate) => {
    const data = {
      data: [
        {
          Phone: inputs.Phone,
          Customer_Name: inputs.Customer_Name,
          E_mail: inputs.E_mail,
          Messages: inputs.Messages,
          Source: inputs.Source,
          Created_On: newDate,
          Outstanding_Amount: inputs.Outstanding_Amount,
        },
      ],
      process_id: "4",
      campaign_id: "6",
    };
    try {
      const res = await axios.post(
        `${url}/proxy?url=http://27.107.190.198/crm/Commonapi/BulkSend`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data, "Dialer");
      if (res.data.response_status.toLowerCase() === "success") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  const handleZoho = async (token, newDate) => {
    const data = {
      data: [
        {
          Full_Name: inputs.Customer_Name,
          Last_Name: inputs.Customer_Name,
          Phone_Number: inputs.Phone,
          Email: inputs.E_mail,
          Messages: inputs.Messages,
          Sources: inputs.Source,
          Created_Time: newDate,
          Outstanding: inputs.Outstanding_Amount,
        },
      ],
      process_id: "4",
      campaign_id: "6",
    };
    try {
      const res = await axios.post(
        `${url}/proxy?url=https://www.zohoapis.in/crm/v2/Leads`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Zoho-oauthtoken ${token}`,
          },
        }
      );
      console.log(res.data, "ZOHO");
      if (res.data.data[0].code.toLowerCase() === "success") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container py-4 p-2">
        <div className="form-grid">
          <div className="handshake" data-aos="zoom-in">
            <img src={handshake} alt="" />
          </div>
          <div className="form-container" data-aos="zoom-in">
            <div className="text-center">
              <h2>Take the First Step - Reach Out Today</h2>
              <p>
                You don't have to carry this silent burden of debt alone.
                Whether it's missed EMIs or sleepless nights, help is here. Get
                free financial & mental health counselling.
              </p>
            </div>
            <div className="my-4 mx-auto">
              <div className="mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Farid Ansari"
                    name="Customer_Name"
                    value={inputs.Customer_Name}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                  <label htmlFor="fullName">Full Name</label>
                </div>
                {errors.Customer_Name && (
                  <p className="red-text">{errors.Customer_Name}</p>
                )}
              </div>
              <div className="mb-4">
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="XXXXX XXXXX"
                    name="Phone"
                    value={inputs.Phone}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                  <label htmlFor="phoneNumber">Phone Number</label>
                </div>
                {errors.Phone && <p className="red-text">{errors.Phone}</p>}
              </div>
              <div className="mb-4">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    placeholder="farid@ansari.com"
                    name="E_mail"
                    value={inputs.E_mail}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                  <label htmlFor="emailAddress">Email address</label>
                </div>
                {errors.E_mail && <p className="red-text">{errors.E_mail}</p>}
              </div>
              <div className="mb-4">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="missedEMI"
                    aria-label="Floating label select example"
                    name="Outstanding_Amount"
                    value={inputs.Outstanding_Amount}
                    onChange={handleInputs}
                    autoComplete="off"
                  >
                    <option value=""></option>
                    <option value="1-2 lakhs">1-2 lakhs</option>
                    <option value="2-5 Lakh">2-5 Lakh</option>
                    <option value="5-10 Lakh">5-10 Lakh</option>
                    <option value="More than 10 lakhs">
                      More than 10 lakhs
                    </option>
                  </select>
                  <label htmlFor="missedEMI">Debt Level : Missed EMI</label>
                </div>
                {errors.Outstanding_Amount && (
                  <p className="red-text">{errors.Outstanding_Amount}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-white">
                  Are you in need of mental health support?
                </label>
                <div className="input-flex">
                  <input
                    type="radio"
                    name="support"
                    id="support-yes"
                    value="support-yes"
                    onChange={handleSupport}
                    checked={inputs.Messages.toLowerCase() === "support-yes"}
                  />
                  <label className="text-white" htmlFor="support-yes">
                    Yes, I'd like to speak with a counsellor
                  </label>
                </div>
                <div className="input-flex">
                  <input
                    type="radio"
                    name="support"
                    id="support-no"
                    value="support-no"
                    onChange={handleSupport}
                    checked={inputs.Messages.toLowerCase() === "support-no"}
                  />
                  <label className="text-white" htmlFor="support-no">
                    No, financial counselling only
                  </label>
                </div>
                <div className="input-flex">
                  <input
                    type="radio"
                    name="support"
                    id="support-maybe"
                    value="support-maybe"
                    onChange={handleSupport}
                    checked={inputs.Messages.toLowerCase() === "support-maybe"}
                  />
                  <label className="text-white" htmlFor="support-maybe">
                    Not sure yet
                  </label>
                </div>
                {errors.Messages && (
                  <p className="red-text">{errors.Messages}</p>
                )}
              </div>
              <div className="mb-4">
                <div className="input-flex">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    className="mt-1"
                    checked={inputs.consent}
                    onChange={handleConsent}
                  />
                  <label className="text-white" htmlFor="consent">
                    I hereby consent to be contacted by SingleDebt and its
                    counselling partner, Mann Talks, for the purpose of
                    providing counselling and support services, and I confirm
                    that I have read and accept the{" "}
                    <Link
                      to="/termsandconditions"
                      className="text-decoration-none red-text"
                      target="_blank"
                    >
                      Terms and Conditions.
                    </Link>
                  </label>
                </div>
                {errors.consent && <p className="red-text">{errors.consent}</p>}
              </div>
              <div className="text-center">
                <button className="button form-button" onClick={handleSubmit}>
                  {loading ? (
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <p>Loading</p>
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    "Break the silence"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
