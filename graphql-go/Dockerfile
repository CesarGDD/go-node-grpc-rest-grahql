FROM golang:alpine

WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

EXPOSE 3001


CMD ["go", "run", "server.go"]