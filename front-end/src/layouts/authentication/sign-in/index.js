/**
=========================================================
* Go Coffee - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Go Coffee components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import logoWhite from "assets/images/logo-ct.png";
import bgImage from "assets/images/finance-economics-work.jpg";

import authAbility from "config/ability";
import authRoute from "auth-context/auth.route";

import { useNavigate } from "react-router-dom";
import AuthApi from "api-auth/auth";
import { useAuth } from "auth-context/auth.context";

function Basic() {
  const history = useNavigate();
  const { set_User } = useAuth();
  const { _user } = useAuth();
  console.log("BASIC----");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Iniciar Sesión");

  const setProfile = async (response) => {
    let _user_ = { ...response.data._user };
    _user_.token = response.data.token;

    try {
      const routes = await authRoute(_user_.role);
      _user_.routes = routes;
      const rules = await authAbility(_user_.role);
      _user_.rules = rules;
      _user_ = JSON.stringify(_user_);
      // console.log("Sig-In");
      // console.log(_user_);
      set_User(_user_);
      localStorage.setItem("user", _user);
      history.push("/home");
      // location.reload();
      return window.location.reload();
    } catch (err) {
      console.log(err);
      setButtonText("Inicia Sesión");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("Ha sucedido un error.");
    }
  };
  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (_user && _user.token) {
      return history.push("/home");
    }
    if (user === "") {
      return setError("Debe introducir su nombre de usuario.");
    }
    if (password === "") {
      return setError("Debe ingresar su contraseña");
    }

    try {
      const response = await AuthApi.Login({
        user,
        password,
      });
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
      }
      return setProfile(response);
    } catch (err) {
      console.log(err);
      setButtonText("Inicia Sesión");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("Ha sucedido un error.");
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Go Coffee
          </MDTypography>
          <MDBox component="img" src={logoWhite} alt="Brand" width="2rem" />
        </MDBox>
        {_user && _user.token ? (
          <div>
            <h3 style={{ textAlign: "center" }}>Ya has iniciado sesión.</h3>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" buttonColor="info" fullWidth onClick={login}>
                Vamos
              </MDButton>
            </MDBox>
          </div>
        ) : (
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  defaultValue={user}
                  onChange={(event) => {
                    setUser(event.target.value);
                    setError(undefined);
                  }}
                  type="text"
                  label="Usuario"
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  defaultValue={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError(undefined);
                  }}
                  type="password"
                  label="Contraseña"
                  fullWidth
                />
              </MDBox>
              <MDBox mt={2} mb={2} textAlign="center">
                <h6
                  style={{
                    fontSize: ".8em",
                    color: "red",
                    textAlign: "center",
                    fontWeight: 400,
                    transition: ".2s all",
                  }}
                >
                  {error}
                </h6>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth>
                  {buttonText}
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        )}
      </Card>
    </BasicLayout>
  );
}

export default Basic;
