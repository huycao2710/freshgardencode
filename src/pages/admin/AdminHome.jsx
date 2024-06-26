import React from "react";
import SideNav from "../../components/admin/SideNav";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Navbar from "../../components/admin/Navbar";
import "../../../src/Dashboard.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { CreditCard, ShoppingBag } from "@mui/icons-material";
import CountUp from "react-countup";
import MyCalendar from "../../components/MyCalender";
import PieChartComponent from "../../charts/PieChartComp";
import Carousel from "./Carousel";
import img1 from "../admin/Banner/Banner1.jpg";
import img2 from "../admin/Banner/Banner2.jpg";
import img3 from "../admin/Banner/Banner3.jpg";

const AdminHome = () => {
  const slides = [img1, img2, img3];


  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49.25 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="iconStyle">
                        <ShoppingBag />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CountUp delay={0.4} end={1000} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Tổng đơn hàng chưa được giao
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49.25 + "%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <div className="iconStyle">
                        <CreditCard />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CountUp delay={0.4} end={1000} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Tổng đơn hàng đã được giao
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card className="gradientlight">
                    <Stack spacing={2} direction="row">
                      <div className="iconStyleLight">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="priceTitle">
                          $<CountUp delay={0.4} end={200000} duration={0.6} />
                        </span>
                        <br />
                        <span className="priceSubTitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card>
                    <Stack spacing={2} direction="row">
                      <div className="iconStyleBlack">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="priceTitle">
                          $<CountUp delay={0.4} end={200000} duration={0.6} />
                        </span>
                        <br />
                        <span className="priceSubTitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card
                  className="flex items-center justify-center"
                  sx={{
                    height: "60vh",
                    display: "flex",
                  }}
                >
                  <CardContent sx={{ height: "100%" }} className="max-w">
                    <Carousel slides={slides} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent className="calendar-container">
                    <MyCalendar />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AdminHome;
