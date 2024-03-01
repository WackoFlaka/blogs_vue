import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogService {
    async getAllBlogPosts() {
        const response = await api.get('api/blogs')
        logger.log(response.data)
        const newBlogs = response.data.map(pojo => new Blog(pojo))
        AppState.blogs = newBlogs
    }

    async getProjectsByCreator(id) {
        const response = await api.get(`api/blogs?creatorId=${id}`)
        const creatorBlogs = response.data.map(pojo => new Blog(pojo))
        AppState.blogs = creatorBlogs
    }

    setActiveBlog(blog) {
        AppState.activeBlog = blog
    }

    async setActiveBlogById(id) {
        const response = await api.get(`api/blogs/${id}`)
        const activeBlog = new Blog(response.data)
        AppState.activeBlog = activeBlog

    }

    async postBlog(data) {
        const response = await api.post('api/blogs', data)
        logger.log('Created Post: ', response.data)
        const newBlog = new Blog(response.data)
        AppState.blogs.push(newBlog)
    }
}

export const blogService = new BlogService()