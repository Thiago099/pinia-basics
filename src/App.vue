<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounter } from "@/store/useCounter"
import { ref } from 'vue'
const counter = useCounter()
const { getCounter, name } = storeToRefs(counter)
const { increment, decrement, set } = counter
const ammount = ref(1)
import test from './test.vue'
</script>

<template>
<div class="container">
  <test></test>
  <h4>{{ getCounter }}</h4>
  <input type="number" class="form-control" v-model="ammount"/>
  <button class="btn back-hover success" @click="increment(ammount)">Increment</button>
  <button class="btn back-hover danger" @click="decrement(ammount)">Decement</button>
  <button class="btn back-hover warning" @click="set(ammount)">Set</button>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a5a5a5;
  margin-top: 60px;
}
.btn{
  margin: 5px;
}
</style>
