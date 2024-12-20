import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/Login.css";
import SignUpForm from "./SignupForm";

const Signup = () => {
  return (
    <>
      <Layout>
        <SignUpForm />
      </Layout>
    </>
  );
};

export default Signup;