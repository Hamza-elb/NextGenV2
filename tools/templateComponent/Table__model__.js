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
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useMutation, useQuery, useQueryClient} from "react-query";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import {useForm} from "react-hook-form";
import {delete__model__(pascalCase), get__model__(pascalCase), update__model__(pascalCase)} from "../config/helper__model__(pascalCase).js";
import styled from "../styles/Home.module.css";


function preventDefault(event) {
    event.preventDefault();
}

export default function Table__model__(pascalCase)()
{

    const [open, setOpen] = React.useState(false);
    const [allData, setAllData] = React.useState('');

    async function handleOpen(allData) {
        setOpen(true);
        setAllData(allData);
    }

    async function handleClose() {
        setOpen(false)
        __reset__(noCase)
    }

    const {status, data} = useQuery('__model__(lowerCase)s', get__model__(pascalCase))
    const {register, handleSubmit, resetField} = useForm();
    const queryClient = useQueryClient();

    const deleteMutation = useMutation(delete__model__(pascalCase), {
        onSuccess: () =>
            queryClient.invalidateQueries('__model__(lowerCase)s')

    })

    const editMutation = useMutation((d,) => update__model__(pascalCase)(d.id, d), {
        onSuccess: () =>
            queryClient.invalidateQueries('__model__(lowerCase)s')

    });

    async function handleClick(e) {
        if (e) {
            await deleteMutation.mutate(e);
            console.log("Deleted successfully");
        }
    }

    const onSubmit = async (da) => {
        await editMutation.mutate(da, {onSuccess: () => queryClient.invalidateQueries()})
        await handleClose();
    }

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
                                {status === 'success'  && data?.map((p) => {
                                    return (
                                        <TableBody key={p.id}>
                                            __body__(noCase)
                                            <TableCell>
                                                <Button onClick={() => handleOpen(p)}>
                                                    <EditIcon color="primary"/>
                                                </Button>
                                                <Button onClick={() => handleClick(p.id)}>
                                                    <DeleteIcon sx={{color: "red", ml: 1}}/>
                                                </Button>
                                            </TableCell>
                                        </TableBody>
                                    )
                                })}
                            </Table>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Container maxWidth="lg" className={styled.container}>
                                    <Grid className={styled.grid}>
                                        <Paper elevation={12} sx={{
                                            '& .MuiTextField-root': {m: 1, width: '50ch'},
                                        }}
                                               noValidate
                                               autoComplete="off">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <input
                                                    id="id"
                                                    label="id"
                                                    multiline
                                                    maxRows={4}
                                                    type="hidden"
                                                    defaultValue={allData.id}
                                                    {...register('id')}
                                                />
                                                __form__(noCase)
                                                <Grid>
                                                    <Button onClick={handleClose} variant="outlined"
                                                            startIcon={<ArrowBackIcon/>}
                                                            sx={{float: "left", m: 1}}>
                                                        Back
                                                    </Button>
                                                    <Button type="submit" variant="contained"
                                                            endIcon={<SendIcon/>} sx={{float: "right", m: 1}}>
                                                        Update
                                                    </Button>
                                                </Grid>
                                            </form>
                                        </Paper>
                                    </Grid>
                                </Container>
                            </Modal>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}