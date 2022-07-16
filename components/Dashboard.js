import * as React from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import Head from "next/head";

function DashboardContent() {


    return (
        <>
        <Head>
            <title>Dashboard</title>
        </Head>

        <ThemeProvider >
            <h1> Dashboard</h1>
        </ThemeProvider>
        </>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}