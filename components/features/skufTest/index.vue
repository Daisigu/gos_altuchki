<script setup lang="ts">
onBeforeRouteLeave(()=>{
  useSkufTestStore().isSkufTestModalOpen = false
})
</script>
<template>
  <UModal v-model="useSkufTestStore().isSkufTestModalOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Скуф тест
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        <template #default>
          <p>
            Прежде чем получить альтушку нужно подтвердить, что вы скуф, для этого ответье на несколько вопросов.
          </p>
        </template>
        <template #footer>
          <NuxtLink to="/skuf-test" @click="">
            <UButton block>
              Начать тест
            </UButton>
          </NuxtLink>
        </template>
      </UCard>
  </UModal>
</template>


