import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GlobalHeaderLayout from "./GlobalHeaderLayout"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CCopyright from "../atoms/CCopyright";
import CButton from "../atoms/CButton";
import { registerUser } from "../../backend/userDetailsAPI";
import { useRouter } from "next/router";

const SignUpPage = (props: any) => {

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = {
            email: data.get('email')?.toString(),
            password: data.get('password')?.toString(),
            firstname: data.get('firstName')?.toString(),
            lastname: data.get('lastName')?.toString()
        }
        const res = await registerUser(body);
        if(res.status_code == "200") {
            router.push("/sign-in");
        }
    };

    return (
        <GlobalHeaderLayout>
            <Grid container spacing={0} sx={{height: "calc(100vh - 48px)"}}>
                <Grid 
                    item 
                    xs={12} 
                    md={7} 
                    sx={{
                        backgroundImage: `url(/static/signUp.avif)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                    }}
                />
                <Grid item xs={12} md={5} px={1.5}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
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
                                        control={<Checkbox value="termsAndConditionsAgree" color="primary" />}
                                        label="I agree to the terms and conditions"
                                    />
                                </Grid>
                            </Grid>
                            <CButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                buttonLabel={"Create Account"}
                            />
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/sign-in">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <CCopyright sx={{ mt: 5 }} websiteName={"Blog Creator"}/>
                </Grid>
            </Grid>
        </GlobalHeaderLayout>
    )
}

export default SignUpPage;