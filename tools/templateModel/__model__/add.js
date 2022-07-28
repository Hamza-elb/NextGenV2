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
import {useMutation} from "react-query";
import {add__model__(pascalCase)} from "../../config/helper__model__(pascalCase)";
import  {useForm} from "react-hook-form";



export default function Add() {

    const { register, handleSubmit, resetField } = useForm();
    const addMutation = useMutation(add__model__(pascalCase));

    const onSubmit = async (data) => {
        if(data){
            await addMutation.mutate(data);
            console.log("Data Created Successfully");
            __reset__(noCase)
        }
    }



    return (
        <>
            <Head>
                <title>Add __model__(pascalCase)</title>
            </Head>
            <Container maxWidth="lg" className={styled.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid className={styled.grid}>

                        <Paper elevation={12} sx={{
                            '& .MuiTextField-root': {m: 1, width: '50ch'},
                        }}
                               noValidate
                               autoComplete="off">
                            __grid__(noCase)
                            <Grid>
                                <Link href="/__model__(lowerCase)">

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