import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CButton from "../atoms/CButton";
import Link from "next/link";
import { useRouter } from "next/router";

const GlobalHeaderLayout = (props: any) => {
    const router = useRouter();

    const navigateTo = (url: string) => {
        router.push(url);
    }

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar variant="dense">
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="h4" sx={{ flexGrow: 1 }}>
                            <Link href={"/"}>Blog Creator</Link>
                        </Typography>
                        <CButton variant="outlined" buttonLabel={"Sign in"} color="inherit" onClick={() => navigateTo("/sign-in")}/>
                        <CButton sx={{marginLeft: "1rem"}} variant="outlined" buttonLabel={"Sign up"} color="inherit" onClick={() => navigateTo("/sign-up")}/>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                {props.children}
            </Box>
        </Box>
    )
}

export default GlobalHeaderLayout;