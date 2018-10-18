<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6">
        <h1>Posts</h1>
        <h3>This file will list all the posts</h3>
        <section class="panel panel-success" v-if="posts && posts.length">
          <div class="panel-heading">
            list of posts
          </div>
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr v-for="post in posts" :key="post.title">
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
              <td><button v-on:click="removePost(post._id)">X</button></td>
            </tr>
          </table>
        </section>
        <section class="panel panel-danger" v-if="posts && posts.length ==0">
          <p>There are no posts ... Lets add one now!</p>
        </section>
      </div>
      <div class="col-xs-6">
        <h1>Add new post</h1>
        <input type="text" v-model="post.title">
        <input type="text" v-model="post.description">
        <button v-on:click="addPost()">Add post</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'PostsPage',
  data () {
    return {
      posts: [],
      post: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    async addPost () {
      if (this.post.title !== '' && this.post.description !== '') {
        await PostsService.addNewPost({
          title: this.post.title,
          description: this.post.description
        })
        this.$router.push({ name: 'Posts' })
      } else {
        alert('Empty fields!')
      }
    },
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async removePost (value) {
      await PostsService.deletePost({ id: value })
      this.getPosts()
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>
