const { generateTemplateFilesCommandLine } = require('generate-template-files');

const config = require('__chemin__');

generateTemplateFilesCommandLine([
    {
        option: '',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/',
        }, dynamicReplacers: [
            { slot: '__name__', slotValue: config.name},
            {slot:'__models__',slotValue:config.models
            }
        ],
        output: {
            path: ['C:/Users/lenovo/Desktop/__name__(kebabCase)',
                'C:/Users/lenovo/Desktop/__name__/pages/__name__(kebabCase)'

            ],
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        }
    }]
);
