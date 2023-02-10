<!-- App.vue -->
 
<template>
   <div id="app">
     <TodoHeader />
     <TodoTitle/>
     <TodoList/>
     <TodoInput/>

   </div>
 </template>
  
 <script>
 import TodoHeader from "./components/TodoHeader";
 import TodoTitle from "./components/TodoTitle.vue";
 import TodoList from "./components/TodoList.vue";
 import TodoInput from "./components/TodoInput.vue";
  
 export default {
   name: "App",
   components: {
     TodoHeader,
     TodoTitle,
     TodoList,
     TodoInput

   }
 }
 </script>