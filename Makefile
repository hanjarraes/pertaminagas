PROJECT_NAME:=coldstream
BUILD_VERSION:=202301170911

build-image:
	docker compose --project-name ${PROJECT_NAME} build web-home
tag-image:
	docker tag ${PROJECT_NAME}-web-home:latest hub.pgn.co.id/natuno/web-home:${BUILD_VERSION}
	docker tag ${PROJECT_NAME}-web-home:latest hub.pgn.co.id/natuno/web-home:latest
push-image:
	docker push hub.pgn.co.id/natuno/web-home:${BUILD_VERSION}
	docker push hub.pgn.co.id/natuno/web-home:latest
build-push-image: build-image tag-image push-image
