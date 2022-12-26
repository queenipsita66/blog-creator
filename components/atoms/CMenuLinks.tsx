import { Button } from "@mui/material"

const CMenuLinks = (props: any) => {
    return <Button sx={props.sx} variant="text" onClick={props.onClick} color={props.color} size={props.size}>{props.linkName}</Button>
}

export default CMenuLinks;