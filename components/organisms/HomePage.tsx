import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CButton from "../atoms/CButton";
import CMenuLinks from "../atoms/CMenuLinks";
import CCard from "../molecules/CCard";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomePage = (props: any) => {
    const router = useRouter();
    const theme = useTheme();

    const [windowWidth, setWindowWith] = useState(1200);

    const resizeDevide = () => {
        setWindowWith(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeDevide);
        return (() => {
            window.removeEventListener("resize", resizeDevide);
        })
    }, [])

    return (
        <>
            <Box sx={{
                background: "radial-gradient(ellipse farthest-corner at 0% 175%, #E8EAF6 58%, #E8EAF6 70%, #fff 70%)",
                boxShadow: "0 -3px 15px 4px #ccc",
                minHeight: "346px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                borderRadius: "0 0 92% 0"
            }}>
                <Container sx={{ displat: "flex", flexDirection: "row", marginLeft: 0, paddingLeft: 0 }} maxWidth="sm">
                    <Typography variant="h4" component="h4" mt={2} pl={2} mb={2}>{props.blogHeader[0]?.headerTitle}</Typography>
                    <Typography variant="subtitle1" color="secondary" mt={5} pl={2}>{props.blogHeader[0]?.headerBody}</Typography>
                    <CButton sx={{ marginLeft: "1rem" , marginTop: "1.5rem", borderRadius: "35px"}} size={"large"} buttonLabel={"Get Started"} variant="outlined" onClick={() => { router.push("/dashboard")}} endIcon={<KeyboardArrowRightIcon/>}/>
                </Container>
                <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginTop: "5px" }}>
                    {props.blogHeader[0].routesCollection?.items?.map((routes: any, index: number) => {
                        return (
                            <CMenuLinks sx={{ marginRight: "3px" }} key={index} linkName={routes.routeName} onClick={() => { router.push(routes.routePath) }} color={"primary"} />
                        )
                    })}
                    <CButton sx={{ marginLeft: "1rem" }} buttonLabel={"Sign In"} variant="contained" onClick={() => { router.push("/sign-in") }} />
                    <CButton buttonLabel={"Sign Up"} variant="outlined" onClick={() => { router.push("/sign-up") }} sx={{ marginLeft: "10px" }} />
                </Container>
            </Box>
            <Grid container spacing={1} sx={{marginTop: "2rem", justifyContent: "center"}}>
                {props.blogCards?.map((card: any, idx: number) => {
                    return (
                        <Grid item lg={4} key={idx} style={ windowWidth > theme.breakpoints.values.sm ? {display: "flex", justifyContent: "center", maxWidth: "27%"} : {}} >
                            <CCard

                                hasImage={card.hasMedia}
                                cardTitle={card.title}
                                cardBody={card.description}
                                cardImage={{
                                    alt: `img-${idx + 1}`,
                                    height: "140",
                                    imgUrl: card.media
                                }}
                                hasActionButtonEndIcon={true}
                                actionButtonEndIcon={<ArrowRightAlt />}
                                cardActionButtonLabel={card.actionButtonLabel}
                                onActionButtonClick={() => { console.log("action button clicked..") }}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default HomePage;