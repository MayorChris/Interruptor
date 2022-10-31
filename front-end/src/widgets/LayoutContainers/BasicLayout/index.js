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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// Go Coffee components
import MDBox from "components/MDBox";

// Go Coffee context
import { useMaterialUIController, setLayout } from "context";

function DashboardLayout({ children }) {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);
  return (
    <MDBox
      sx={() => ({
        p: 3,
        position: "relative",
      })}
    >
      {children}
    </MDBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
