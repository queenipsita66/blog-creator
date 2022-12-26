import { BookmarkAddOutlined } from "@mui/icons-material";
import CClickableCard from "./CClickableCard";

export default {
    title: "Molecules/CClickableCard",
    component: CClickableCard,
};

export const CClickableCardStories = () => {
    return (
        <CClickableCard
            subtitle={"Sample Subtitle"}
            title={"How to test Sample Clickable Card"}
            description={"This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity"}
            createdDate={"Nov 2"}
            readTime={"5 mins"}
            tag={"Article"}
            displayIcon={<BookmarkAddOutlined fontSize="medium"/>}
            hasIcon={true}
            cardMediaWidth={151}
            cardMedia={"https://images.unsplash.com/photo-1482059387495-939d52279925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"}
            cardMediaAlt={"Sample Image"}
            onClick={() => {console.log("clicked on card")}}
        />
    )
}
