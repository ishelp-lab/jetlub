import { useTheme } from '@/hooks/useTheme'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-primary dark:bg-primary transition-colors cursor-pointer"
      aria-label="Alternar tema"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-white dark:text-white" />
      ) : (
        <SunIcon className="w-5 h-5 text-uaipy-secondary dark:text-uaipy-secondary" />
      )}
    </button>
  )
}