<<<<<<< currency-converter
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 50051 available to the world outside this container
EXPOSE 50051

# Run server_grpc.py when the container launches
=======
# Verwende ein offizielles Python 3.8 Image als Basis
FROM python:3.8-slim

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die Dateien in das Arbeitsverzeichnis im Container
COPY . /app

# Installiere benötigte Python-Pakete aus der requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Lege den Port fest, der vom Container offen sein soll
EXPOSE 8000

# Starte den Service, wenn der Container läuft
>>>>>>> main
CMD ["python", "server.py"]
