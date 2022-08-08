This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

D'abord, Dans ./tools/generate/create/create.js :

output: {
path: 'C:/Users/Administrateur/Desktop/__name__(noCase)',
pathAndFileNameDefaultCase: '(pascalCase)', overwrite: true
},

=> Mettez le chemin ou le projet sera créé dans tous les outputs.

Après, dans le terminal, tapez :

    $ npm run generate __chemin__="(chemin de fichier json)"

    $ npm run create

## Config exemple

{
"name": "NextGen",
"models": [
{
"name": "user",
"params": [
{
"name": "id",
"type": "number"
},
{
"name": "title",
"type": "string"
},
{
"name": "description",
"type": "string"
},
{
"name": "category",
"type": "string"
},
{
"name": "author",
"type": "string"
},
{
"name": "reviews",
"type": "string"
}
],
"api": {
"get": "/book",
"delete": "/book/@id",
"put": "/book",
"post": "/book/@id"
}
},
{
"name": "admin",
"params": [
{
"name": "id",
"type": "number"
},
{
"name": "title",
"type": "string"
},
{
"name": "slug",
"type": "string"
}
],
"api": {
"get": "/category",
"delete": "/category/@id",
"put": "/category",
"post": "/category/@id"
}
},
{
"name": "prof",
"params": [
{
"name": "id",
"type": "number"
},
{
"name": "title",
"type": "string"
},
{
"name": "name",
"type": "string"
},
{
"name": "phone",
"type": "string"
}
],
"api": {
"get": "/category",
"delete": "/category/@id",
"put": "/category",
"post": "/category/@id"
}
}
]
}