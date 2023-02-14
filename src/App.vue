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

.top {
  width: 100%;
  min-height: 43.6rem;
  padding: 0 $padding 4.5rem;
  background-image: linear-gradient(145deg, #3770cc 20%, #ce91c9 84%);
}

.body {
  padding: 3rem $padding;
  background-color: #efefef;
}
</style>
