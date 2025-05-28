FROM node:current-slim

RUN useradd -m yuri

WORKDIR /app

COPY app.js .

USER yuri

EXPOSE 3000

CMD ["node", "app.js"]