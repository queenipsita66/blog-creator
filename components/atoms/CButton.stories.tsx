import CButton from "./CButton"

export default {
    title: "Atoms/CButton",
    component: CButton,
};

export const CButtonStories = () => {
    return (
        <CButton variant="outlined" color="primary" buttonLabel="Test Button" onClick={() => { console.log("button clicked") }} />
    )
}
