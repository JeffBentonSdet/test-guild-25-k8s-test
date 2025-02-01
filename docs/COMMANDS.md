Here's a list of the commands that we will be running during the course o the workshop. Note that these are subject to change, but they should be good enough to ease typing stress and trying to keep up during the workshop.

# Reference
* https://github.com/JeffBentonSdet/test-guild-25-k8s-test

# Setup Verification
```
docker version
```
```
export DOCKER_USER_ID=
docker login -u ${DOCKER_USER_ID} docker.io
```
```
minikube version
```
```
kubectl version
```
```
ctlptl version
```
```
tilt version
```
```
helm version
```
# Docker
## Build the docker image
```
docker build --tag unit-test-js .
docker images
docker history unit-test-js:latest
```
## Run the docker image
```
docker run unit-test-js:latest
```
## Running a shell in the container
```
docker run --rm -it --entrypoint sh unit-test-js:latest
```
## Push the docker image
```
export DOCKER_USER_ID=
docker login -u ${DOCKER_USER_ID} docker.io
docker tag unit-test-js ${DOCKER_USER_ID}/unit-test-js:0.1
docker push ${DOCKER_USER_ID}/unit-test-js:0.1
```
# Kubernetes
## Start your cluster
```
minikube start
minikube status
minikube dashboard
```
## Run the job, v1
```
kubeclt cluster-info
export DOCKER_USER_ID=
export JOB_NAME=test-1
kubectl create job ${JOB_NAME} --image ${DOCKER_USER_ID}/unit-test-js:0.1
```
## Evaluate the job
```
kubectl get jobs
kubectl get job ${JOB_NAME}
kubectl get job ${JOB_NAME} -o json

kubectl explain job
kubectl explain job.status
```

## Run the job, v2
```
kubectl describe job ${JOB_NAME}
kubectl apply -f job.yaml
```
# Tilt
## Use control plane tool (ctlptl)
```
ctlptl apply -f cluster.yaml
```
## Run via Tilt
```
tilt up
```
# Helm
## Create helm chart
```
helm create helm-chart-1
```
## Install via helm
```
helm install release-name-1 unit-test-js
```

## helm + Tilt
