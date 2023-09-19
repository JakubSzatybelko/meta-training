<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
const  theming= ref(null) 
useHead({
  title: theming?.pageTitle || 'Machine Master',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' },
    {
      name: 'description',
      content:
        theming?.metaDataDescription ||
        'MachineMaster ist eine Online-Plattform zur Suche und zum Kauf von Landmaschinen und landwirtschaftlichen Geräten. Finden Sie eine Vielzahl von Landmaschinen, Traktoren und Erntemaschinen verschiedener Händler und treten Sie mit dem richtigen Händler für Ihre spezifischen Bedürfnisse in Kontakt. Mit den Suchfilteroptionen können Sie die perfekte Maschine für Ihre Anforderungen finden.',
    },
    {
      name: 'keywords',
      content:
        theming?.metaDataTags ||
        'MachineMaster, Erntemaschinen, landwirtschaftliche Ausrüstung, landwirtschaftliche Maschinen, Händler, Maschinen kaufen, gefilterte Suche, Erntemaschinen kaufen, Mähdrescher, Traktoren, Feldhäcksler, Pflanzmaschinen, Dreschmaschinen, Erntewerkzeuge, Landmaschinenhändler, Landtechnik, Agrartechnik, gebrauchte Erntemaschinen, Neuheiten in der Erntetechnik, landwirtschaftliche Geräte, Anbaugeräte für Erntemaschinen, Ersatzteile für Erntemaschinen, professionelle Erntemaschinen, Hochleistungserntemaschinen, Landwirtschaftliche Maschinenhersteller, Erntemaschinenverleih',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        theming?.metaDataImage?.url ||
        'https://media.discordapp.net/attachments/1136207345559539794/1153329446523248741/jakubszatybelko_big_cool_tracktor_400163d3-9bf0-4265-b0c2-5b4099c35401.png?width=1365&height=1365',
    },
    { hid: 'og:title', property: 'og:title', content: theming?.pageTitle || '' },
    { hid: 'og:description', property: 'og:description', content: theming?.metaDataDescription || '' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      hid: 'og:url',
      property: 'og:url',
      content:
        theming?.metaDataUrl ||
        'https://media.discordapp.net/attachments/1136207345559539794/1153329446523248741/jakubszatybelko_big_cool_tracktor_400163d3-9bf0-4265-b0c2-5b4099c35401.png?width=1365&height=1365',
    },
    { hid: 'twitter:title', property: 'twitter:title', content: theming?.pageTitle || 'Machine Master' },
    { hid: 'twitter:description', property: 'twitter:description', content: theming?.metaDataDescription || '' },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content:
        theming?.metaDataImage?.url ||
        'https://media.discordapp.net/attachments/1136207345559539794/1153329446523248741/jakubszatybelko_big_cool_tracktor_400163d3-9bf0-4265-b0c2-5b4099c35401.png?width=1365&height=1365',
    },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: theming?.metaDataLogo?.url || '/favicon.svg' }],
});
</script>