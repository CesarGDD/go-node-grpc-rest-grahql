import { ClientOptions, Transport } from "@nestjs/microservices" 
import { join } from "path"

export const grpcClient: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: process.env.BLOG_URL,
      package: 'blogpb',
      protoPath: join(__dirname, './blogpb/blogpb.proto')
    }
}