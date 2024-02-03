<script setup lang="ts">
import type {TSkufTestQuestion} from "~/types/skuf-test";

const step = ref(0)
const {handleSkufTestFailed} = useSkufTestStore()
const questions: TSkufTestQuestion[] = [
  {
    type: 'images',
    title: 'Какая игра вам больше симпатизирует?',
    images: ['/dota.jpg', '/tanki.webp'],
    rightAnswerIndex: 1
  },
  {
    type: 'images',
    title: 'Какой напиток вы бы предпочли?',
    images: ['/hunt.jpg', '/juice.webp'],
    rightAnswerIndex: 0
  },
  {
    type: 'images',
    title: 'Какое телосложение из предсталвенных больше соответствует вашему?',
    images: ['/vanomas.jpg', '/papich.jpeg'],
    rightAnswerIndex: 0
  },
  {
    type: 'images',
    title: 'Как бы вы предпочли провести вечер?',
    images: ['/skuf.jpg', 'club.jpg'],
    rightAnswerIndex: 0
  }
]
const handleAnswer = (question: TSkufTestQuestion, answer: number) => {
  if (question.rightAnswerIndex !== answer) {
    handleSkufTestFailed()
  }
  increaseStep()
}
const increaseStep = () => {
  step.value += 1
}
</script>

<template>
  <UContainer class="py-10">
    <UProgress class="mb-10" :value="step" :max="questions.length"/>
    <template v-for="(question, key) in questions">
      <FeaturesSkufTestQuestion @answer="handleAnswer" v-if="key == step" :key="question.title" :question="question"/>
    </template>
  </UContainer>
</template>

<style scoped>

</style>