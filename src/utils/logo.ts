export const getLogo = (logo: string): string => {
  switch (logo) {
    case 'Astro':
      return 'astro-icon.svg'
    case 'CSS':
      return 'css-3.svg'
    case 'deno':
      return 'deno.svg'
    case 'Flutter':
      return 'flutter.svg'
    case 'HTML':
      return 'html-5.svg'
    case 'JavaScript':
      return 'javascript.svg'
    case 'Kotlin':
      return 'kotlin-icon.svg'
    case 'Next.js':
      return 'nextjs-icon.svg'
    case 'Swift':
      return 'swift.svg'
    case 'TailwindCSS':
      return 'tailwindcss-icon.svg'
    case 'TypeScript':
      return 'typescript-icon-round.svg'
    default:
      return 'sample.jpg'
  }
}
