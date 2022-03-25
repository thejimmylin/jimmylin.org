---
title: Docker image with Node.js and Python
subtitle: Sometimes you want to customize your own base image. This article tells you how to build a image including `Python3.8`, `Node.js 14.x`based on a `Ubuntu 20.04` official base image.
createdBy: Jimmy Lin
createdAt: 2021-08-09 21:32
---

# Docker image with Node.js and Python

Sometimes you want to customize your own base image. This article tells you how to build a image including `Python3.8`, `Node.js 14.x` based on a `Ubuntu 20.04` official base image.

1. create a `web.dockerfile`

   ```
   # Use Ubuntu 20.04 as the base image we build on.
   FROM ubuntu:20.04

   # Use `/app` as the directory we work in. This is not a special path though,
   # you just don't want everything created in the root ('/') directory.
   WORKDIR /app

   # You want to update `apt` first to install the latest packages with it.
   RUN apt update

   # Without doing the `curl` tasks before, you can only install Node.js v10.19.0 with `apt`.
   # https://github.com/nodesource/distributions#installation-instructions
   RUN \
       apt install -y curl && \
       curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
       apt install -y nodejs

   # Install Python3 and set the alias things like:
   #   1. `python` => `/usr/bin/python3.8`
   #   2. `pip` => `/usr/bin/pip3`.
   # This will just make the life easiser.
   RUN \
       apt install -y python3.8 && \
       apt install -y python3-pip && \
       update-alternatives --install /usr/bin/python python /usr/bin/python3.8 1 && \
       update-alternatives --install /usr/bin/pip pip /usr/bin/pip3 1

   # Install all the packages, with package management files.
   COPY requirements.txt package.json package-lock.json ./
   RUN \
       pip install -r requirements.txt && \
       npm ci

   # Finally, Copy all the other files.
   COPY . ./
   ```

   This give you a Python + Node.js base container

2. You can use it like this, create a docker-compose-yml

   ```
   version: "3.9"
   services:
     db:
       image: postgres
       volumes:
         - ./data/db:/var/lib/postgresql/data
       environment:
         - POSTGRES_DB=postgres
         - POSTGRES_USER=postgres
         - POSTGRES_PASSWORD=postgres
     web:
       build:
         context: .
         dockerfile: ./web.dockerfile
       environment:
         - HOST=0.0.0.0
       command: bash -c "npm start"
       volumes:
         - .:/app
       ports:
         - "8000:8000"
         - "3000:3000"
       depends_on:
         - db
   ```

   Now run `docker-compose up`, and everything should work as expected.
