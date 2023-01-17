# change with the Node.js version of your choice
ARG NODE_VERSION="16"

# change with the Linux Alpine version of your choice
ARG ALPINE_VERSION="3.17"

#### BUILDER ####
FROM --platform=linux/amd64 node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS builder

WORKDIR /app

COPY package.json yarn.* .
RUN yarn --production

COPY . .
ARG REACT_APP_GOOGLE_MAPS_API_KEY
ARG REACT_APP_API_URL
ARG REACT_APP_CMS_API_URL
ARG REACT_APP_CMS_API_KEY
ENV REACT_APP_GOOGLE_MAPS_API_KEY=${REACT_APP_GOOGLE_MAPS_API_KEY}
ENV REACT_APP_API_URL=${REACT_APP_API_URL}
ENV REACT_APP_CMS_API_URL=${REACT_APP_CMS_API_URL}
ENV REACT_APP_CMS_API_KEY=${REACT_APP_CMS_API_KEY}
RUN yarn build

#### RUNNER ####
FROM --platform=linux/amd64 node:${NODE_VERSION}-alpine${ALPINE_VERSION}

RUN npm install pm2 -g

WORKDIR /serve

COPY --from=builder /app/build .
COPY ecosystem.config.js .

USER node
EXPOSE 3001

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
