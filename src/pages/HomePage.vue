<template>
  <section class="row justify-content-center mt-5">

    <div class="col-10 text-start">
      <Login />
    </div>

    <div class="col-10">
      <div v-if="account">
        <button class="btn btn-warning fs-1 py-2 px-4 my-5" data-bs-toggle="modal" data-bs-target="#form">+</button>
      </div>
      <div v-else>
        <p></p>
      </div>
    </div>

    <div class="col-10">
      <div v-for="blog in blogs" :key="blog.id">
        <!-- NOTE Component -->
        <Card :blog="blog" />
      </div>
    </div>
  </section>
  <FormComponent />
</template>

<script>
import Pop from '../utils/Pop.js';
import { blogService } from '../services/BlogService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'
import Card from '../components/Card.vue';
import FormComponent from '../components/FormComponent.vue';

export default {
  setup() {
    async function getAllBlogPosts() {
      try {
        await blogService.getAllBlogPosts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getAllBlogPosts();
    });
    return {
      blogs: computed(() => AppState.blogs),
      account: computed(() => AppState.account)
    };
  },
  components: { Card, FormComponent }
}
</script>

<style scoped lang="scss">
img {
  object-fit: cover;
  height: 40vh;
  width: 40vh;
}
</style>
