# gRPC-Web Proxy

browsers enforce the same-origin policy, which restricts web pages 
from making requests to a different domain than the one that served 
the web page, unless the target server explicitly allows it through 
CORS (Cross-Origin Resource Sharing). gRPC services typically do not 
support CORS directly, as they are meant to be consumed by other 
backend services rather than frontend applications.

To allow the Angular app to communicate with the gRPC service, we
had to set up a gRPC-Web proxy with Envoy, that translates between 
HTTP/1.1 requests and gRPC requests.

## Running the proxy with Docker

Build the Docker image:

```bash
docker build -t grpc-web-proxy .
```

Run the Docker container:

```bash
docker run -d -p 8081:8081 grpc-web-proxy
```
