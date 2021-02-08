#  Simple Object Storage Application

This is a simple object storage application. Application provide a way to list, add and remove buckets as well as add, list and remove objects from a bucket.

- wireframes for the application’s design and UX : `https://challenge.3fs.si/storage/docs/wireframes.pdf`
- API specification:  `https://challenge.3fs.si/storage/docs`

## Run locally
```bash
# Install dependencies
npm install

# Serve on localhost:8080
npm start
```
## Run with Docker Compose
```bash
# Build images and starts the containers. Navigate to localhost:8080
docker-compose up -d --build
```
