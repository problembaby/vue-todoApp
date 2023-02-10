<!-- App.vue -->
 
<template>
   <div id="app">
     <TodoHeader />
     <TodoTitle></TodoTitle>

   </div>
 </template>
  
 <script>
 import TodoHeader from "./components/TodoHeader";
 import TodoTitle from "./components/TodoTitle.vue";

  
 export default {
   name: "App",
   components: {
     TodoHeader,
     TodoTitle

   }
 };
 </script>