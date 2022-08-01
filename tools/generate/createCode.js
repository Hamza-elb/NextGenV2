

const createItems=(config)=>{

    const item = config.models.map((m) => {
        return createItem(m.name);
    })


    return item.join('');
}
const createItem = (m) => {
    return `<Link href="/` + m + `">
        <ListItemButton>
            <ListItemIcon>
                <CategoryIcon/>
            </ListItemIcon>
            <ListItemText primary="` + m + `"/>
        </ListItemButton>
    </Link>`

}
const createHeader = (config,nameModel) => {
    const header = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                return `<TableCell>` + p.name + `</TableCell>`
            }).join(''));

        }

    })
    return header.join('');
}

const createGrid = (config,nameModel) => {
    const grid = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                if (p.name != 'id')
                    return `<Grid>
                                <TextField
                                    id="` + p.name + `"
                                    label="` + p.name + `"
                                    multiline
                                    maxRows={4}
                                    type="` + p.type + `"
                                    {...register('` + p.name + `')}
                                />
                            </Grid>`
            }).join(''));

        }

    })
    return grid.join('');
}

const createReset = (config,nameModel) => {
    const res = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                if (p.name != 'id')
                    return `resetField('` + p.name + `');`
            }).join(''));
        }

    })
    return res.join('');
}

const createBody = (config,nameModel) => {
    const body = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                return `<TableCell> {p.`+p.name+`}</TableCell>`
            }).join(''));

        }

    })
    return body.join('');


}

const createForm = (config,nameModel) => {
    const grid = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                if (p.name != 'id')
                    return `<Grid>
                                <TextField
                                    id="` + p.name + `"
                                    label="` + p.name + `"
                                    multiline
                                    maxRows={4}
                                    type="` + p.type + `"
                                    defaultValue={allData.`+p.name+`}
                                    {...register('` + p.name + `')}
                                />
                            </Grid>`
            }).join(''));

        }

    })
    return grid.join('');
}
exports.createItems=createItems;
exports.createGrid=createGrid;
exports.createReset=createReset;
exports.createHeader=createHeader;
exports.createBody=createBody;
exports.createForm=createForm;