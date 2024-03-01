export class Blog {
    constructor(data) {
        this.id = data.id || data._id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.published = data.published
        this.tags = data.tags
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }
}