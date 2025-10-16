export const useDarkMode = () => {
  // 使用useState存储主题状态，默认为系统主题
  const colorMode = useState<'light' | 'dark' | 'system'>('color-mode', () => 'system')
  const isDark = useState<boolean>('is-dark', () => false)
  
  // 切换主题模式
  const toggleDarkMode = () => {
    // 在light和dark之间切换，不使用system
    colorMode.value = isDark.value ? 'light' : 'dark'
    applyColorMode()
  }
  
  // 设置特定的主题模式
  const setColorMode = (mode: 'light' | 'dark' | 'system') => {
    colorMode.value = mode
    applyColorMode()
  }
  
  // 应用主题模式
  const applyColorMode = () => {
    if (import.meta.client) {
      // 根据当前模式决定是否应用深色主题
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      // 根据模式设置isDark状态
      if (colorMode.value === 'system') {
        isDark.value = prefersDark
      } else {
        isDark.value = colorMode.value === 'dark'
      }
      
      // 更新HTML元素的class
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // 保存到localStorage
      localStorage.setItem('color-mode', colorMode.value)
    }
  }
  
  // 初始化主题
  onMounted(() => {
    if (import.meta.client) {
      // 从localStorage读取保存的主题设置
      const savedMode = localStorage.getItem('color-mode') as 'light' | 'dark' | 'system' | null
      
      if (savedMode) {
        colorMode.value = savedMode
      }
      
      // 应用主题设置
      applyColorMode()
      
      // 监听系统主题变化
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (colorMode.value === 'system') {
          isDark.value = e.matches
          if (e.matches) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }
      })
    }
  })
  
  return {
    colorMode,
    isDark,
    toggleDarkMode,
    setColorMode
  }
}