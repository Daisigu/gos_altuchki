<script setup lang="ts">
defineProps<{
  question: {
    title: string
    type: 'text' | 'images'
    images?: string[]
    text?: string[]
  }
}>()
const emit = defineEmits(['answer'])
</script>
<template>
  <div>
    <h1 class="sm:text-3xl text-xl sm:mb-10 mb-5">
      {{ question.title }}
    </h1>
    <div v-if="question.type==='images'" class="grid sm:grid-cols-2  sm:gap-5 gap-1">
      <img @click="emit('answer', question, key)" :key="image" v-for="(image, key) in question.images"
           class="sm:w-full sm:h-full sm:max-h-full max-h-[200px] w-full hover:scale-105 transition-all cursor-pointer"
           :src="image"/>
    </div>
    <div v-else-if="question.type==='text'" class="grid grid-cols-1 gap-5">
      <UButton @click="emit('answer', question, key)" v-for="(text, key) in question.text" :key="key"
               class="w-full h-full">
        {{ text }}
      </UButton>
    </div>
  </div>
</template>
