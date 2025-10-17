import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { API } from "../global";
import { useFormik } from "formik";
import "./SignUp.css";
import * as yup from "yup";
import { useUserContext } from "../Contexts/UserContext";

const userValidationSchema = yup.object({
  data: yup.string().required("Enter Email or Username!"),
  password: yup.string().min(8).required("Enter Password!"),
});

export default function Login() {
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        data: "",
        password: "",
      },
      validationSchema: userValidationSchema,
      onSubmit: (values) => {
        alert("Processing please wait...")
        loginUser(values);
      },
    });

  const loginUser = (add) => {
    console.log(add);
    fetch(`https://event-planner-app-backend-y35i.onrender.com/users/login`, {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Invalid Credentials") {
          alert("Invalid Credentials");
        } else {
          setUser(data.user, data.token);
          alert("Successfully Logged In");
          navigate("/");
        }
      });
  };
  const token = sessionStorage.getItem("token");
  return (
    <form onSubmit={handleSubmit} className="add-User my-12">
      {!token ? <h2 className="text-xl font-semibold mb-2">Login First To Get Access</h2> : ""}

      <TextField
        className="input"
        id="filled-basic"
        value={values.data}
        onChange={handleChange}
        onBlur={handleBlur}
        name="data"
        error={touched.data && errors.data}
        helperText={touched.data && errors.data ? errors.data : null}
        label="Enter your email or username"
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
        label="password"
        variant="filled"
      />

      <Button
        style={{ width: "80%", backgroundColor: "#FF5880", padding: "12px 0px", marginTop: '4px', fontSize: "16px" }}
        className="add"
        variant="contained"
        type="submit"
      >
        Login
      </Button>
      <button className="text-blue-500 uppercase hover:underline border-blue-500" onClick={() => navigate("/signup")}> Create an account </button>
    </form>
  );
}
