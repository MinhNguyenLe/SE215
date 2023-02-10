/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DialogVegetable from "examples/Dialog/DialogVegetable";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Dashboard components
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

import image1 from "assets/images/q1.jpeg";
import image2 from "assets/images/q2.jpg";
import image3 from "assets/images/q3.jpg";
import image4 from "assets/images/q4.jpg";
import image5 from "assets/images/q5.jpg";

import team3 from "assets/images/team-3.jpg";

import React from "react";

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card id="delete-account">
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDBox pt={2} px={2} lineHeight={1.25}>
            <MDTypography variant="h6" fontWeight="medium">
              Các loại nông sản
            </MDTypography>
            <MDBox mb={1}>
              <MDTypography variant="button" color="text">
                Được sắp xếp ngẫu nhiên hoặc có thể tìm kiếm theo nhóm
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDButton onClick={handleClickOpen} variant="gradient" color="dark">
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;add new card
          </MDButton>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={image1}
                label="Kiwi"
                title="20.000 VND"
                description="Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem thêm thông tin",
                }}
                authors={[{ image: team3, name: "Nick Daniel" }]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={image2}
                label="Nho"
                title="22.000 VND"
                description="Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem thêm thông tin",
                }}
                authors={[{ image: team3, name: "Nick Daniel" }]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={image3}
                label="Dưa hấu"
                title="34.000 VND"
                description="Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem thêm thông tin",
                }}
                authors={[{ image: team3, name: "Nick Daniel" }]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={image4}
                label="Ỏi"
                title="46.000 VND"
                description="Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem thêm thông tin",
                }}
                authors={[{ image: team3, name: "Nick Daniel" }]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={image5}
                label="Nho"
                title="77.000 VND"
                description="Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Xem thêm thông tin",
                }}
                authors={[{ image: team3, name: "Nick Daniel" }]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Card>
      <DialogVegetable open={open} handleClose={handleClose} />
    </DashboardLayout>
  );
}

export default Dashboard;
