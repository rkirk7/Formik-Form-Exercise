import React from "react";
import {useFormik} from "formik";
// TODO: import useFormik from formik library

function App() {

  const [success, setSuccess] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: ""
    },
    onSubmit: values => {
      console.log("form:", values);
      if (!formik.errors.emailField && !formik.errors.pswField) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }

    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {
        errors.emailField = "Field Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = "Username should be an email";
      }
      if(!values.pswField) {
        errors.pswField = "Field Required";
      }
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="emailField" type="text" onChange={formik.handleChange}
        value={formik.values.emailField}/>
        {formik.errors.emailField && <div style={{color:"red"}} id="emailError">{formik.errors.emailField}</div> }
        <div>Password</div>
        <input name="pswField" type="password" onChange={formik.handleChange}
        value={formik.values.pswField}/>
        {formik.errors.pswField && <div style={{color:"red"}} id="pswError">{formik.errors.pswField}</div> }
        <div><button type="submit" id="submitBtn">Submit</button></div>
        {success && <div style={{color:"black"}}>Login Successful</div>}
   </form>
    </div>

    );
}

export default App;
