package controller

import (
	"cesargdd/rest-grpc/proto/userspb"
	"cesargdd/rest-grpc/services"
	"context"
	"fmt"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetUsers(ctx *fiber.Ctx) error {
	fmt.Println("Get users rest")
	res, err := services.UserSrv().GetUsers(context.Background(), &userspb.GetUsersRequest{})
	if err != nil {
		return err
	}
	return ctx.Status(fiber.StatusOK).JSON(res.User)
}
func GetUser(ctx *fiber.Ctx) error {
	fmt.Println("Get user rest")
	id, _ := strconv.Atoi(ctx.Params("id"))
	res, err := services.UserSrv().GetUser(context.Background(), &userspb.GetUserRequest{
		Id: int32(id),
	})
	if err != nil {
		return err
	}
	return ctx.Status(fiber.StatusOK).JSON(res.User)
}
func DeleteUser(ctx *fiber.Ctx) error {
	fmt.Println("Delete user rest")
	id, _ := strconv.Atoi(ctx.Params("id"))
	res, err := services.UserSrv().DeleteUser(context.Background(), &userspb.DeleteUserRequest{
		Id: int32(id),
	})
	if err != nil {
		return err
	}
	return ctx.Status(fiber.StatusOK).JSON(res.User)
}
func CreateUser(ctx *fiber.Ctx) error {
	fmt.Println("Create users rest")
	body := new(userspb.User)
	err := ctx.BodyParser(body)
	if err != nil {
		return err
	}
	res, err := services.UserSrv().CreateUser(context.Background(), &userspb.CreateUserRequest{
		Username: body.Username,
		Password: body.Password,
	})
	if err != nil {
		return err
	}
	return ctx.Status(fiber.StatusOK).JSON(res.User)
}
