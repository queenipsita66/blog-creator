import { Box, Container, Typography } from "@mui/material"
import Image from "next/image";
import CCopyright from "../atoms/CCopyright";
import GlobalHeaderLayout from "./GlobalHeaderLayout";

const AboutUsPage = (props: any) => {
    return (
        <GlobalHeaderLayout>
            <Container maxWidth={"lg"} sx={{marginBottom: "8rem"}}>
                <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "4rem", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <Box sx={{marginRight: "2rem"}}>
                        <Image src={props.aboutUsData[0]?.aboutUsMedia} alt={"about-us"} width={400} height={400}/>
                    </Box>
                    <Box sx={{ borderRadius: "50%", height: "500px", width: "500px", backgroundColor: "#EDE7F6", position: "relative" }}>
                        <Typography variant="h5" component="div" mt={2} pl={2} mb={2} sx={{position: "absolute",top: "63px", left: "130px",color: "#171717"}}>
                            {props.aboutUsData[0]?.title}
                        </Typography>
                        <Box sx={{ height: "450px", width: "650px", padding:"1rem", backgroundColor: "#B39DDB", opacity: "0.5", position: "absolute", top: "115px", left: "115px" }}>
                            <Typography variant="body2" component="div" mt={2} pl={2} mb={2}>{props.aboutUsData[0]?.description}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <CCopyright websiteName={"Blog Creator"}/>
        </GlobalHeaderLayout>
    )
}

export default AboutUsPage;