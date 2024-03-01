<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                </div>
                <div class="modal-body" v-if="blog">
                    <div class="row">
                        <div class="col-4">
                            <img :src="blog.imgUrl" alt="blog picture" class="img-fluid">
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <div class="col-4">
                                    <img :src="blog.creator.picture" alt="" class="icon img-fluid">
                                </div>
                                <div class="col-8">
                                    <h2>{{ blog.title }}</h2>
                                    <p>By: {{ blog.creator.name }}</p>
                                    <p>Last Updated At: {{ blog.updatedAt }}</p>
                                </div>
                            </div>
                            <p class="mt-4">{{ blog.body }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        return {
            blog: computed(() => AppState.activeBlog)
        }
    }
}
</script>


<style lang="scss" scoped>
.icon {
    height: 15vh;
    width: 15vh;
    object-fit: cover;
    border-radius: 50%;
}
</style>