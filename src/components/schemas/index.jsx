import * as Yup from "yup";

export const signUpSchema = Yup.object({
  email: Yup.string().email('Email is invalid').required("Please enter your email"),
  password: Yup.string().min(6,'Password must be atleast 6 characters').required("Please enter your password"),
  mobileno: Yup.string().min(10,'Mobile number must be at least 10 characters').required("Please enter your mobile number")
});