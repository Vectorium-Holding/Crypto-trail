"use client";

import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const RootContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1e1e1e 30%, #3d2900 100%)",
  padding: "20px",
});

const CustomCard = styled(Card)({
  background: "rgba(255, 215, 0, 0.1)",
  color: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.2)",
  border: "1px solid rgba(255, 215, 0, 0.3)",
  padding: "16px",
  width: "100%",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const Icon = styled(Box)({
  width: "50px",
  height: "50px",
  background: "rgba(255, 215, 0, 0.2)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "16px",
});

const RightCard = styled(Card)({
  background: "rgba(255, 215, 0, 0.1)",
  color: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.2)",
  border: "1px solid rgba(255, 215, 0, 0.3)",
  padding: "16px",
  width: "300px",
});

const ButtonStyled = styled(Button)({
  background: "rgba(255, 215, 0, 0.2)",
  color: "#FFD700",
  borderRadius: "8px",
  padding: "8px 16px",
  fontWeight: "bold",
  "&:hover": {
    background: "rgba(255, 215, 0, 0.3)",
  },
});

const Page = () => {
  return (
    <RootContainer>
      <Grid container spacing={3} maxWidth="lg">
        {/* Left Section */}
    
        <Grid item xs={12}>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <ButtonStyled>Carson Credit</ButtonStyled>
            <ButtonStyled>Max rev/sleep</ButtonStyled>
            <ButtonStyled>DMI @ 3.5ko</ButtonStyled>
            <ButtonStyled>Carson Credit</ButtonStyled>
            <ButtonStyled>Max rev/sleep</ButtonStyled>
            <ButtonStyled>DMI @ 3.5ko</ButtonStyled>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Custom Card */}
            <CustomCard sx={{ display: "flex", alignItems: "center", flex: 1 }}>
              <Icon>
                <Image
                  src="/bitcoin.JPEG" // Ensure this image exists
                  alt="Currency"
                  width={30}
                  height={30}
                />
              </Icon>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#FFD700" }}
                >
                  $350,000
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#ffffff99", mb: 1 }}
                >
                  Face/Up (3.1kV)
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Typography variant="body1" sx={{ color: "#FFD700" }}>
                    ￥: 864,798
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#FFD700" }}>
                    ￥: 81.89%
                  </Typography>
                </Box>
              </CardContent>
            </CustomCard>

            {/* Right Card Section */}
            <RightCard sx={{ flex: 0.3 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFD700",
                    borderBottom: "1px solid rgba(255,215,0,0.3)",
                    pb: 1,
                  }}
                >
                  Carbon Credit
                </Typography>
                <Box>
                  <Typography variant="body2" sx={{ color: "#ffffff99" }}>
                    Max rev/sleep
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#ffffff99", display: "block" }}
                  >
                    DMI @ 3.5ko
                  </Typography>
                </Box>
              </Box>
            </RightCard>
          </Box>

          {/* Buttons Section (Now in Column) */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <ButtonStyled>Carson Credit</ButtonStyled>
            <ButtonStyled>Max rev/sleep</ButtonStyled>
            <ButtonStyled>DMI @ 3.5ko</ButtonStyled>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={3}>
          <h1>Hello</h1>
        </Grid>
      </Grid>
    </RootContainer>
  );
};

export default Page;
