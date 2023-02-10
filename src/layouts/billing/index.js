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
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import Projects from "layouts/dashboard/components/Projects";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";

import Transactions from "layouts/billing/components/Transactions";

function Billing() {
  const { tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <ReportsBarChart
                    color="info"
                    title="Biểu đồ trong tuần"
                    description="Nguồn cầu giảm nhẹ"
                    date="Hãy kiểm tra thường xuyên"
                    chart={reportsBarChartData}
                  />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <ReportsLineChart
                    color="dark"
                    title="Biểu đồ trong tháng"
                    description="Vẫn đang tăng trưởng tốt"
                    date="Hãy kiểm tra thường xuyên"
                    chart={tasks}
                  />
                </Grid>
                <Grid item xs={12}>
                  <OrdersOverview />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Transactions />
            </Grid>
          </Grid>
          <Grid mt={4}>
            <Projects />
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
