import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { API } from "../global";
import LoginIcon from "@mui/icons-material/Login";
import { useFormik } from "formik";
import * as yup from "yup";
import "./SignUp.css";


const API = "event-planner-app-backend-y35i.onrender.com";

const phoneRegExp = "/^((\+[1-9]{1,4}[ \-])|(\([0-9]{2,3}\)[ \-])|([0-9]{2,4})[ \-])?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/";
const max = 10;

const userValidationSchema = yup.object({
  fullname: yup.string().required("Enter a fullname!"),
  username: yup.string().required("Enter a userName!"),

  mobileNo: yup.string()
    .required("required")
    .matches(/^\d{10,10}$/, 'Phone number is not valid')
    .min(10, "too short")
    .max(10, "too long"),

  // mobileNo: yup.string().test({
  //   name: 'max',
  //   exclusive: true,
  //   params: { max },
  //   message: '${path} must be less than ${max} characters',
  //   test: (value) => value == null || value.length <= max || ,
  // }),

  // mobileNo: yup.number().isLength({ min: 10, max: 10}).required("Enter a mobileNo!"),
  emailId: yup.string().matches("@gmail.com").required("Enter Email!"),
  password: yup
    .string()
    .min(8)
    .matches(
      /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&]).{8,}$/g,
      "Password must include capital letter,small letter,number and special characters"
    )
    .required("Enter Password!"),
});

export default function SignUp() {
  const navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        fullname: "",
        username: "",
        mobileNo: "",
        emailId: "",
        password: "",
      },
      validationSchema: userValidationSchema,
      onSubmit: (values) => {
        alert("Processing please wait...")
        newUser(values);
      },
    });

  const newUser = (add) => {
    console.log(add);
    fetch(`https://event-planner-app-backend-y35i.onrender.com/users/register`, {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res.message, res);
        if (res.message === "Successful Registeration") {
          alert("Registeration Successful");
          navigate("/login");
        } else {
          alert(res.message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-User my-12">
      <TextField
        className="input"
        id="filled-basic"
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        name="fullname"
        error={touched.fullname && errors.fullname}
        helperText={
          touched.fullname && errors.fullname ? errors.fullname : null
        }
        label="Enter your Full Name"
        variant="filled"
      />

      <TextField
        className="input"
        id="filled-basic"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        name="username"
        error={touched.username && errors.username}
        helperText={
          touched.username && errors.username ? errors.username : null
        }
        label="Enter your username"
        variant="filled"
      />


      <TextField
        className="input"
        id="filled-basic"
        value={values.mobileNo}
        // type="number"
        onChange={handleChange}
        onBlur={handleBlur}
        name="mobileNo"
        error={touched.mobileNo && errors.mobileNo}
        helperText={
          touched.mobileNo && errors.mobileNo ? errors.mobileNo : null
        }
        label="Enter Phone Number"
        variant="filled"
      />

      <TextField
        className="input"
        id="filled-basic"
        value={values.emailId}
        onChange={handleChange}
        onBlur={handleBlur}
        name="emailId"
        error={touched.emailId && errors.emailId}
        helperText={touched.emailId && errors.emailId ? errors.emailId : null}
        label="Email"
        variant="filled"
      />


      <TextField
        className="input"
        id="filled-basic"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        error={touched.password && errors.password}
        helperText={
          touched.password && errors.password ? errors.password : null
        }
        label="Password"
        variant="filled"
      />

      <Button
        style={{ width: "80%", backgroundColor: "#FF5880", padding: "12px 0px", marginTop: '4px', fontSize: "16px" }}
        className="add"
        type="submit"
        variant="contained"
      >
        Signup
      </Button>

      <p>
        If you already have an account ?
        <Button>
          <LoginIcon onClick={() => navigate("/login")} />
        </Button>
      </p>
    </form>
  );
}
