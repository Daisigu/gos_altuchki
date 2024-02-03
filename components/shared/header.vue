<script setup lang="ts">
const {session} = await useSession()
</script>
<template>
  <header @click="()=>console.log(session)" class="sticky top-0 bg-white z-10  w-full py-4">
    <UContainer>
      <div class="flex justify-center">
        <NuxtLink to="/">
          <img class="h-[30px]" src='/logo.svg' width="343" height="30"/>
        </NuxtLink>
      </div>
    </UContainer>
  </header>
</template>

