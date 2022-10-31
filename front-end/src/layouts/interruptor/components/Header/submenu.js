// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import { useState } from "react";

import { styled, alpha } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
  "& .MuiButtonBase-root": {
    padding: 0,
  },
}));

export default function CustomizedMenus({ label, items }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const clickValues = {};

  // const [clickItem, setClickItem] = useState({});
  items.map((_, index) => {
    clickValues[`${label}-${index}`] = false;
    return null;
  });

  const [clickItem, setClickItem] = useState(clickValues);

  // setClickItem({
  //   ...clickItem,
  //   ...valueObject,
  // });

  const handleChanges = (event) => {
    console.log("(event.currentTarget---submenu)");
    console.log(event);
    const index = event.target.id;
    const updatedValue = clickValues;
    updatedValue[index] = true;
    setClickItem({
      ...clickItem,
      ...updatedValue,
    });
  };
  // const [clickItem, setClickItem] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // console.log("(event.currentTarget handleClick");
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("handleClose");
    setAnchorEl(null);
  };

  console.log("clickItem");
  console.log(clickItem);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        color="secondary"
        variant="text"
        sx={{
          padding: 0,
        }}
      >
        {label}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <MenuItem onClick={handleChanges} id={`${label}-${index}`} disableRipple>
            {clickItem[`${label}-${index}`] == false && <CheckBoxOutlineBlankIcon />}
            {clickItem[`${label}-${index}`] == true && <CheckIcon />}
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}

CustomizedMenus.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
