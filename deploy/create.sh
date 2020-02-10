docker build -t personal-website-image .
docker run -dit --name personal-website-running -p 8080:80 personal-website-image
