import * as React from 'react';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import styled from "../../styles/Home.module.css"


export default function AddCategory() {

    return (
        <>
            <Head>
                <title>Add Category</title>
            </Head>
            <Container maxWidth="lg" className={styled.container}>
                <form>
                    <Grid className={styled.grid}>

                        <Paper elevation={12} sx={{
                            '& .MuiTextField-root': {m: 1, width: '50ch'},
                        }}
                               noValidate
                               autoComplete="off">
                            <Grid>
                                <TextField
                                    id="title"
                                    label="Title"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    id="slug"
                                    label="Slug"
                                    multiline
                                    maxRows={4}
                                    type="string"
                                />
                            </Grid>

                            <Grid>
                                <Link href="/category">

                                    <Button variant="outlined" startIcon={<ArrowBackIcon/>} sx={{m: 1}}>
                                        Back
                                    </Button>
                                </Link>

                                <Button variant="contained" endIcon={<SendIcon/>} sx={{float: "right", m: 1}}>
                                    Send
                                </Button>
                            </Grid>
                        </Paper>

                    </Grid>
                </form>
            </Container>

        </>
    );
}