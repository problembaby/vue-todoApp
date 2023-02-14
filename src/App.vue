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
@import "./assets/style/_reset";

$color: #f0f0f0;
.list {
  background: $color;
 
  &__text {
    font-weight: bold;
  }
}
</style>