import * as React from 'react';
import {  ThemeProvider } from '@mui/material/styles';







function DashboardContent() {


    return (
        <ThemeProvider >
            <h1> Dashboard</h1>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}