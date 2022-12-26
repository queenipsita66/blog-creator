import { Box, Card, CardContent, Typography } from "@mui/material"
import CAnalyticsChip from "../atoms/CAnalyticsChip";

interface CDashboardCardsProps {
    contentHeader: string;
    numberCount: string;
    analyticsPercentage: string;
    displayIcon: JSX.Element;
    chipBgColor?: string;
    chipTextColor?: string;
    chipWidth?: string;
    contentNote1?: string;
    extraNumber?: string;
    contentNote2?: string;
}

const CDashboardCards = (props: any) => {
    return (
        <Card variant="outlined" sx={{borderRadius: "10px"}}>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: "200" }} color="#a2a8b0" gutterBottom>
                    {props.contentHeader}
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    columnGap: "1rem",
                    flexWrap: "wrap",
                    mb: 1.5,
                    alignItems: "center"
                }}>
                    <Typography variant="h5" component={"div"}>
                        {props.numberCount}
                    </Typography>
                    <CAnalyticsChip
                        analyticsPercentage={props.analyticsPercentage}
                        displayIcon={props.displayIcon}
                        bgColor={props.chipBgColor}
                        textColor={props.chipTextColor}
                        width={props.chipWidth}
                    />
                </Box>
                <Typography variant="caption" component={"div"} color="#a2a8b0" sx={{fontWeight: "200"}}>
                    {props.contentNote1}<span style={{ color: props.chipBgColor, marginLeft: "5px", marginRight: "5px" }}>{props.extraNumber}</span>{props.contentNote2}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CDashboardCards;