/**
=========================================================
* Interruptor - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
// import TabPanel from "@mui/lab/TabPanel";

// Interruptor components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";

// Interruptor base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
// import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/interruptor/fondo.jpeg";

// Overview page components
import TabsNav from "widgets/Tabs";

function Header({ tabValue, handleSetTabValue, routes }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  // const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  // const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <AppBar position="static">
          <TabsNav
            orientation={tabsOrientation}
            value={tabValue}
            onChange={handleSetTabValue}
            routes={routes}
          />
        </AppBar>
      </Card>
    </MDBox>
  );
}

Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  handleSetTabValue: PropTypes.func.isRequired,
  routes: PropTypes.string.isRequired,
};

export default Header;
