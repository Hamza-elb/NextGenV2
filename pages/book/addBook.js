import * as React from 'react';
import Container from "@mui/material/Container";
import {TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import Head from "next/head";


export default function AddBook() {

    return (
        <>
            <Head>
                <title>Add Book</title>
            </Head>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <form>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 5,
                            ml: "auto",
                        mr: "auto"
                            ,p:3
                    },
                    }}

                >

                    <Paper elevation={12}   sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                           noValidate
                           autoComplete="off" >
                        <div >
                            <TextField
                                id="title"
                                label="Title"
                                multiline
                                maxRows={4}
                                type="string"
                            />
                        </div>
                        <div>
                            <TextField
                                id="description"
                                label="Description"
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div>
                             <TextField
                                id="category"
                                label="Category"
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div>
                             <TextField
                                id="author"
                                label="Author"
                                multiline
                                maxRows={4}
                            />
                        </div><div>
                             <TextField
                                id="reviews"
                                label="Reviews"
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div >
                            <Link href="/book">

                        <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{m:1}} >
                            Back
                        </Button>
                        </Link>

                        <Button variant="contained" endIcon={<SendIcon />} sx={{float:"right",m:1}}>
                            Send
                        </Button>
                        </div>
                    </Paper>

                </Box>
                </form>
            </Container>

        </>
    );
}