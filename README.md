## Get started

```sh
fnm/nvm use
npm run i

# start the api
npm run apollo:schema # generates the schema-file
npm run apollo:generate # generates types based on the graphql-queries
npm run start
```

## Environment Variables

Add the following environment-variables to an `.env`-file in the root of the project.

e.g.

```
REACT_APP_API_ENDPOINT=http://localhost:4000
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```
