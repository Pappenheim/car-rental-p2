# gRPC currency converter service

This service provides currency conversion functionality. It is implemented using gRPC and Protocol Buffers.

## Run locally

```bash
# Create a virtual environment
python -m venv .venv

# On MacOS, WSL, Linux
source .venv/bin/activate

# On Windows
.\.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python server.py
```

## Run with Docker

```bash
# Build the Docker image
docker build -t currency-converter-service .

# Run the Docker container
docker run -p 50051:50051 currency-converter-service
```
