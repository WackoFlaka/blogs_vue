<template>
    <div class="card mb-5">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="blog.imgUrl" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div class="row align-items-center flex-nowrap">
                        <div style="width: auto">
                            <router-link :to="{ name: 'Profile', params: { profileId: blog.creatorId } }">
                                <img :src="blog.creator.picture" alt="" class="logo img-fluid" role="button">
                            </router-link>
                        </div>
                        <div>
                            <h2 class="text-start">{{ blog.creator.name }}</h2>
                        </div>
                    </div>
                    <h5 class="card-title mt-5">{{ blog.title }}</h5>
                    <p class="card-text">{{ blog.body.substring(0, 100) + "..." }}</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated {{ blog.updatedAt }}</small></p>
                    <button type="button" class="btn btn-primary px-5 fs-5" @click="setActiveBlog()" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">View</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Blog } from '../models/Blog.js';
import { blogService } from '../services/BlogService.js';
import Pop from '../utils/Pop.js';

export default {

    props: {
        blog: { type: Blog, required: true }
    },

    setup(props) {
        return {

            setActiveBlog() {
                blogService.setActiveBlog(props.blog)
            }

        }
    }
}
</script>


<style lang="scss" scoped>
.logo {
    height: 10vh;
    width: 10vh;
    object-fit: cover;
    border-radius: 50%;
}
</style>