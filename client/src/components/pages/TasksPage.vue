<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6">
        <h1>tasks</h1>
        <h3>This file will list all the tasks</h3>
        <section class="panel panel-success" v-if="tasks && tasks.length">
          <div class="panel-heading">
            list of tasks
          </div>
          <table class="table table-striped">
            <tr>
              <th>Fix version</th>
              <th>Component</th>
              <th>Link</th>
              <th>Description</th>
              <th>Comment</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Delete task</th>
            </tr>
            <tr v-for="task in tasks" :key="task.title">
              <td>{{ task.release }}</td>
              <td>{{ task.component }}</td>
              <td>{{ task.link }}</td>
              <td>{{ task.description }}</td>
              <td>{{ task.comment }}</td>
              <td>{{ task.priority }}</td>
              <td>{{ task.status }}</td>
              <td><button v-on:click="removeTask(task._id)">X</button></td>
            </tr>
          </table>
        </section>
        <section class="panel panel-danger" v-if="tasks && tasks.length ==0">
          <p>There are no tasks ... Lets add one now!</p>
        </section>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6">
        <h1>Add new post</h1>
        <div class="row">
          <div class="col-xs-12">
            <label>Fix version</label>
            <input type="text" v-model="task.release">
          </div>
          <div class="col-xs-12">
            <label>Component</label>
            <input type="text" v-model="task.component">
          </div>
          <div class="col-xs-12">
            <label>Link</label>
            <input type="text" v-model="task.link">
          </div>
          <div class="col-xs-12">
            <label>Description</label>
            <input type="text" v-model="task.description">
          </div>
          <div class="col-xs-12">
            <label>Comment</label>
            <input type="text" v-model="task.comment">
          </div>
          <div class="col-xs-12">
            <label>Priority</label>
            <input type="text" v-model="task.priority">
          </div>
          <div class="col-xs-12">
            <label>Status</label>
            <input type="text" v-model="task.status">
          </div>
        </div>
        <div class="col-xs-12">
          <button v-on:click="addTask()">Add task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TasksService from '@/services/TasksService'

  export default {
    name: 'TasksPage',
    data () {
      return {
        tasks: [],
        task: {
          release: '',
          component: '',
          link: '',
          description: '',
          comment: '',
          priority: '',
          status: ''
        }
      }
    },
    methods: {
      async addTask () {
    if (this.task.title !== '' && this.task.description !== '') {
      await TasksService.addNewTask({
        release: this.task.release,
        component: this.task.component,
        link: this.task.link,
        description: this.task.description,
        comment: this.task.comment,
        priority: this.task.priority,
        status: this.task.status
      })
      this.$router.push({ name: 'Tasks' })
    } else {
      alert('Empty fields!')
    }
  },
  async getTasks () {
    const response = await TasksService.fetchTasks()
    this.tasks = response.data.tasks
  },
  async removeTask (value) {
    await TasksService.deleteTask({ id: value })
    this.getTasks()
  }
  },
  mounted () {
    this.getTasks()
  }
  }
</script>
