import { Button } from "@mui/material";

const CButton = (props: any) => {
    return (
        <Button
            type={props.type}
            sx={props.sx}
            variant={props.variant ? props.variant : "contained"}
            color={props.color ? props.color : "primary"}
            onClick={props.onClick}
            endIcon={props.endIcon}
            startIcon={props.startIcon}
            size={props.size}
            fullWidth={props.fullWidth}
        >
            {props.buttonLabel}
        </Button>
    )
}
export default CButton;