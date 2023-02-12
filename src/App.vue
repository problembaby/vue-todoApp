<!-- App.vue -->
 
<template>
   <div id="app">
     <TodoHeader />
     <TodoTitle/>
     <TodoList/>
     <TodoInput/>
     <TodoControllorer></TodoControllorer>
     <TodoFooter></TodoFooter>

   </div>
 </template>
  
 <script>
 import TodoHeader from "./components/TodoHeader";
 import TodoTitle from "./components/TodoTitle.vue";
 import TodoList from "./components/TodoList.vue";
 import TodoInput from "./components/TodoInput.vue";
 import TodoControllorer from "./components/TodoControllorer.vue";
 import TodoFooter from "./components/TodoFooter.vue";
  
 export default {
   name: "App",
   components: {
     TodoHeader,
     TodoTitle,
     TodoList,
     TodoInput,
     TodoControllorer,
     TodoFooter

   }
 }
 </script>