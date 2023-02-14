<!--TodoTitle.vue-->
<template>
  <div class="title">
    <p class="title__message">{{ message }}</p>
    <p class="title_task">
      You've got 
      <span class="title__task-total">{{taskTotal}}</span>tasks today
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:"Hello, mina",
      taskTotal:5,
    }

  }



}
</script>

	