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

import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/lab/TabPanel";
import Icon from "@mui/material/Icon";

// Go Coffee components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";

// Go Coffee base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
// import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/interruptor/fondo.jpeg";

// Overview page components
import Menu from "layouts/interruptor/components/Header/menu";
import SubMenu from "layouts/interruptor/components/Header/submenu";

function Header({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

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

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const child = children.props.children;

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
          <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
            <Tab
              label="Interruptor de POT"
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  toggle_of
                </Icon>
              }
            />
            <Tab
              label={
                <Menu
                  label="Medios de extinción"
                  items={[
                    "Aire",
                    <SubMenu label="Aceite" items={["1", "2", "3"]} />,
                    "Vacio",
                    "SF6",
                  ]}
                />
              }
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  fire_extinguisher
                </Icon>
              }
            />
            <Tab
              label={<Menu label="Mecanismos de operación" items={["Tripolar", "Monopolar"]} />}
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  api
                </Icon>
              }
            />
            <Tab
              label={
                <Menu
                  label="Dispositivos de conmutación"
                  items={["Tanque Muerto", "Tanque Vivo"]}
                />
              }
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  switch_left
                </Icon>
              }
            />
            <Tab
              label={<Menu label="Accionamiento" items={["Hidraúlico", "Neumático", "Resorte"]} />}
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  close_fullscreen
                </Icon>
              }
            />
            <Tab
              label={<Menu label="Caso espacial" items={["Resistor-Capacitivo"]} />}
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  stars
                </Icon>
              }
            />
            <Tab
              label={
                <Menu
                  label="Animación"
                  items={["Apertura Interruptor", "Cierre Interruptor", "Interruptor en Vacio"]}
                />
              }
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  animation
                </Icon>
              }
            />
            <Tab
              label="Información"
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  info
                </Icon>
              }
            />
          </Tabs>
        </AppBar>
        {/* <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Richard Davis
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                CEO / Co-Founder
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="Interruptor de POT"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      toggle_of
                    </Icon>
                  }
                />
                <Tab
                  label="Medios de extinción"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      fire_extinguisher
                    </Icon>
                  }
                />
                <Tab
                  label="Mecanismos de operación"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      api
                    </Icon>
                  }
                />
                <Tab
                  label="Dispositivos de conmutación"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      switch_left
                    </Icon>
                  }
                />
                <Tab
                  label="Accionamiento"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      close_fullscreen
                    </Icon>
                  }
                />
                <Tab
                  label="Caso espacial"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      stars
                    </Icon>
                  }
                />
                <Tab
                  label="Animación"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      animation
                    </Icon>
                  }
                />
                <Tab
                  label="Información"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      info
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid> */}
        {/* <TabPanel value={tabValue} index={0}>
          Menu
        </TabPanel> */}
        {child[tabValue]}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Header;
