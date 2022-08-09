const {generateTemplateFiles} = require("generate-template-files");
generateTemplateFiles(
    [
        {
            option: 'create next app',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './tools/generate/create',
            }
            ,
            stringReplacers: [
                {question : 'Donner le chemin du fichier config :', slot:'__chemin__'},
                {question : 'Donner le chemin du projet où il sera créé :', slot:'__cheminProjet__'}
            ],

            output: {
                path:'./tools/generate',
                pathAndFileNameDefaultCase: '(pathCase)',
                overwrite:true
            },

        }

    ]
)