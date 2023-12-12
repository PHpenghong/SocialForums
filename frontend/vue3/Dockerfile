FROM node:16.17.0
WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm && pnpm set registry http://172.16.39.136:4873/ && pnpm i --force
COPY ./ /app
RUN npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist/spa /app
COPY nginx.conf /etc/nginx/nginx.conf