<!-- App.vue -->
<template>

 <div id="app">
    <TodoHeader></TodoHeader>
    <TodoTitle></TodoTitle>
    <TodoInput></TodoInput>
    <TodoControllorer></TodoControllorer>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
 </div >

</template>

<script>
import TodoControllorer from './components/TodoControllorer.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoTitle from './components/TodoTitle.vue';

export default {
 name:'App',
 components:{
  TodoControllorer,
  TodoFooter,
  TodoHeader,
  TodoInput,
  TodoList,
  TodoTitle,
 }
}
</script>

<style>

</style>