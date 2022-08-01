const {createItems}=require('./createCode.js')

const {generateTemplateFilesCommandLine} = require('generate-template-files');

const config = require('C:/Users/lenovo/Desktop/resources.json');

const {createGrid,createReset,createHeader,createBody,createForm}=require('./createCode')





const items = [{
    option: '', defaultCase: '(pascalCase)', entry: {
        folderPath: './tools/templateProject/',
    }, dynamicReplacers: [{slot: '__name__', slotValue: config.name}, {slot: '__items__', slotValue:createItems(config) },

    ], output: {
        path: 'C:/Users/lenovo/Desktop/__name__(noCase)',
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
            slotValue: createGrid(config,modelName)
        },
            {slot: '__reset__', slotValue: createReset(config,modelName)}

        ],
        output: {
            path: 'C:/Users/lenovo/Desktop/' + config.name + '/pages',

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
            slotValue: createHeader(config,modelName)
        },
            {slot: '__reset__', slotValue: createReset(config,modelName)},
            {slot: '__body__', slotValue: createBody(config,modelName)},
            {slot: '__form__', slotValue: createForm(config,modelName)}

        ],
        output: {
            path: 'C:/Users/lenovo/Desktop/' + config.name + '/components/',

            pathAndFileNameDefaultCase: '(pascalCase)', overwrite: true
        }
    }, {
        option: 'config', defaultCase: '(pascalCase))', entry: {
            folderPath: './tools/templateConfig/',
        }, dynamicReplacers: [{slot: '__model__', slotValue: modelName},


        ], output: {
            path: 'C:/Users/lenovo/Desktop/' + config.name + '/config/',

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
