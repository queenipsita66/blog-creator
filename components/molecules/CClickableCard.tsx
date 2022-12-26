import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

const CClickableCard = (props: any) => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <Card sx={{ display: 'flex', cursor: "pointer", justifyContent: 'space-between', columnGap: "2rem", width: '100%' }} onClick={props.onClick}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="subtitle1" fontSize={13} color="text.secondary" component="div">
                        {props.subtitle}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" fontSize={14} color="text.secondary" component="div">
                        {props.description}
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", flexDirection: "row", pb: 2, alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", pl: 2, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: "10px" }}>
                        <Typography variant="caption">{props.createdDate}</Typography> {bull}
                        <Typography variant="caption">{props.readTime}</Typography> {bull}
                        <Chip label={props.tag} />
                    </Box>
                    {props.hasIcon ? props.displayIcon : null}
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: props.cardMediaWidth }}
                image={props.cardMedia}
                alt={props.cardMediaAlt}
            />
        </Card>
    )
}

export default CClickableCard;