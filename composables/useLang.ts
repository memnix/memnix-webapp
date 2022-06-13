import { useI18n } from 'vue-i18n'

// useLang
export const useLang = () => {
  const { t } = useI18n()
  return {
    t,
  }
}
