import * as Yup from "yup";

export const otpUpSchema = Yup.object({
  otpno: Yup.string().min(1).max(1).required("Please enter your OTP"),
  otpno1: Yup.string().min(1).max(1).required("Please enter your OTP"),
  otpno2: Yup.string().min(1).max(1).required("Please enter your OTP"),
  otpno3: Yup.string().min(1).max(1).required("Please enter your OTP"),
  otpno4: Yup.string().min(1).max(1).required("Please enter your OTP")
});