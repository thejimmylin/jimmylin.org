---
title: Install Docker engine on a Ubuntu 20.04
subtitle: You need docker engine to build docker image, run image as a container and so on.
createdBy: Jimmy Lin
createdAt: 2021-08-15 21:31
---

# Install Docker engine on a Ubuntu 20.04

You need docker engine to build docker image, run image as a container and so on.

Ref: [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)

1. Remove the old:

   ```bash
   sudo apt-get remove docker docker-engine docker.io containerd runc
   ```

   It’s OK if apt-get reports that none of these packages are installed.

2. Install some lib:

   ```bash
   sudo apt-get update
   sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
   ```

3. Add Docker’s official GPG key:

   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

4. Setup stable repository:

   ```bash
   echo \
     "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

   sudo apt-get update
   ```

5. Install docker things:

   ```bash
   sudo apt-get -y install docker-ce docker-ce-cli containerd.io
   ```

6. Now, you should be able to:

   ```bash
   sudo docker login
   ```

Note:

On a Ubuntu you need to install `Docker` and `docker-compose` repectively.

To Install `docker-compose`, just:

1. Download from github with `curl`.

   ```docker
   sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. Make it executable.

   ```docker
   sudo chmod +x /usr/local/bin/docker-compose
   ```
