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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Go Coffee Context Provider
import { MaterialUIControllerProvider } from "context";

import { AuthProvider } from "auth-context/auth.context";
import { AbilityProvider } from "auth-context/Can";

let user = localStorage.getItem("user");
user = JSON.parse(user);
console.log("user");
console.log(user);

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <AuthProvider userData={user}>
        <AbilityProvider userData={user}>
          <App />
        </AbilityProvider>
      </AuthProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
