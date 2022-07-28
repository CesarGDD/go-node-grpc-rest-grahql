package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"cesargdd/graphql-api/graph/generated"
	"cesargdd/graphql-api/graph/model"
	"cesargdd/graphql-api/proto/blogpb"
	"cesargdd/graphql-api/proto/userspb"
	"cesargdd/graphql-api/services"
	"context"
	"fmt"
)

func (r *blogResolver) User(ctx context.Context, obj *blogpb.Blog) (*userspb.User, error) {
	fmt.Println("Blog User")
	res, err := services.UserSrv().GetUser(ctx, &userspb.GetUserRequest{Id: obj.UserId})
	if err != nil {
		return nil, err
	}
	return res.User, nil
}

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*userspb.User, error) {
	fmt.Println("Create User grpahql API")
	res, err := services.UserSrv().CreateUser(ctx, &userspb.CreateUserRequest{
		Username: input.Username,
		Password: input.Password,
	})
	if err != nil {
		return nil, err
	}
	return res.User, nil
}

func (r *mutationResolver) DeleteUser(ctx context.Context, id int) (*userspb.User, error) {
	fmt.Println("Delete User graphql")
	res, err := services.UserSrv().DeleteUser(ctx, &userspb.DeleteUserRequest{Id: int32(id)})
	if err != nil {
		return nil, err
	}
	return res.User, nil
}

func (r *mutationResolver) CreateBlog(ctx context.Context, input model.NewBlog) (*blogpb.Blog, error) {
	fmt.Println("Create Blog graphql")
	res, err := services.BlogSrv().CreateBlog(ctx, &blogpb.CreateBlogRequest{
		UserId:  int32(input.UserID),
		Content: input.Content,
	})
	if err != nil {
		return nil, err
	}
	return res.Blog, nil
}

func (r *mutationResolver) DeleteBlog(ctx context.Context, id int) (*blogpb.Blog, error) {
	fmt.Println("Delete blog Grapqhl")
	res, err := services.BlogSrv().DeleteBlog(ctx, &blogpb.DeleteBlogRequest{Id: int32(id)})
	if err != nil {
		return nil, err
	}
	return res.Blog, nil
}

func (r *queryResolver) GetUser(ctx context.Context, id int) (*userspb.User, error) {
	fmt.Println("Get User Graphql")
	res, err := services.UserSrv().GetUser(ctx, &userspb.GetUserRequest{Id: int32(id)})
	if err != nil {
		return nil, err
	}
	return res.User, nil
}

func (r *queryResolver) GetUsers(ctx context.Context) ([]*userspb.User, error) {
	fmt.Println("Get Users graphql")
	res, err := services.UserSrv().GetUsers(ctx, &userspb.GetUsersRequest{})
	if err != nil {
		return nil, err
	}
	return res.User, nil
}

func (r *queryResolver) GetBlog(ctx context.Context, id int) (*blogpb.Blog, error) {
	fmt.Println("Get Blog graphql")
	res, err := services.BlogSrv().GetBlog(ctx, &blogpb.GetBlogRequest{Id: int32(id)})
	if err != nil {
		return nil, err
	}
	return res.Blog, nil
}

func (r *queryResolver) GetBlogByUserID(ctx context.Context, userID int) ([]*blogpb.Blog, error) {
	fmt.Println("Get Blog By UserId")
	res, err := services.BlogSrv().GetBlogByUserId(ctx, &blogpb.GetBlogByUserIdRequest{UserId: int32(userID)})
	if err != nil {
		return nil, err
	}
	return res.Blog, nil
}

func (r *queryResolver) GetBlogs(ctx context.Context) ([]*blogpb.Blog, error) {
	fmt.Println("Get Blogs Grapqhl")
	res, err := services.BlogSrv().GetBlogs(ctx, &blogpb.GetBlogsRequest{})
	if err != nil {
		return nil, err
	}
	return res.Blog, nil
}

func (r *userResolver) Blogs(ctx context.Context, obj *userspb.User) ([]*blogpb.Blog, error) {
	fmt.Println("User Blogs graphql")
	res, err := services.BlogSrv().GetBlogByUserId(ctx, &blogpb.GetBlogByUserIdRequest{UserId: obj.Id})
	if err != nil {
		return nil, err
	}
	return res.Blog, nil
}

// Blog returns generated.BlogResolver implementation.
func (r *Resolver) Blog() generated.BlogResolver { return &blogResolver{r} }

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type blogResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type userResolver struct{ *Resolver }
