FROM node:14 as node
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build --prod

FROM nginx:1.21
COPY --from=node /app/dist/crypto /usr/share/nginx/html

EXPOSE 80

#construir imagem: docker build -t crypto:v1 .
#executar imagem: docker run -d --name crypto1 -p 8099:80 crypto:v1
#parar de executar: docker rm -f crypto1