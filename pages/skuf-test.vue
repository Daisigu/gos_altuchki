<script setup lang="ts">
import type {TSkufTestQuestion} from "~/types/skuf-test";

const {session} = await useSession()

const step = ref(0)
const {handleSkufTestFailed, handleSkufTestSuccess} = useSkufTestStore()
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
watchEffect(() => {
  if (step.value >= questions.length) {
    handleSkufTestSuccess()
  }
})
const increaseStep = () => {
  step.value += 1
}
definePageMeta({
  middleware: ['skuf-test']
})
</script>

<template>
  <UContainer class="py-10 flex flex-col">
    <template v-if="step<questions.length">
      <UProgress class="mb-10" :value="step" :max="questions.length"/>
      <template v-for="(question, key) in questions">
        <FeaturesSkufTestQuestion @answer="handleAnswer" v-if="key == step" :key="question.title" :question="question"/>
      </template>
    </template>
    <template v-else>
      <div class="flex-1 grid place-content-center">
        <h2 class="sm:text-3xl text-center sm:max-w-[50vw] whitespace-break-spaces">Поздравляем с прохождением теста!
          <br/>
          Вы будете направлены на страницу с очередью
          на выдачу альтушки</h2>
      </div>
    </template>
  </UContainer>
</template>
