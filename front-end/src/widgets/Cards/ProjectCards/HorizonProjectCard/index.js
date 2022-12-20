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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Go Coffee components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function DefaultProjectCard({ image, type, label, title, description, action, action2 }) {
  const arrayDescriptions = description.split("\\n");
  const renderDescription = arrayDescriptions.map((des) => {
    return (
      <MDTypography variant="body2" fontWeight="light" color="text">
        {des}
      </MDTypography>
    );
  });

  console.log(renderDescription);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <Grid container spacing={1} direction="row">
        <Grid item xs={12} xl={5}>
          <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
            {type === "video" ? (
              <CardMedia
                src={image}
                component="video"
                title={title}
                controls
                sx={{
                  maxWidth: "100%",
                  margin: 0,
                  boxShadow: ({ boxShadows: { md } }) => md,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            ) : (
              <CardMedia
                src={image}
                component="img"
                title={title}
                sx={{
                  maxWidth: "100%",
                  margin: 0,
                  boxShadow: ({ boxShadows: { md } }) => md,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            )}
          </MDBox>
        </Grid>
        <Grid item xs={12} xl={7}>
          <MDBox mt={1} mx={0.5}>
            <MDBox mb={1}>
              <MDTypography variant="h3" textTransform="capitalize">
                {title}
              </MDTypography>
            </MDBox>
            <MDBox mb={1}>
              <MDTypography
                variant="body1"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                {label}
              </MDTypography>
            </MDBox>
            <MDBox mb={3} lineHeight={0}>
              {renderDescription}
            </MDBox>
            <Grid container spacing={1} direction="row">
              {action && (
                <Grid item xs={12} xl={2}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center">
                    {action.type === "internal" ? (
                      <MDButton
                        component={Link}
                        to={action.route}
                        variant="outlined"
                        size="small"
                        color={action.color}
                      >
                        {action.label}
                      </MDButton>
                    ) : (
                      <MDButton
                        component="a"
                        href={action.route}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        size="small"
                        color={action.color}
                      >
                        {action.label}
                      </MDButton>
                    )}
                  </MDBox>
                </Grid>
              )}
              {action2 && (
                <Grid item xs={12} xl={2}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center">
                    {action2.type === "internal" ? (
                      <MDButton
                        component={Link}
                        to={action2.route}
                        variant="outlined"
                        size="small"
                        color={action2.color}
                      >
                        {action2.label}
                      </MDButton>
                    ) : (
                      <MDButton
                        component="a"
                        href={action2.route}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        size="small"
                        color={action2.color}
                      >
                        {action2.label}
                      </MDButton>
                    )}
                  </MDBox>
                </Grid>
              )}
            </Grid>
          </MDBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard

DefaultProjectCard.defaultProps = {
  action: false,
  action2: false,
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
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
  }),
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
  }),
};

export default DefaultProjectCard;
