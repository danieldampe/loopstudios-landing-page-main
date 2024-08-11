/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        mobile: 375,
        desktop: 1440
      },
      maxWidth: {
        container: 1115
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        'josefin-sans': '"Josefin Sans", sans-serif', /* 300 */
        'alata-regular': '"Alata", sans-serif' /* 400 */
      },
      backgroundImage: {
        'image-mobile-hero': 'url("/src/assets/images/mobile/image-hero.jpg")',
        'image-desktop-hero': 'url("/src/assets/images/desktop/image-hero.jpg")'
      }
    }
  },
  plugins: []
}
