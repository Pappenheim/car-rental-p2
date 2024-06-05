# Use the official Envoy image from Docker Hub
FROM envoyproxy/envoy:v1.18.3

# Copy the Envoy configuration file
COPY envoy.yaml /etc/envoy/envoy.yaml

# Expose port 8080
EXPOSE 8081

# Run Envoy with the provided configuration file
CMD ["envoy", "-c", "/etc/envoy/envoy.yaml", "--service-cluster", "local_envoy"]
