<script setup>
import { ref } from 'vue'

const p = ref(null)
const a = ref(0.08)
const s = ref(0.36)
const pg = ref(null)

const handleCalc = () => {
    const a1 = 1 - a.value
    const s1 = 1 - s.value

    pg.value = (p.value * a1) * s1
}
</script>

<template>
    <div class="flex bg-slate-200 w-screen h-screen justify-center items-center flex-col gap-4">
        <input class="rounded-md shadow-md indent-3 p-2" type="number" placeholder="P" v-model="p">
        <input class="rounded-md shadow-md indent-3 p-2" type="number" v-model="a">
        <input class="rounded-md shadow-md indent-3 p-2" type="number" v-model="s">

        <button 
    class="
    bg-slate-400 h-10 rounded-md p-5 flex justify-center items-center shadow-md font-semibold sans-serif
    hover:bg-slate-500 hover:shadow-slate-500/50 duration-300
    focus:animate-[shrink-grow_0.6s_ease-in-out]
    " 
    @click="handleCalc"
    >Calc</button>

    <h1 v-if="pg" class="font-bold">{{pg}}</h1>
    </div>
</template>