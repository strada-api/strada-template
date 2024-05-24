FROM node:20-alpine

RUN echo "env vars: ECR_REGISTRY-$ECR_REGISTRY INFISICAL_TOKEN-$INFISICAL_TOKEN"

WORKDIR /app
COPY . .


# Inject Infisical secrets
RUN apk add --no-cache bash curl && curl -1sLf \
'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.alpine.sh' | bash \
&& apk add infisical
RUN infisical run --env=prod --domain=https://strada-temp-1-service-3887-51be8161-ruo3m20i.onporter.run/api --path=/ --projectId=99f10251-80f5-40c8-b3ca-2e8ccc750300 echo "Injected secrets"

RUN npm install