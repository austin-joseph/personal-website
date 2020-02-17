docker build -t personal-website-image .
docker run -dit --name personal-website-running -p 80:80 -p 443:443 personal-website-image
