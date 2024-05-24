FROM node:20-alpine
ARG db_url

WORKDIR /app
COPY . .
RUN npm install

ENV DB_URL=$db_url