import React from "react";
import { Formik, Form, Field } from "formik";
import EditorComponent from "../components/EditorComponent";
// import "./YourStyles.css"; // Import your CSS file for custom styles

export const PortfolioRegister = () => {
  const data = [
    {
      label_name: "PROJECTS WORKED ON",
    },
    {
      label_name: "WORK EXPERIENCE",
    },
  ];

  return (
    <div className="formik">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log("Form values:", values);
        }}
      >
        <Form className="register-form-container">
          <div className="input-formName">
            <label>NAME :</label>
            <div>
              <Field
                type="text"
                name="name"
                className="custom-input"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="input-formName">
            <label>EMAIL :</label>
            <div>
              <Field
                type="email"
                name="email"
                className="custom-input"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="input-formName">
            <label>MOBILE NO :</label>
            <div>
              <Field
                type="number"
                name="Mobile_No"
                className="custom-input"
                placeholder="Enter your Mobile Number"
              />
            </div>
            
          </div>
          <div className="formName">
            <label>LINKS :</label>
            <div>
              <EditorComponent />
            </div>
          </div>
          <div className="formName">
            <label>PROJECTS WORKED ON :</label>
            <div>
              <EditorComponent />
            </div>
          </div>
          <div className="formName">
            <label>WORK EXPERIENCE :</label>
            <div>
              <EditorComponent />
            </div>
          </div>
          <div className="formName">
            <label>TECHNICAL SKILLS :</label>
            <div>
              <EditorComponent />
            </div>
          </div>
          <div className="formName">
            <label>EDUCATION QUALIFICATION :</label>
            <div>
              <EditorComponent />
            </div>
          </div>
          <div className="formName">
            <label>CERTIFICATES :</label>
            <div>
              <EditorComponent />
            </div>
          </div>
          <div className="formName">
            <label>OTHERS :</label>
            <div>
              <EditorComponent />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
