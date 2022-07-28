import { ClientOptions, Transport } from "@nestjs/microservices" 
import { join } from "path"

export const grpcClient: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: process.env.USER_URL,
      package: 'userspb',
      protoPath: join(__dirname, './userspb/users.proto')
    }
}