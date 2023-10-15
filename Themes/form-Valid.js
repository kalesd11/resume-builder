  // import { useForm } from "react-hook-form";
// import { useState } from "react";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
  
  
  // const [personalInfo, setPersonalInfo] = useState({
  //   fname: "",
  //   lname: "",
  //   mobile: null,
  //   email: null,
  //   address: null,
  // });

  // const schema = yup.object().shape({
  //   fname: yup.string().required("First Name is required"),
  //   lname: yup.string().required("Last Name is required"),
  //   Mobile: yup
  //     .number()
  //     .typeError("Please Enter Valid Mobile Number")
  //     .min(10).required("Mobile Number is required"),
  //   email: yup.string().email().required("Email is required"),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });