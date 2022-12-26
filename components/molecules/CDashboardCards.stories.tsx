import { TrendingDown, TrendingUp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import CDashboardCards from "./CDashboardCards";

export default {
    title: "Molecules/CDashboardCards",
    component: CDashboardCards,
};

export const CDashboardCardsStories = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3} md={3}>
                <CDashboardCards
                    contentHeader={"Total Page Views"}
                    numberCount={"4,42,236"}
                    analyticsPercentage={"59.3%"}
                    displayIcon={<TrendingUp fontSize="inherit" />}
                    chipBgColor={"#3883eb"}
                    chipTextColor={"#fff"}
                    contentNote1={"You made an extra"}
                    extraNumber={"35,000"}
                    contentNote2={"this year"}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={3}>
                <CDashboardCards
                    contentHeader={"Total Users"}
                    numberCount={"78,250"}
                    analyticsPercentage={"70.5%"}
                    displayIcon={<TrendingUp fontSize="inherit" />}
                    chipBgColor={"#3883eb"}
                    chipTextColor={"#fff"}
                    contentNote1={"You made an extra"}
                    extraNumber={"8,900"}
                    contentNote2={"this year"}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={3}>
                <CDashboardCards
                    contentHeader={"Total Order"}
                    numberCount={"18,800"}
                    analyticsPercentage={"27.4%"}
                    displayIcon={<TrendingDown fontSize="inherit" />}
                    chipBgColor={"#FFBF00"}
                    chipTextColor={"#fff"}
                    contentNote1={"You made an extra"}
                    extraNumber={"1,943"}
                    contentNote2={"this year"}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={3}>
                <CDashboardCards
                    contentHeader={"Total Sales"}
                    numberCount={"$35,078"}
                    analyticsPercentage={"27.4%"}
                    displayIcon={<TrendingDown fontSize="inherit" />}
                    chipBgColor={"#FFBF00"}
                    chipTextColor={"#fff"}
                    contentNote1={"You made an extra"}
                    extraNumber={"$20,395"}
                    contentNote2={"this year"}
                />
            </Grid>
        </Grid>
    )
}
