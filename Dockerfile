FROM nginx:1.19.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/iniblaWeb /usr/share/nginx/html