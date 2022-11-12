/**
=========================================================
* Lab Inelca - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// clsx is a utility for constructing className strings conditionally

// @mui material components

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/lab/TabPanel";
// import Link from "@mui/material/Link";

// function LinkTab(props) {
//   return (
//     <Tab
//       component={NavLink}
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

function TabsNav({ orientation, value, onChange, routes }) {
  console.log("Aqui1==Tab_??");
  console.log(value);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ name, key, route }, index) => {
    const returnValue = (
      <Tab
        label={name}
        key={key}
        textColor="dark"
        iconPosition="start"
        p={2}
        value={index}
        to={route}
        wrapped
        component={NavLink}
      />
    );
    // console.log(returnValue);
    return returnValue;
  });

  // const renderComponents = routes.map(({ type, component, value }) => {
  //   //console.log(route);
  //   if (type === "collapse") {
  //     return (
  //       <TabPanel value={value} component={NavLink}>
  //         {component}
  //       </TabPanel>
  //     );
  //   }
  // });

  return (
    <>
      <Tabs
        className="bg-transparent"
        orientation={orientation}
        value={value}
        textColor="dark"
        onChange={onChange}
        scrollButtons
      >
        {renderRoutes}
      </Tabs>
      {/* {renderComponents} */}
    </>
  );
}

// Typechecking props for the Sidenav
TabsNav.propTypes = {
  orientation: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabsNav;
