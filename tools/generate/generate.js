const {generateTemplateFilesCommandLine} = require("generate-template-files");
generateTemplateFilesCommandLine(
    [
        {
            option: 'create next app',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './tools/generate/create',
            }
            ,
            stringReplacers: ['__chemin__'],

            output: {
                path:'./tools/generate',
                pathAndFileNameDefaultCase: '(pathCase)',
                overwrite:true
            },

        }

    ]
)