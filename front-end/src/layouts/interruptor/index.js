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

// @mui material components

// Interruptor components
import MDBox from "components/MDBox";

// Interruptor example components
import DashboardLayout from "widgets/LayoutContainers/DashboardLayout";
// import Footer from "widgets/Footer";
import HorizonProjectCard from "widgets/Cards/ProjectCards/HorizonProjectCard";

// Overview page components
import Header from "layouts/interruptor/components/Header";
import descripcionesListData from "layouts/interruptor/data/DescripcionListData";

function Overview() {
  const renderDescripciones = descripcionesListData.map(
    ({ image, type, title, label, description, action }) => (
      <HorizonProjectCard
        image={image}
        type={type}
        title={title}
        label={label}
        description={description}
        action={action}
      />
    )
  );
  console.log("renderDescripciones");
  console.log(renderDescripciones);
  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          {renderDescripciones}
        </MDBox>
      </Header>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;
