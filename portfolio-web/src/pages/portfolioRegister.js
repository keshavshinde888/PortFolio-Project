import React,{useState} from "react";
import { Formik, Form, Field } from "formik";
import EditorComponent from "../components/EditorComponent";
import { TextField, Button } from "@mui/material";
// import "./PortfolioRegister.css"; // Assuming you have a separate CSS file

const formFields = [
  { name: "name", label: "NAME" },
  { name: "email", label: "EMAIL" },
  { name: "Mobile_No", label: "MOBILE NO" },
];

const additionalFields = [
  "PROJECTS WORKED ON",
  "WORK EXPERIENCE",
  "LINKS",
  "TECHNICAL SKILLS",
  "EDUCATION QUALIFICATION",
  "CERTIFICATES",
  "OTHERS",
];

const PortfolioRegister = () => {
  const initialValues = {
    name: "",
    email: "",
    Mobile_No: "",
  };
  
  const [editorData, setEditorData] = useState({});

  const handleEditorChange = (fieldName, data) => {
    setEditorData((prevData) => ({
      ...prevData,
      [fieldName]: data,
    }));
  };
  const handleSubmit = (values) => {
    // Combine form data with editor data
    const formDataWithEditorData = { ...values, ...editorData };

    console.log('Form values with editor data:', formDataWithEditorData);
    // Handle form submission
  };

  return (
    <div className="formik">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="register-form-container">
          {formFields.map((field) => (
            <div key={field.name} className="input-form">
              <label>{field.label}:</label>
              <div>
                <Field
                  type="text"
                  name={field.name}
                  className="custom-input"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              </div>
            </div>
          ))}

          {additionalFields.map((fieldName) => (
            <div key={fieldName} className="formName">
              <label>{fieldName}:</label>
              <div>
                <EditorComponent onChange={(data) => handleEditorChange(fieldName, data)} />
              </div>
            </div>
          ))}

          <div className="buttonSubmit">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                width: "50%",
                borderRadius: "40px",
              }}
            >
              SUBMIT FORM
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PortfolioRegister;
