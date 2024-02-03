<script setup lang="ts">

const {session, reset} = await useSession()
const handleReset = async () => {
  await reset()
  navigateTo('/')
}
definePageMeta({
  title: 'Госальтушки | ВАМ БАН',
  middleware: [(to)=>{
    if(session.value.skufTestStatus !=='failed'){
      return abortNavigation()
    }
  }]
})
</script>
<template>
  <UContainer class="py-10 flex flex-col">
    <div class="grid place-content-center text-center flex-1">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl mb-5">Вы были исключены из Скуфов</h1>
        <p class="sm:text-3xl text-xl text-balance mb-10">
          К сожалению, ваш аккаунт был исключен из нашего сообщества, поскольку не соответствует нашим стандартам. Мы
          ценим
          разнообразие мнений, но стремимся к безопасному и позитивному опыту для всех. Ваш аккаунт не соответствует
          этим
          критериям. Спасибо за понимание.
        </p>
        <UButton @click="handleReset" size="xl" class="px-20  py-4 bg-[#1349BE] hover:bg-blue-600">
          Извините Балтика попала в глаз, ошибся в тесте
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
