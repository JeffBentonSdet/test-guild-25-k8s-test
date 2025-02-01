What is needed to prepare for the Running your tests as a Kubernetes job workshop?

1. docker + docker hub account
2. minikube
3. kubectl
4. ctlptl
5. tilt
6. helm
7. editor 

You can choose to use other tools that meet the goal, but do so at your own risk.

# docker 

Instructions:
* [mac](https://docs.docker.com/desktop/setup/install/mac-install/)
* [linux](https://docs.docker.com/desktop/setup/install/linux/)
* [windows](https://docs.docker.com/desktop/setup/install/windows-install/)

1. Go to https://www.docker.com/products/docker-desktop/
2. Scroll to the `Download Docker Desktop` button and click it
3. Install

Verify you can run docker commands from the command line / terminal
```
docker version
```

# docker hub account

You need a location to push and pull docker images. You can use other resources.
I'll be using docker hub.

Instructions:
* https://docs.docker.com/accounts/create-account/

Verify you can login
```
docker login -u ${DOCKER_USER_ID} docker.io
```

# minikube

You need to run kubernetes locally. Minikube seemed pretty easy to install and run which is why I went with it.

Instructions
* https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Fx86-64%2Fstable%2Fbinary+download

Verify you can run minikube commands from the command line / terminal
```
minikube version
```

# kubectl

Instructions:
* https://kubernetes.io/docs/tasks/tools/

Verify you can run kubectl commands from the command line / terminal
```
kubectl version
```

# ctlptl

This is a requirement for running tilt. 

Instructions:
* https://github.com/tilt-dev/ctlptl/blob/main/INSTALL.md

Verify you can run ctlptl commands from the command line / terminal
```
ctlptl version
```

# tilt

Instructions:
* https://docs.tilt.dev/install.html

Verify you can run tilt commands from the command line / terminal
```
tilt version
```

# helm

Instructions:
* https://helm.sh/docs/intro/install/

Verify you can run helm commands from the command line / terminal
```
helm version
```

# editor

Feel free to use your preferred editor. I'll be using vscode.