<script setup lang="ts">
const {session, update} = await useSession()
const {order} = toRefs(session.value)
definePageMeta({
  title: 'Госальтушки | Комната ожидания',
  middleware: ['skuf-test-passed']
})
onMounted(() => {
  setInterval(() => {
    if (order.value > 0) {
      order.value -= Math.floor(Math.random() * 3) + 1
      update({order: order.value})
    }
  }, Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000)
})
</script>
<template>
  <UContainer class="flex flex-col">
    <div class="flex-1 grid place-content-center">
      <h1 class="text-3xl font-semibold mb-10 text-center">
        Вы <span class="text-[#1349BE]">{{ order }}</span> в очереди, пожалуйста ожидайте
      </h1>
      <div class="flex justify-center">
        <img src="/spinner.svg"/>
      </div>
    </div>
  </UContainer>
</template>

