package routes

import (
	"cesargdd/rest-grpc/controller"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("users", controller.GetUsers)
	app.Get("user/:id", controller.GetUser)
	app.Post("user", controller.CreateUser)
	app.Delete("user/:id", controller.DeleteUser)

	app.Get("blogs", controller.GetBlogs)
	app.Get("blog/:id", controller.GetBlog)
	app.Get("blog/by/:user_id", controller.GetBlogByUserId)
	app.Post("blog", controller.CreateBlog)
	app.Delete("blog/:id", controller.DeleteBlog)
}
