FROM node:20-alpine
ARG infisical_token

# Install Infisical secret manager
RUN apk add --no-cache bash curl && curl -1sLf \
'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.alpine.sh' | bash \
&& apk add infisical

ENV INFISICAL_TOKEN=$infisical_token

WORKDIR /app
COPY . .

# Create node dependency links
RUN node create-links.js create
WORKDIR /app/databases/db

CMD ["npm", "run", "migrate:prod"]
