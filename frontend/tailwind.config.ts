import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Roboto fallback', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
