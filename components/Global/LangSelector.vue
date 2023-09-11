<script lang="ts" setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  const icons = { en: "🇺🇸", fr: "🇫🇷", ro: "🇷🇴", de: "🇩🇪" };

  return locales.value.map((locale) => ({
    name: locale.name,
    code: locale.code,
    icon: icons[locale.code],
  }));
});

const selected = ref(locale.value);

watch(selected, (value) => {
  if (value) {
    return navigateTo(switchLocalePath(value));
  }
});
</script>

<template>
  <select
    v-model="selected"
    class="select select-bordered select-md 0 text-base-content hidden w-full max-w-[10rem] px-5 md:block"
  >
    <option
      v-for="lang in availableLocales"
      :key="lang.code"
      :selected="lang.code === locale.value"
      :value="lang.code"
    >
      {{ lang.icon }}
      {{ lang.name }}
    </option>
  </select>
</template>
