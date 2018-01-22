set -e
number=$(date +"%d-%m-%Y-%H-%M")

echo "START DOCKER BUILD stylistadvisedme$number"
docker build -t stylistadvisedme$number --build-arg api=http://ec2-54-93-155-232.eu-central-1.compute.amazonaws.com ./

echo SAVE IMAGE AS TAR
docker save stylistadvisedme$number > stylistadvisedme$number.tar

echo SEND TAR TO SERVER
scp -i "~/.ssh/stylistAdvisedMeKey.pem" stylistadvisedme$number.tar ubuntu@ec2-54-93-155-232.eu-central-1.compute.amazonaws.com:/home/ubuntu

echo CLEAR
rm stylistadvisedme$number.tar
#docker rmi -f stylistadvisedme$number

echo LOAD on remote server
cmd1="docker load < stylistadvisedme$number.tar"
ssh -i "~/.ssh/stylistAdvisedMeKey.pem" ubuntu@ec2-54-93-155-232.eu-central-1.compute.amazonaws.com $cmd1
echo CLEAR FILE
cmd2="rm stylistadvisedme$number.tar"
ssh -i "~/.ssh/stylistAdvisedMeKey.pem" ubuntu@ec2-54-93-155-232.eu-central-1.compute.amazonaws.com $cmd2
echo STOP CONTAINERS
ssh -i "~/.ssh/stylistAdvisedMeKey.pem" ubuntu@ec2-54-93-155-232.eu-central-1.compute.amazonaws.com 'docker stop $(docker ps -a -q)'
echo START NEW CONTAINER
cmd3="docker run -p 3000:3000 -d stylistadvisedme$number"
ssh -i "~/.ssh/stylistAdvisedMeKey.pem" ubuntu@ec2-54-93-155-232.eu-central-1.compute.amazonaws.com $cmd3