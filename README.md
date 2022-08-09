This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

D'abord, Dans le terminal, tapez:

```bash

    $ npm run generate 
    
=> On répond sur les questions : 
    -  What do you want to generate? ... (Tapez enter)
    -  Donner le chemin du fichier config : » 
    -  Donner le chemin du projet où il sera créé : »
    -  Output path: » ./tools/generate ... (Tapez enter)
    
    $ npm run create

```

## Config exemple

```json
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
```