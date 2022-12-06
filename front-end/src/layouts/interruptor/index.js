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

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components

// Interruptor components
import MDBox from "components/MDBox";

// Interruptor example components
import DashboardLayout from "widgets/LayoutContainers/DashboardLayout";
// import Footer from "widgets/Footer";
import HorizonProjectCard from "widgets/Cards/ProjectCards/HorizonProjectCard";

// Overview page components
import Header from "layouts/interruptor/components/Header";

import { useMaterialUIController } from "context";

function Overview({ index, routes, image, type, label, title, description, action, action2 }) {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({ type: "LAYOUT", value: "dashboard" });
  }, [pathname]);

  console.log(`${index}-${label}`);
  const [tabValue, setTabValue] = useState(index);
  console.log("tabValue");
  console.log(tabValue);
  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    console.log("newValue");
    console.log(newValue);
  };

  useEffect(() => {
    setTabValue(index);
  }, [index]);

  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header tabValue={tabValue} handleSetTabValue={handleSetTabValue} routes={routes} />
      <MDBox mt={5} mb={3}>
        <HorizonProjectCard
          image={image}
          type={type}
          title={title}
          label={label}
          description={description}
          action={action}
          action2={action2}
        />
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

Overview.propTypes = {
  index: PropTypes.number.isRequired,
  routes: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  action2: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default Overview;

// function Administracion({ index, children }) {
//   const [, dispatch] = useSoftUIController();
//   const submodule = "Administracion";
//   const { pathname } = useLocation();
//   console.log("children");
//   console.log(children);
//   useEffect(() => {
//     dispatch({ type: "LAYOUT", value: "module" });
//   }, [pathname]);
//   console.log({ index });
//   const [tabValue, setTabValue] = useState(index);
//   console.log("tabValue");
//   console.log(tabValue);
//   const handleSetTabValue = (event, newValue) => {
//     setTabValue(newValue);
//     // console.log("newValue");
//     // console.log(newValue);
//   };

//   return (
//     <ModuleLayout>
//       <Sidenav routes={routesSubModules} />
//       <Header
//         tabValue={tabValue}
//         handleSetTabValue={handleSetTabValue}
//         submodule={submodule}
//         routes={routes}
//         image1={imagemodule}
//         image2={imageSubmodule}
//       />
//       {children}
//     </ModuleLayout>
//   );
// }

// // Typechecking props for the LayoutContainer
// Administracion.propTypes = {
//   index: PropTypes.number.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Administracion;
