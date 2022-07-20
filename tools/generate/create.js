const { generateTemplateFilesCommandLine } = require('generate-template-files');

const config = require('__chemin__');

const items = [
    {
        option: '',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/',
        }, dynamicReplacers: [
            { slot: '__name__', slotValue: config.name},

        ],
        output: {
            path: 'C:/Users/Administrateur/Desktop/__name__(noCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
            overwrite:true
        },
        onComplete: (results) => {
            console.log(`results`, results);
        }
    }];

generateTemplateFilesCommandLine(items);

const { generateTemplateFilesBatch } = require('generate-template-files');

const componentWithInterface = (modelName) => {
    generateTemplateFilesBatch([
        {
            option: 'model',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './tools/templateModel',
            },
            dynamicReplacers: [
                { slot: '__model__', slotValue: modelName },

            ],
            output: {
                path: 'C:/Users/Administrateur/Desktop/'+config.name+'/pages/',
                pathAndFileNameDefaultCase: '(pascalCase)',
                overwrite:true
            },
        }
    ]).catch(() => {
        console.log('Build Error');
    });
};
config.models.map((p)=>{
    return componentWithInterface(p.name);
})

