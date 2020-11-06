echo "Building container reverse-proxy"
docker build -t reverse-proxy .
docker create --network host --name reverse-proxy reverse-proxy
