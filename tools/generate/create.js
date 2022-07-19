const { generateTemplateFilesCommandLine } = require('generate-template-files');

const config = require('__chemin__');

generateTemplateFilesCommandLine([
    {
        option: '',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/',
        }, dynamicReplacers: [
            { slot: '__model__', slotValue: config.models[0].name},
            {slot:'__store__',slotValue:config.models[1].name
            }
        ],
        output: {
            path: 'C:/Users/lenovo/Desktop/__store__(kebabCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        }
    }]
);
