package controller

import (
	"cesargdd/rest-grpc/proto/blogpb"
	"cesargdd/rest-grpc/services"
	"context"
	"fmt"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetBlog(ctx *fiber.Ctx) error {
	fmt.Println("Get Blog rest")
	id, err := strconv.Atoi(ctx.Params("id"))
	if err != nil {
		return err
	}
	res, err := services.BlogSrv().GetBlog(context.Background(), &blogpb.GetBlogRequest{Id: int32(id)})
	if err != nil {
		return err
	}
	return ctx.Status(fiber.StatusOK).JSON(res.Blog)
}

func GetBlogByUserId(ctx *fiber.Ctx) error {
	fmt.Println("Get BlogUserId rest")
	id, err := strconv.Atoi(ctx.Params("user_id"))
	if err != nil {
		return err
	}
	res, err := services.BlogSrv().GetBlogByUserId(context.Background(), &blogpb.GetBlogByUserIdRequest{UserId: int32(id)})
	if err != nil {
		return err
	}
	return ctx.Status(fiber.StatusOK).JSON(res.Blog)
}

func GetBlogs(ctx *fiber.Ctx) error {
	fmt.Println("Get blogs rest")
	res, err := services.BlogSrv().GetBlogs(context.Background(), &blogpb.GetBlogsRequest{})
	if err != nil {
		return err
	}
	return ctx.JSON(res.Blog)
}

func CreateBlog(ctx *fiber.Ctx) error {
	body := new(blogpb.Blog)
	err := ctx.BodyParser(body)
	if err != nil {
		return err
	}
	res, err := services.BlogSrv().CreateBlog(context.Background(), &blogpb.CreateBlogRequest{
		UserId:  body.UserId,
		Content: body.Content,
	})
	if err != nil {
		return err
	}
	return ctx.JSON(res.Blog)
}

func DeleteBlog(ctx *fiber.Ctx) error {
	fmt.Println("Delete blog rest")
	id, err := strconv.Atoi(ctx.Params("id"))
	if err != nil {
		return err
	}
	res, err := services.BlogSrv().DeleteBlog(context.Background(), &blogpb.DeleteBlogRequest{Id: int32(id)})
	if err != nil {
		return err
	}
	return ctx.JSON(res.Blog)
}
