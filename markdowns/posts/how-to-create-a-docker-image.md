---
title: How to create a Docker image?
subtitle: Create a Docker image by yourself.
createdBy: Jimmy Lin
createdAt: 2021-08-01 13:44
---

# How to create a docker image?

1. `cd` to a directory you like.
2. Create a file `Dockerfile` or what you like. Say, it is a image about web, you can name it `web.dockerfile`.
3. A `Dockerfile` is a blueprint about a docker image. Now we need to config it, describing what we want the image to be. To learn more about how to config a `Dockerfile`, you may want to see:

   [How to config a Dockerfile?](https://www.notion.so/How-to-config-a-Dockerfile-12a4156af22c49a9bd86f9562eafedc7)

4. Build the image with the finished `Dockerfile` by these commands:

   ```bash
   docker build .
   ```

   If you use the custom file name, like `web.dockerfile`:

   ```bash
   docker build -f web.dockerfile .
   ```

5. If everything is fine, your image would be created. You may want to use these commands to check it:

   ```bash
   docker image ls
   ```
