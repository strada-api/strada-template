FROM node:20-alpine
ARG infisical_token

# Install Infisical secret manager
RUN apk add --no-cache bash curl && curl -1sLf \
'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.alpine.sh' | bash \
&& apk add infisical

WORKDIR /app
COPY . .

ENV INFISICAL_TOKEN=$infisical_token

EXPOSE 3005
CMD ["npm", "run", "start"]