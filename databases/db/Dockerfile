FROM node:20-alpine
ARG infisical_token

# Install Infisical secret manager
RUN apk add --no-cache bash curl && curl -1sLf \
'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.alpine.sh' | bash \
&& apk add infisical

ENV INFISICAL_TOKEN=$infisical_token

WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "run", "migrate:prod"]
