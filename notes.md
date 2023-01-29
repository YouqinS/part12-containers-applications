[install docker](https://docs.docker.com/engine/install/linux-postinstall/)

### Manage Docker as a non-root user
```
newgrp docker
docker run hello-world
newgrp docker
docker run hello-world
```


docker commands:

```
docker container ls -a
docker start <CONTAINER ID > or <NAME> : docker start tender_zhukovsky
docker run hello-world

docker kill tender_zhukovsky
```

