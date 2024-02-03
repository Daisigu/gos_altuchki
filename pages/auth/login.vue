<script setup lang="ts">
import {object, string, type InferType} from 'yup'

definePageMeta({
  layout: 'login'
})
const formData = ref({
  email: "asfasfasfasfsfasf@mail.ru",
  password: "124124124214124",
})
const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
})
const handleLogin = async () => {
  await useToken().setToken('ajsfjasfjasfj')
  return navigateTo('/')
}
</script>
<template>
  <div class="container mx-auto grid place-items-center">
    <div class="w-full max-w-[500px]">
      <h1 class="text-[32px] text-center mb-[40px]">Login</h1>
      <UForm :state="formData" :schema="schema" @submit="handleLogin" class="w-full flex flex-col items-stretch gap-5">
        <UFormGroup label="Email" name="email">
          <UInput v-model="formData.email"/>
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput type="password" v-model="formData.password"/>
        </UFormGroup>
        <UButton type="submit" block>
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>


