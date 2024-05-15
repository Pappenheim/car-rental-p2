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
CMD ["python", "server.py"]
