
FROM  node:15

ADD  . /app

WORKDIR  /app
COPY  . .

RUN npm install -g

CMD   npx wdio wdio.conf.js