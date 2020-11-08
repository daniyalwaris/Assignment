
FROM  node:15

WORKDIR  /src/app
COPY  . .

CMD   npx wdio wdio.conf.js