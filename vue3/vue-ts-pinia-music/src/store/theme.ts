import { ref } from 'vue'
import { defineStore } from 'pinia'

const THEME_KEY = '__theme__';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('red')
  const storeTheme = localStorage.getItem(THEME_KEY)
  if (storeTheme) {
    theme.value = storeTheme
  }
  const updataTheme = () => {
    localStorage.setItem(THEME_KEY, theme.value)
  }
  const changeTheme = () => {
    if (theme.value === 'red') {
      theme.value = 'dark'
    } else {
      theme.value = 'red'
    }
    updataTheme()
  }
  return {
    theme,
    changeTheme
  }
})