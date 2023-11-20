import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: true,
    light: {
      ...require("./node_modules/daisyui/src/theming")[""],
      primary: "blue",
      secondary: "teal",
    },
  },
  plugins: [require("daisyui")],
}
export default config
