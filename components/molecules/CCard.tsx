import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import CButton from "../atoms/CButton";

interface CardImageType {
    alt: string;
    height: string;
    imgUrl: any;
}

interface CCardProps {
    hasImage?: boolean;
    cardImage?: CardImageType;
    cardTitle: string;
    cardBody: string;
    onActionButtonClick: () => void;
    hasActionButtonEndIcon?: boolean;
    actionButtonEndIcon?: JSX.Element;
    cardActionButtonLabel: string;
}

const CCard = (props: CCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {props.hasImage ? <CardMedia
                component="img"
                alt={props?.cardImage?.alt}
                height={props?.cardImage?.height}
                image={props.cardImage?.imgUrl}
            /> : null}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.cardTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.cardBody}
                </Typography>
            </CardContent>
            <CardActions>
                <CButton 
                    size="small" 
                    onClick={props.onActionButtonClick} 
                    endIcon={props.hasActionButtonEndIcon ? props.actionButtonEndIcon : null}
                    buttonLabel={props.cardActionButtonLabel}
                    variant={"text"}
                    color={"primary"}
                />
            </CardActions>
        </Card>
    );
}

export default CCard;