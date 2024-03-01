<template>
    <div class="modal fade" id="form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Blog</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="postBlog()">
                        <div class="mb-3">
                            <input type="text" placeholder="Title" class="form-control" name="title" required
                                v-model="editableBlogData.title">
                        </div>
                        <div class="mb-3">
                            <input type="url" placeholder="Img Url" class="form-control" name="imgUrl" required
                                v-model="editableBlogData.imgUrl">
                        </div>
                        <div class="mb-3">
                            <textarea name="body" id="" cols="30" rows="10" class="form-control"
                                placeholder="Start writing your blog here..." required
                                v-model="editableBlogData.body"></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Create Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { blogService } from '../services/BlogService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {

        // REVIEW creates a watchable object that we can bind the values from our input field to using two-way data bindg (v-model)
        const editableBlogData = ref({})

        return {
            editableBlogData,
            async postBlog() {
                try {
                    logger.log('Creating Post', editableBlogData.value)
                    await blogService.postBlog(editableBlogData.value)

                    // REVIEW
                    editableBlogData.value = {}
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>