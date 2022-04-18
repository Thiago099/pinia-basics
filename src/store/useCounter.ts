import { defineStore } from 'pinia'


export const useCounter = defineStore("counter", {
    state: () => ({
        value: 0,
    }),
    getters:{
        getCounter: state => state.value,
    },
    actions:{
        set(value = 0){
            this.value = value
        },
        increment(value = 1){
            this.value += value
        },
        decrement(value = 1){
            this.value -= value
        }
    }
})