// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt.js TypeScript project',
      meta: [    
      { name: 'description', content: 'elo' },
      { name: 'keywords', content: 'elo' },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://media.discordapp.net/attachments/1136207345559539794/1153329446523248741/jakubszatybelko_big_cool_tracktor_400163d3-9bf0-4265-b0c2-5b4099c35401.png?width=1365&height=1365',
      },
      { hid: 'og:title', property: 'og:title', content:  'elo' },
      { hid: 'og:description', property: 'og:description', content:  'elo' },
    ],
    },
  },
  ssr:true,
})
