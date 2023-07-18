import * as Yup from "yup";

export const loginUpSchema = Yup.object({
  mobileno: Yup.string().min(10,'Mobile number must be at least 10 characters').required("Please enter your mobile number")
});