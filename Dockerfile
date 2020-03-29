FROM gcr.io/distroless/nodejs

ADD . .

CMD ["index.js"]