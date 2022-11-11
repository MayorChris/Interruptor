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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import Tab from "@mui/material/Tab";
//import Grid from "@mui/material/Grid";
// import Collapse from "@mui/material/Collapse";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Icon from "@mui/material/Icon";

// Lab Inelca components
//import SuiBox from "components/SuiBox";

// Custom styles for the TabCollapse
//import styles from "widgets/Sidenav/styles/sidenavCollapse";
//import styles from "widgets/Tabs/style";

// Lab Inelca context
//import { useSoftUIController } from "context";

function TabCollapse({ icon, name }) {
  //const classes = styles();
  // const tabsStyles = pillTabsStylesHook.useTabs();
  // const tabItemStyles = pillTabsStylesHook.useTabItem();

  return <Tab label={name} textColor="white" icon={icon} p={2} />;
}

// Setting default values for the props of TabCollapse
// TabCollapse.defaultProps = {
//   active: false,
//   noCollapse: false,
//   children: false,
//   open: false,
// };

// Typechecking props for the TabCollapse
TabCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default TabCollapse;
