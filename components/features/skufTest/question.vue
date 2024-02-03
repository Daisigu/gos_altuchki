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
    <h1 class="text-3xl mb-10">
      {{ question.title }}
    </h1>
    <div v-if="question.type==='images'" class="grid grid-cols-2 gap-5">
      <img @click="emit('answer', question, key)" :key="image" v-for="(image, key) in question.images"
           class="w-full h-full hover:scale-105 transition-all cursor-pointer"
           :src="image"/>
    </div>
    <div v-else-if="question.type==='text'" class="grid grid-cols-1 gap-5">
      <UButton @click="emit('answer', question, key)" v-for="(text, key) in question.text" :key="key" class="w-full h-full">
        {{ text }}
      </UButton>
    </div>
  </div>
</template>
