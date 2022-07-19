const { generateTemplateFilesCommandLine } = require('generate-template-files');

const config = require('ove');

generateTemplateFilesCommandLine([
    {
        option: '',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/',
        }, dynamicReplacers: [
            { slot: '__name__', slotValue: config.name},
            {slot:'__store__',slotValue:config.models[1].name
            }
        ],
        output: {
            path: 'C:/Users/lenovo/Desktop/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        }
    }]
);
