# First step
Install Docker on your OS [Ubuntu](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/) [MacOS](https://docs.docker.com/docker-for-mac/install/)

# Working with docker
List images:

```docker images```

Remove local image (after build new container^ it saves in local docker)

```docker rmi -f IMAGE_ID```

Stop running container

```docker stop CONTAINER_ID```

# Deploy
1. In repo dir build container

    ```docker build -t stylistadvisedme ./```

2. Next, save container as file

    ```docker save stylistasvisedme > stylistadvisedme.tar```

3. Upload file to remote machine
    
    ```scp -i "path/to/ssh-key.pem" stylistadvisedme.tar ubuntu@YOUR_SERVER.compute.amazonaws.com:/home/ubuntu```

   For example
    
    ```scp -i "~/.ssh/stylistAdvisedMeKey.pem" stylistadvisedme.tar ubuntu@ec2-54-93-155-232.eu-central-1.compute.amazonaws.com:/home/ubuntu```

4. Go to machine 
    
    ```ssh -i "path/to/ssh-key.pem.pem" ubuntu@YOUR_SERVER.compute.amazonaws.com```

5. Load image, stop running container and run new container (use ```docker ps``` for check running container)
    
    ```docker load < stylistadvisedme.tar``` - will display Image Id.

    ```docker stop CONTAINER_ID```

    ```docker run -p 3000:3000 -d IMAGEID```

# Probably problems
[Permission denied](https://techoverflow.net/2017/03/01/solving-docker-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket/)

