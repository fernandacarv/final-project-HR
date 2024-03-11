import React, { useContext, useEffect } from "react";
import { MainForm } from "../../Context/mainform.context";

function EmergencyContact({ onNext, onBack, onChange }) {
  const { formData, setFormData } = useContext(MainForm);

  useEffect(() => {
    // Assuming you want to fetch and set the data when the component mounts
    const fetchData = async () => {
      // Fetch your data and update the form data using setFormData
      // Example: const response = await fetchYourData();
      // setFormData(response.data);
    };

    fetchData();
  }, [setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the changed property is part of a nested object
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      // If the changed property is at the top level
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    onChange(formData);
    onNext();
  };

  const handleBack = () => {
    onBack(formData);
  };

  return (
    <div>
      <h4>Emergency Contact</h4>
      <label htmlFor="EmergencyContactName">Name:</label>
      <input
        type="text"
        name="emergencyContact.name"
        value={formData.emergencyContact?.name || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="text"
        name="emergencyContact.phoneNumberEmergency"
        value={formData.emergencyContact?.phoneNumberEmergency || ""}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="">Relationship:</label>
      <input
        type="text"
        name="emergencyContact.relationship"
        value={formData.emergencyContact?.relationship || ""}
        onChange={handleChange}
        className="form-control"
      />
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleNext}>Next: Skills & Performance Metrics</button>
    </div>
  );
}

export default EmergencyContact;
