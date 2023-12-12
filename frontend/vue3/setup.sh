#!/usr/bin/env bash
image_version=`date +%Y%m%d%H%M`;
# vue_ackstage
docker stop vue_ackstage || true;
# vue_ackstage
docker rm vue_ackstage || true;
# 删除vue_ackstage镜像
docker rmi --force $(docker images | grep vue_ackstage | awk '{print $3}')
# 构建vue_ackstage:$image_version镜像
docker build . -t vue_ackstage:$image_version;
# 查看镜像列表
docker images;

# 打tag
# docker tag vue_ackstage:$image_version /tag vue_ackstage:$image_version
echo '启动'
# 基于vue_ackstage 镜像 构建一个容器 vue_ackstage
docker run -p 9425:80 -d --name vue_ackstage vue_ackstage:$image_version;
# 查看日志
docker logs vue_ackstage;
# 删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)
# 对空间进行自动清理
docker system prune -f
# docker system prune -a -f