# Chat SaaS

## Getting started

### Server
#### Via Docker
Don't forget to fill docker compose db credentials, and server container env. 
- Seeders will run and a dev server will start will run if NODE_ENV=developement.
- Else the prod server will start.
```
docker compose up
```
#### Without Docker
Don't forget to fill the env variables.
```
cd server
cp .env.local.example .env
npm / yarn / pnpm install
npm / yarn / pnpm dev
```
### Demo App
Don't forget to put the right env variables.
```
cd demo-app
cp .env.local.example .env.local
npm / yarn / pnpm install
npm / yarn / pnpm dev
```
