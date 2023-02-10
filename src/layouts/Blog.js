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
import DialogBlog from "examples/Dialog/DialogBlog";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Dashboard components
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

import image1 from "assets/images/w1.png";
import image2 from "assets/images/w2.jpg";
import image3 from "assets/images/w3.jpg";
import image4 from "assets/images/w4.jpg";
import image5 from "assets/images/w5.jpg";
import image6 from "assets/images/w6.jpg";

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
              Chia sẻ kiến thức đầu tư
            </MDTypography>
            <MDBox mb={1}>
              <MDTypography variant="button" color="text">
                Nâng cao năng lực đầu tư của bạn thông qua tập hợp những bài viết và tài liệu hay
                chia sẻ kiến thức, kinh nghiệm đầu tư và quản lý tài chính cá nhan
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDButton onClick={handleClickOpen} variant="gradient" color="dark">
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;Thêm bài viết mới
          </MDButton>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={image1}
                label="10 lưu ý khi xuất khẩu hàng hóa nông sản sang Châu Âu"
                title="11/1/2020"
                description="Châu Âu là một trong những thị trường rất tiềm năng cho xuất khẩu hàng hóa nông sản. Trước khi bạn quyết định xuất khẩu nông sản sang Châu Âu thì có một số điều cần được xem xét. Việc nhập khẩu nông sản sang châu Âu khá hạn chế do điều kiện nhiệt độ và khí hậu ở đó không thuận lợi cho nông sản. ..."
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
                label="10 lưu ý khi xuất khẩu hàng hóa nông sản sang Châu Âu"
                title="11/1/2020"
                description="Châu Âu là một trong những thị trường rất tiềm năng cho xuất khẩu hàng hóa nông sản. Trước khi bạn quyết định xuất khẩu nông sản sang Châu Âu thì có một số điều cần được xem xét. Việc nhập khẩu nông sản sang châu Âu khá hạn chế do điều kiện nhiệt độ và khí hậu ở đó không thuận lợi cho nông sản. ..."
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
                label="10 lưu ý khi xuất khẩu hàng hóa nông sản sang Châu Âu"
                title="11/1/2020"
                description="Châu Âu là một trong những thị trường rất tiềm năng cho xuất khẩu hàng hóa nông sản. Trước khi bạn quyết định xuất khẩu nông sản sang Châu Âu thì có một số điều cần được xem xét. Việc nhập khẩu nông sản sang châu Âu khá hạn chế do điều kiện nhiệt độ và khí hậu ở đó không thuận lợi cho nông sản. ..."
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
                label="10 lưu ý khi xuất khẩu hàng hóa nông sản sang Châu Âu"
                title="11/1/2020"
                description="Châu Âu là một trong những thị trường rất tiềm năng cho xuất khẩu hàng hóa nông sản. Trước khi bạn quyết định xuất khẩu nông sản sang Châu Âu thì có một số điều cần được xem xét. Việc nhập khẩu nông sản sang châu Âu khá hạn chế do điều kiện nhiệt độ và khí hậu ở đó không thuận lợi cho nông sản. ..."
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
                label="10 lưu ý khi xuất khẩu hàng hóa nông sản sang Châu Âu"
                title="11/1/2020"
                description="Châu Âu là một trong những thị trường rất tiềm năng cho xuất khẩu hàng hóa nông sản. Trước khi bạn quyết định xuất khẩu nông sản sang Châu Âu thì có một số điều cần được xem xét. Việc nhập khẩu nông sản sang châu Âu khá hạn chế do điều kiện nhiệt độ và khí hậu ở đó không thuận lợi cho nông sản. ..."
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
                image={image6}
                label="10 lưu ý khi xuất khẩu hàng hóa nông sản sang Châu Âu"
                title="11/1/2020"
                description="Châu Âu là một trong những thị trường rất tiềm năng cho xuất khẩu hàng hóa nông sản. Trước khi bạn quyết định xuất khẩu nông sản sang Châu Âu thì có một số điều cần được xem xét. Việc nhập khẩu nông sản sang châu Âu khá hạn chế do điều kiện nhiệt độ và khí hậu ở đó không thuận lợi cho nông sản. ..."
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
      <DialogBlog open={open} handleClose={handleClose} />
    </DashboardLayout>
  );
}

export default Dashboard;
