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
 import TodoTitle from "./components/TodoTitle";
 import TodoList from "./components/TodoList";
 import TodoInput from "./components/TodoInput";
 import TodoControllorer from "./components/TodoControllorer";
 import TodoFooter from "./components/TodoFooter";
  
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

	
	
<style lang="scss">
@import "./assets/style/reset";
@import "./assets/style/mixins";

</style>