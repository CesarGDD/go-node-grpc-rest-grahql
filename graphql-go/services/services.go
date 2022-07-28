package services

import (
	"cesargdd/graphql-api/proto/blogpb"
	"cesargdd/graphql-api/proto/userspb"
	"log"
	"os"

	"google.golang.org/grpc"
)

func BlogSrv() blogpb.BlogServiceClient {
	opts := grpc.WithInsecure()
	cc, err := grpc.Dial(os.Getenv("BLOG_URL"), opts)
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}
	// defer cc.Close()
	blogsvc := blogpb.NewBlogServiceClient(cc)

	return blogsvc
}
func UserSrv() userspb.UsersServiceClient {
	opts := grpc.WithInsecure()
	cc, err := grpc.Dial(os.Getenv("USER_URL"), opts)
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}
	// defer cc.Close()
	usersvc := userspb.NewUsersServiceClient(cc)

	return usersvc
}
