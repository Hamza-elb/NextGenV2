const {generateTemplateFilesCommandLine} = require('generate-template-files');

const config = require('C:/Users/lenovo/Desktop/resources.json');
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

const createHeader=(nameModel)=>{
    const header=config.models.map((m)=>{
        if(m.name==nameModel){
            return ( m.params.map((p)=>{
                return`<TableCell>`+p.name+`</TableCell>`
            }).join(''));

        }

    })
    return header.join('');
}

const createGrid=(nameModel)=>{
    const grid=config.models.map((m)=>{
        if(m.name==nameModel){
            return ( m.params.map((p)=>{
                return` <Grid>
                                <TextField
                                    id="`+p.name+`"
                                    label="`+p.name+`"
                                    multiline
                                    maxRows={4}
                                    type="`+p.type+`"
                                />
                            </Grid>`
            }).join(''));

        }

    })
    return grid.join('');
}



const items = [
    {
        option: '',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/',
        }, dynamicReplacers: [
            { slot: '__name__', slotValue: config.name},
            { slot: '__items__', slotValue: createItems()},

        ],
        output: {
            path: 'C:/Users/lenovo/Desktop/__name__(noCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
            overwrite:true
        },
        onComplete: (results) => {
            console.log(`results`, results);
        }
    }];




generateTemplateFilesCommandLine(items);

const {generateTemplateFilesBatch} = require('generate-template-files');

const componentWithModel = (modelName) => {
    generateTemplateFilesBatch([
        {
            option: 'model',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './tools/templateModel/',
            },
            dynamicReplacers: [
                {slot: '__model__', slotValue: modelName},
                {slot: '__grid__', slotValue: createGrid(modelName)},

            ],
            output: {
                path: 'C:/Users/lenovo/Desktop/' + config.name + '/pages',

                pathAndFileNameDefaultCase: '(lowerCase)',
                overwrite: true
            }
        },
        {
            option: 'components',
            defaultCase: '(pascalCase))',
            entry: {
                folderPath: './tools/templateComponent/',
            },
            dynamicReplacers: [
                {slot: '__model__', slotValue: modelName},
                {slot: '__header__', slotValue: createHeader(modelName)},

            ],
            output: {
                path: 'C:/Users/lenovo/Desktop/' + config.name + '/components/',

                pathAndFileNameDefaultCase: '(pascalCase)',
                overwrite: true
            }
        }

    ]).catch(() => {
        console.log('Build Error');
    });
};


config.models.map((p) => {
    return (componentWithModel(p.name));
})
