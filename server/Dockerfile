FROM node:18.17.1-alpine3.17

WORKDIR /opt/chat-server

COPY "entrypoint.dev.sh" .
COPY "entrypoint.prod.sh" .
RUN chmod 777 entrypoint.dev.sh
RUN chmod 777 entrypoint.prod.sh
RUN ls -l entrypoint.dev.sh entrypoint.prod.sh  

COPY "package.json" .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

USER node   
