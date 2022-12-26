import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router";

interface CAnalyticsChipProps {
    width?: string;
    bgColor?: string;
    textColor?: string;
    displayIcon: JSX.Element;
    analyticsPercentage: string;
}

const CAnalyticsChip = (props: CAnalyticsChipProps) => {
    return (
        <Box 
            sx={{
                width: props.width? props.width : "70px", 
                background: props.bgColor ? props.bgColor : "inherit", 
                display: "flex", 
                padding: "2px 7px",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                color: props.textColor ? props.textColor: "#fff",
                borderRadius: "5px",
                alignItems: "center"
            }}>
                {props.displayIcon}
                <Typography variant="caption" sx={{fontSize: 13, fontWeight: "200"}}>{props.analyticsPercentage}</Typography>
        </Box>
    )
}
export default CAnalyticsChip;
