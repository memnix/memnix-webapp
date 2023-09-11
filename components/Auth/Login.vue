<script lang="ts" setup>
import * as yup from "yup";

const { t } = useI18n();

const onSubmit = async (values: { email: string; password: string }) => {
  const res = await login(values.email, values.password);
  if (res) {
    const token = useCookie("jwt-token", {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    token.value = res.token; // set token to cookie

    return navigateTo("/dashboard");
  }
};

const validateEmail = yup.string().email().required();
const validatePassword = yup.string().required().min(8).max(70);
</script>

<template>
  <div class="flex flex-col gap-4 p-4 md:p-8">
    <Form @submit="onSubmit">
      <div class="">
        <label class="label">
          <span class="label-text">{{ t("auth.email") }}</span>
        </label>
        <Field v-slot="{ field, meta }" :rules="validateEmail" name="email">
          <input
            :class="!meta.valid && meta.touched ? 'input-error' : ''"
            class="input-bordered input w-full transition duration-100"
            placeholder="Enter your email"
            type="email"
            v-bind="field"
          />
        </Field>
        <ErrorMessage name="email" />
      </div>

      <div class="">
        <label class="label">
          <span class="label-text">{{ t("auth.password") }}</span>
        </label>
        <Field
          v-slot="{ field, meta }"
          :rules="validatePassword"
          name="password"
        >
          <input
            :class="!meta.valid && meta.touched ? 'input-error' : ''"
            class="input-bordered input w-full transition duration-100"
            placeholder="Enter your password"
            type="password"
            v-bind="field"
          />
        </Field>
        <ErrorMessage name="password" />
      </div>
      <div class="pt-6">
        <button class="btn-primary btn transition duration-100 w-full">
          {{ t("auth.login") }}
        </button>
      </div>
    </Form>
  </div>
</template>

<style scoped></style>
