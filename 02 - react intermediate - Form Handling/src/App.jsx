import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // console.log("f,", formData.firstName, "l", formData.lastName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <h1>hello</h1>
        <input
          value={formData.firstName}
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => changeHandler(e)}
        />
        <input
          value={formData.lastName}
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={(e) => changeHandler(e)}
        />
        <input
          value={formData.email}
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={(e) => changeHandler(e)}
        />

        <br />
        <br />

        <textarea
          placeholder="comments"
          name="comments"
          id="isVisible"
          cols="30"
          rows="2"
          value={formData.comments}
          onChange={changeHandler}
        ></textarea>
        <br />

        <input
          type="checkbox"
          checked={formData.isVisible}
          onChange={changeHandler}
          name="isVisible"
        />
        <label htmlFor="isVisible">Am I visible ? </label>

        <br />
        <br />
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value={"Online Mode"}
          id="Online Mode"
          checked={formData.mode === "Online Mode"}
        />
        <label htmlFor="Online Mode">Online Mode</label>

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value={"Offline Mode"}
          id="Offline Mode"
          checked={formData.mode === "Offline Mode"}
        />
        <label htmlFor="Offline Mode">Offline Mode</label>

        <br />
        <br />

        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="Scorpio"> Scorpio</option>
          <option value="Fartuner"> Fartuner</option>
          <option value="Tharr"> Tharr</option>
          <option value="Legender"> Legender</option>
        </select>
        <label htmlFor="favCar">Favourite Car</label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default App;
