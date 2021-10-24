# Construye una nueva imagen: docker build -t VERSION .
FROM nginx:alpine
WORKDIR "/root/"
RUN apk add git
RUN apk add --update nodejs npm
RUN mkdir /root/escaparate
RUN git clone https://github.com/eduardogarre/frontend_lenguaje /root/escaparate
WORKDIR "/root/escaparate"
RUN npm i react-scripts
RUN npm run build
RUN mv ~/escaparate/build/* /usr/share/nginx/html/
RUN npm uninstall react-scripts
WORKDIR "/root/"
RUN rm -rf /root/escaparate
RUN apk del git nodejs npm
