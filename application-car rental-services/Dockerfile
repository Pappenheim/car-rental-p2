# Stage 1: Build with JDK 17 and manually install Maven on Alpine
FROM openjdk:17-alpine AS build

# Install Maven
RUN apk update && \
    apk add --no-cache maven

# Copy the pom.xml and source code of the database connection service
COPY service/pom.xml /service/pom.xml
COPY service/src /service/src

# Build the database connection service
WORKDIR /service
RUN mvn clean install -DskipTests

# Copy the CarService pom.xml and source code correctly
COPY CarService/pom.xml /CarService/pom.xml
COPY CarService/src /CarService/src

# Build the CarService application
WORKDIR /CarService
RUN mvn clean package

# Stage 2: Run with OpenJDK 17 Alpine
FROM openjdk:17-alpine

# Copy the built jar files from the build stage
COPY --from=build /service/target/service*.jar /app/service.jar
COPY --from=build /CarService/target/carRental-0.0.1-SNAPSHOT.jar /app/carRental.jar

# Set the working directory
WORKDIR /app

# Expose the port the application uses
EXPOSE 8080

# Command to run the CarService application
CMD ["java", "-jar", "carRental.jar"]