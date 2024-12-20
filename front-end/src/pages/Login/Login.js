import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
};

export default Login;