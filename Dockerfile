FROM node:14.4-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
# COPY /dist/iniblaWeb /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/iniblaWeb /usr/share/nginx/html