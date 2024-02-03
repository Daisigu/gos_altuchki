<script lang="ts" setup>
const items = [
  '/altuchka-cases/1.jpg',
  '/altuchka-cases/2.webp',
  '/altuchka-cases/4.jpg',
  '/altuchka-cases/3.jpg',
]
definePageMeta({
  title: 'Госальтушки | Главная',
  description: 'Главная страница госальтушки',
})
useSeoMeta({
  ogImage: '/altuchka-cases/4.jpg',
})
</script>
<template>
  <UContainer class="py-10">
    <section
        class="bg-[#EDF2FE] flex sm:flex-row flex-col items-center sm:gap-[40px] sm:py-[50px] sm:px-[100px] px-6 py-6 sm:mb-[100px] mb-[50px]">
      <div class="flex flex-col gap-6 items-start">
        <h1 class="text-[40px] leading-[40px] font-[500]">
          <p>
            Каждому скуфу —
          </p>
          <p class="text-[#1349BE]">
            по альтушке
          </p>
        </h1>
        <p class="text-[16px] font-[500]">
          Прежде, чем получить альтушку, необходимо пройти тест и доказать, что ты скуф
        </p>
        <NuxtLink to="/skuf-test" class="inline-block w-full sm:w-auto">
          <UButton size="xl" block class="px-20  py-4 bg-[#1349BE] hover:bg-blue-600">
            Начать тест
          </UButton>
        </NuxtLink>
      </div>
      <div class="sm:block hidden">
        <img class="w-[760px] h-full" src="/altuchka.png"/>
      </div>
    </section>
    <section>
      <h1 class="text-3xl font-[500] mb-10">Скуфы уже получившие альтушек</h1>
      <UCarousel arrows v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
                 class="rounded-lg overflow-hidden">
        <div class="px-2 w-full h-full">
          <img :src="item" class="w-full h-full rounded-[5px]" draggable="false">
        </div>
      </UCarousel>
    </section>
  </UContainer>
</template>