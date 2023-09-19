<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: 'Machine Master',
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    { name: 'charset', content: 'utf-8'},
    { name: 'description', content: 'elo' },
    { name: 'keywords', content: 'elo' },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https://media.discordapp.net/attachments/1136207345559539794/1153651377483030598/jakubszatybelko_big_cool_tracktor_51cb4751-69c0-46db-8c38-6b2ff00b08cc.png?width=1365&height=1365',
    },
    { hid: 'og:title', property: 'og:title', content:  'elo' },
    { hid: 'og:description', property: 'og:description', content:  '' },
    { hid: 'og:type', property: 'og:type', content:  'website'},
    { hid: 'og:url', property: 'og:url', content:  'https://media.discordapp.net/attachments/1136207345559539794/1153651377483030598/jakubszatybelko_big_cool_tracktor_51cb4751-69c0-46db-8c38-6b2ff00b08cc.png?width=1365&height=1365' },
    { hid: 'twitter:title', property: 'twitter:title', content:  'elo' },
    { hid: 'twitter:description', property: 'twitter:description', content:  'elo' },
    { hid: 'twitter:image', property: 'twitter:image', content:  'elo' },
    { hid: 'twitter:card', property: 'twitter:card', content:  'elo' },
  ],
});
</script>