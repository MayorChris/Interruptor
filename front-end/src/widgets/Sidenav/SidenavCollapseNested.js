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
import { useState } from "react";

import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

// Interruptor components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Interruptor example components
import SidenavCollapse from "widgets/Sidenav/SidenavCollapse";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "widgets/Sidenav/styles/sidenavCollapse";

// Interruptor context
import { useMaterialUIController } from "context";

function SidenavCollapseNested({ collapse, primaryIcon, primaryName, active, ...rest }) {
  console.log(primaryName);
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  const textColor = "white";

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const rendercollapse = collapse.map(
    ({ type, name, icon, title, noCollapse, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : (
          <NavLink key={key} to={route}>
            <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
          </NavLink>
        );
      } else if (type === "title") {
        returnValue = (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }

      return returnValue;
    }
  );

  console.log(rendercollapse);

  return (
    <MDBox>
      <ListItem component="li">
        <MDBox
          onClick={handleClick}
          {...rest}
          sx={(theme) =>
            collapseItem(theme, {
              active,
              transparentSidenav,
              whiteSidenav,
              darkMode,
              sidenavColor,
            })
          }
        >
          <ListItemIcon
            sx={(theme) =>
              collapseIconBox(theme, { transparentSidenav, whiteSidenav, darkMode, active })
            }
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{primaryIcon}</Icon>
            ) : (
              primaryIcon
            )}
          </ListItemIcon>

          <ListItemText
            primary={primaryName}
            sx={(theme) =>
              collapseText(theme, {
                miniSidenav,
                transparentSidenav,
                whiteSidenav,
                active,
              })
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </MDBox>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <MDBox ml={2}>
          <List>{rendercollapse}</List>
        </MDBox>
      </Collapse>
    </MDBox>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapseNested.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapseNested.propTypes = {
  collapse: PropTypes.arrayOf(PropTypes.object).isRequired,
  primaryIcon: PropTypes.node.isRequired,
  primaryName: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default SidenavCollapseNested;
