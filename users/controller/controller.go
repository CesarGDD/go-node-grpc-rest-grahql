package controller

import (
	"cesargdd/users-grpc/postgres"
	"cesargdd/users-grpc/userspb"
	"context"
	"fmt"

	"github.com/jinzhu/copier"
)

type Server struct {
	userspb.UsersServiceServer
}

var conn = postgres.Connect()
var db = postgres.New(conn)

func (*Server) CreateUser(ctx context.Context, req *userspb.CreateUserRequest) (*userspb.CreateUserResponse, error) {
	fmt.Println("Create User gRPC")
	res, err := db.CreateUser(ctx, postgres.CreateUserParams{
		Username: req.Username,
		Password: req.Password,
	})
	if err != nil {
		return nil, err
	}
	return &userspb.CreateUserResponse{
		User: &userspb.User{
			Id:       int32(res.Id),
			Username: res.Username,
			Password: res.Password,
		},
	}, nil
}
func (*Server) GetUser(ctx context.Context, req *userspb.GetUserRequest) (*userspb.GetUserResponse, error) {
	fmt.Println("Get User gRPC")
	res, err := db.GetUser(ctx, req.Id)
	if err != nil {
		return nil, err
	}
	return &userspb.GetUserResponse{
		User: &userspb.User{
			Id:       int32(res.Id),
			Username: res.Username,
			Password: res.Password,
		},
	}, nil
}
func (*Server) DeleteUser(ctx context.Context, req *userspb.DeleteUserRequest) (*userspb.DeleteUserResponse, error) {
	fmt.Println("Delete User gRPC")
	res, err := db.DeleteUser(ctx, req.Id)
	if err != nil {
		return nil, err
	}
	return &userspb.DeleteUserResponse{
		User: &userspb.User{
			Id:       int32(res.Id),
			Username: res.Username,
			Password: res.Password,
		},
	}, nil
}
func (*Server) GetUsers(ctx context.Context, req *userspb.GetUsersRequest) (*userspb.GetUsersResponse, error) {
	fmt.Println("Get Users gRPC")
	res, err := db.GetUsers(ctx)
	if err != nil {
		return nil, err
	}
	data := &userspb.GetUsersResponse{}
	copier.Copy(&data.User, &res)

	return &userspb.GetUsersResponse{
		User: data.User,
	}, nil
}
