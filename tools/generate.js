const {generateTemplateFilesCommandLine} = require("generate-template-files");
generateTemplateFilesCommandLine(
    [
        {
            option: 'create next app',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './tools/generate/',
            }
            ,
            stringReplacers: ['__chemin__'],

            output: {
                path:'./tools/',
                pathAndFileNameDefaultCase: '(pathCase)',
                overwrite:true
            },

        }

    ]
)