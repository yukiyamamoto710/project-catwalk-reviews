FROM postgres:alpine

RUN mkdir -p /src/postgres

COPY ./server/database/postgresql.schema.sql /src/postgres