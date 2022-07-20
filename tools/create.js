const { generateTemplateFilesCommandLine } = require('generate-template-files');

const config = require('C:/Users/lenovo/Desktop/resources.json');


const items=[
    {
        option: '',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/',
        }, dynamicReplacers: [
            { slot: '__name__', slotValue: config.name},

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

generateTemplateFilesCommandLine(items
);
const { generateTemplateFilesBatch } = require('generate-template-files');

const componentWithInterface = (modelName) => {
    generateTemplateFilesBatch([
        {
            option: 'model',
            defaultCase: '(noCase))',
            entry: {
                folderPath: './tools/templateModel',
            },
            dynamicReplacers: [
                { slot: '__model__', slotValue: modelName },

            ],
            output: {
                path: 'C:/Users/lenovo/Desktop/'+config.name+'/pages/',
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