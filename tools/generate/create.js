const {generateTemplateFilesCommandLine} = require('generate-template-files');

const config = require('__chemin__');
const createItems = () => {

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

const createHeader = (nameModel) => {
    const header = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                return `<TableCell>` + p.name + `</TableCell>`
            }).join(''));

        }

    })
    return header.join('');
}

const createGrid = (nameModel) => {
    const grid = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                if(p.name != 'id')
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

const createReset = (nameModel) => {
    const res = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                if(p.name != 'id')
                return`
                    resetField(' ` + p.name + ` ');
                `
            }).join(''));
        }

    })
        return  res.join('');
}

const createBody = (nameModel) => {
    const body = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                return `<TableCell> {p.` + p.name + ` }</TableCell>`
            }).join(''));

        }

    })
    return body.join('');


}

const createForm = (nameModel) => {
    const grid = config.models.map((m) => {
        if (m.name == nameModel) {
            return (m.params.map((p) => {
                if(p.name != 'id')
                    return `<Grid>
                                <TextField
                                    id="` + p.name + `"
                                    label="` + p.name + `"
                                    multiline
                                    maxRows={4}
                                    type="` + p.type + `"
                                    defaultValue={allData. ` + p.name + `}
                                    {...register('` + p.name + `')}
                                />
                            </Grid>`
            }).join(''));

        }

    })
    return grid.join('');
}



const items = [{
    option: '', defaultCase: '(pascalCase)', entry: {
        folderPath: './tools/templates/',
    }, dynamicReplacers: [{slot: '__name__', slotValue: config.name}, {slot: '__items__', slotValue: createItems()},

    ], output: {
        path: 'C:/Users/Administrateur/Desktop/__name__(noCase)',
        pathAndFileNameDefaultCase: '(pascalCase)',
        overwrite: true
    }, onComplete: (results) => {
        console.log(`results`, results);
    }
}];


generateTemplateFilesCommandLine(items);

const {generateTemplateFilesBatch} = require('generate-template-files');

const componentWithModel = (modelName) => {
    generateTemplateFilesBatch([{
        option: 'model',
        defaultCase: '(noCase)',
        entry: {
            folderPath: './tools/templateModel/',
        },
        dynamicReplacers: [{slot: '__model__', slotValue: modelName}, {
            slot: '__grid__',
            slotValue: createGrid(modelName)
        },
            {slot: '__reset__', slotValue: createReset(modelName)}

        ],
        output: {
            path: 'C:/Users/Administrateur/Desktop/' + config.name + '/pages',

            pathAndFileNameDefaultCase: '(lowerCase)', overwrite: true
        }
    }, {
        option: 'components',
        defaultCase: '(pascalCase))',
        entry: {
            folderPath: './tools/templateComponent/',
        },
        dynamicReplacers: [{slot: '__model__', slotValue: modelName}, {
            slot: '__header__',
            slotValue: createHeader(modelName)
        },
            {slot: '__reset__', slotValue: createReset(modelName)},
            {slot: '__body__', slotValue: createBody(modelName)},
            {slot: '__form__', slotValue: createForm(modelName)}

        ],
        output: {
            path: 'C:/Users/Administrateur/Desktop/' + config.name + '/components/',

            pathAndFileNameDefaultCase: '(pascalCase)', overwrite: true
        }
    }, {
        option: 'config', defaultCase: '(pascalCase))', entry: {
            folderPath: './tools/templateConfig/',
        }, dynamicReplacers: [{slot: '__model__', slotValue: modelName},


        ], output: {
            path: 'C:/Users/Administrateur/Desktop/' + config.name + '/config/',

            pathAndFileNameDefaultCase: '(pascalCase)', overwrite: true
        }
    }

    ]).catch(() => {
        console.log('Build Error');
    });
};


config.models.map((p) => {
    return (componentWithModel(p.name));
})
