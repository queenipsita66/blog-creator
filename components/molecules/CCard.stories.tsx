import { ArrowRightAlt } from "@mui/icons-material";
import CCard from "./CCard";

export default {
    title: "Molecules/CCard",
    component: CCard,
};

export const CCardStories = () => {
    return (
        <CCard
            hasImage={true}
            cardTitle={"Sample Card"}
            cardBody={"Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon."}
            cardImage={{
                alt: "test-img",
                height: "140",
                imgUrl: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            }}
            hasActionButtonEndIcon={true}
            actionButtonEndIcon={<ArrowRightAlt/>}
            cardActionButtonLabel={"Learn More"}
            onActionButtonClick={() => {console.log("action button clicked..")}}
        />
    )
}
