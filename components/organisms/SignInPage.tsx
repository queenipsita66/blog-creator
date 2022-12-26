import { Avatar, Box, Checkbox, Container, FormControlLabel, Grid, Typography, Link, TextField } from "@mui/material";
import GlobalHeaderLayout from "./GlobalHeaderLayout";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CButton from "../atoms/CButton";
import CCopyright from "../atoms/CCopyright";
import { loginUser } from "../../backend/userDetailsAPI";
import { useRouter } from "next/router";

const SignInPage = (props: any) => {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = {
            email: data.get('email')?.toString(),
            password: data.get('password')?.toString(),
        }
        const res = await fetch('/api/login', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resNew = res.json();
        if(resNew?.status_code == "200") {
            router.push("/dashboard");
        }
    };

    return (
        <GlobalHeaderLayout>
            <Container maxWidth={"xs"}>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="rememberMe" color="primary" />}
                                    label="Remember me"
                                />
                            </Grid>
                        </Grid>
                        <CButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            buttonLabel={"Log In"}
                        />
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Link href="/forgot-password">
                                    {"Forgot Password"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign-up">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <CCopyright sx={{ mt: 5 }} websiteName={"Blog Creator"}/>
        </GlobalHeaderLayout>
    )
}

export default SignInPage;