import CMenuLinks from "./CMenuLinks";

export default {
    title: "Atoms/CMenuLinks",
    component: CMenuLinks,
};

export const CMenuLinkStories = () => {
    return (
        <CMenuLinks color="primary" linkName="Test Menu" onClick={() => { console.log("menu clicked") }} size="small"/>
    )
}
