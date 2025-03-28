# Chat SaaS
My internship project at [Icosnet](https://icosnet.com.dz/). You can read the documentation from [here](https://drive.google.com/file/d/1adG5pWe_yIKPHsgGYlukDx9v5KQuzze3/view?usp=drive_link).
- The server is built using Node 18 (typescript), Express, SocketIO and MongoDB.
- The demo third party app is built using Next 13.
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
Don't forget to fill the env variables and start a mongodb server.
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
