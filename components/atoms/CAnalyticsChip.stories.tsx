import { TrendingDown, TrendingUp } from "@mui/icons-material";
import CAnalyticsChip from "./CAnalyticsChip";

export default {
    title: "Atoms/CAnalyticsChip",
    component: CAnalyticsChip,
};

export const CAnalyticsChipStories = () => {
    return (
        <CAnalyticsChip 
            bgColor={"#FFBF00"} 
            analyticsPercentage="27.34%" 
            displayIcon={<TrendingDown fontSize="inherit"/>}
        />
    )
}
