import * as React from 'react';
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return {id, date, name, shipTo, paymentMethod, amount};
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Elvis Presley',
        'Tupelo, MS',
        'VISA ⠀•••• 3719',
        312.44,
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Paul McCartney',
        'London, UK',
        'VISA ⠀•••• 2574',
        866.99,
    ),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(
        3,
        '16 Mar, 2019',
        'Michael Jackson',
        'Gary, IN',
        'AMEX ⠀•••• 2000',
        654.39,
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Bruce Springsteen',
        'Long Branch, NJ',
        'VISA ⠀•••• 5919',
        212.79,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Table__model__(pascalCase)(){
    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                <Link href="/__model__(lowerCase)/add">
                    <Button sx={{display: "flex", float: "right"}}
                            variant="contained"

                            endIcon={<AddIcon/>}>
                        Add __model__(pascalCase)
                    </Button>
                </Link>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper sx={{p: 3, display: 'flex', flexDirection: 'column'}}>

                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        __header__
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.shipTo}</TableCell>
                                            <TableCell>{row.paymentMethod}</TableCell>
                                            <TableCell>{`$${row.amount}`}</TableCell>
                                            <TableCell>
                                                <Button>
                                                    <EditIcon color="primary"/>
                                                </Button>
                                                <Button>
                                                    <DeleteIcon sx={{color: "red", ml: 1}}/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>


                        </Paper>
                    </Grid>
                </Grid>

            </Container>

        </React.Fragment>
    );
}