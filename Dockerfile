FROM node:18.16 as fronted
WORKDIR /browser
COPY ./browser/user-app .
RUN npm install 
RUN npm run build

FROM alpine:3.14
WORKDIR /app
COPY ./backend /app
RUN apk add python3-dev &&\
    apk add gcc &&\
    apk add libc-dev &&\
    apk add py3-pip &&\
    apk add libffi-dev &&\
    pip3 install --upgrade pip &&\
    pip3 install psycopg2-binary &&\
    pip3 install -r requirements.txt
COPY --from=fronted /browser/dist /app/static
ENTRYPOINT [ "python3","main.py" ]