<template>
    <div v-if="profile">
        <img :src="profile.coverImg" alt="" class="cover">
        <img :src="profile.picture" alt="" class="logo">
    </div>

    <section class="mt-5 pt-5">
        <h1 class="text-center" v-if="profile">{{ profile.name }}</h1>
    </section>

    <div class="container-fluid mt-5">
        <section class="row">
            <div class="col-md-2 ms-5" v-for="blog in blogs">
                <div class="card" style="width: 18rem;">
                    <img :src="blog.imgUrl" class="creatorLogo card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ blog.title }}</h5>
                        <p class="card-text">{{ blog.body.substring(0, 50) + "..." }}</p>
                        <a href="#" class="btn btn-primary" @click="setActiveBlogById(blog.id)" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">View</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { profileService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { blogService } from '../services/BlogService.js';

export default {
    setup() {
        const route = useRoute()
        async function getProfileById() {
            try {
                const id = route.params.profileId;
                await profileService.getProfileById(id)
            } catch (error) {
                Pop.error(error)
            }
        }

        async function getProjectsByCreator() {
            try {
                const id = route.params.profileId;
                await blogService.getProjectsByCreator(id)
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            getProfileById()
            getProjectsByCreator()
        })
        return {
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs),
            async setActiveBlogById(id) {
                try {
                    await blogService.setActiveBlogById(id)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.cover {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    object-position: center;
}

.logo {
    height: 15vh;
    width: 15vh;
    position: absolute;
    object-fit: cover;
    margin: auto;
    display: block;
    top: 30vh;
    left: 0;
    right: 0;
    border-radius: 50%;
}

.creatorLogo {
    height: 20vh;
    object-fit: cover;
}
</style>