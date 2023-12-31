import { useState } from "react";

export const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",

    //
    comments: false,
    candidates: false,
    notifications: "",
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });

    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container my-4">
      <h1>Form Exercise</h1>

      <form onSubmit={handleSubmit} className="my-4">
        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            onChange={changeHandler}
            name="firstName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            onChange={changeHandler}
            name="lastName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="form-control"
            onChange={changeHandler}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            onChange={changeHandler}
            className="form-control"
          >
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            placeholder="Street"
            className="form-control"
            onChange={changeHandler}
            name="streetAddress"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="city"
            className="form-control"
            onChange={changeHandler}
            name="city"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state">state</label>
          <input
            type="text"
            placeholder="state"
            className="form-control"
            onChange={changeHandler}
            name="state"
          />
        </div>

        <hr />

        <p>By Email</p>

        <div className="mb-3 d-flex align-items-start gap-2">
          <input
            type="checkbox"
            onChange={changeHandler}
            name="comments"
            checked={formData.comments}
            className="mt-1"
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p className="text-secondary">Get notified when someone posts</p>
          </div>
        </div>
        <div className="mb-3 d-flex align-items-start gap-2">
          <input
            type="checkbox"
            onChange={changeHandler}
            name="candidates"
            checked={formData.candidates}
            className="mt-1"
          />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p className="text-secondary">Get notified when someone posts</p>
          </div>
        </div>

        <p>Push Notifications</p>
        <div className="mb-3">
          <input
            type="radio"
            value="everything"
            name="notifications"
            onChange={changeHandler}
            id="everything"
          />
          <label htmlFor="everything">Everything</label>
        </div>

        <div className="mb-3">
          <input
            type="radio"
            id="same"
            value={"Same as everything"}
            name="notifications"
            onChange={changeHandler}
          />
          <label htmlFor="same">Same as Email</label>
        </div>

        <div className="my-3">
          <input type="submit" className="btn btn-primary " />
        </div>
      </form>
    </div>
  );
};
