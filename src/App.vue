<!-- App.vue -->
 
<template>
   <div id="app">
     <TodoHeader />

   </div>
 </template>
  
 <script>
 import TodoHeader from "./components/TodoHeader";

  
 export default {
   name: "App",
   components: {
     TodoHeader,

   }
 };
 </script>