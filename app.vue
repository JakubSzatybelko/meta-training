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
        'https://postimg.cc/q6kk32wm',
    },
    { hid: 'og:title', property: 'og:title', content: theming?.pageTitle || '' },
    { hid: 'og:description', property: 'og:description', content: theming?.metaDataDescription || '' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      hid: 'og:url',
      property: 'og:url',
      content:
        theming?.metaDataUrl ||
        'https://postimg.cc/q6kk32wm',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: theming?.metaDataLogo?.url || '/favicon.svg' }],
});
useServerSeoMeta({
  title: theming?.pageTitle || 'Machine Master',
  charset: 'utf-8',
  description:
    theming?.metaDataDescription ||
    'MachineMaster ist eine Online-Plattform zur Suche und zum Kauf von Landmaschinen und landwirtschaftlichen Geräten. Finden Sie eine Vielzahl von Landmaschinen, Traktoren und Erntemaschinen verschiedener Händler und treten Sie mit dem richtigen Händler für Ihre spezifischen Bedürfnisse in Kontakt. Mit den Suchfilteroptionen können Sie die perfekte Maschine für Ihre Anforderungen finden.',
  keywords:
    theming?.metaDataTags ||
    'MachineMaster, Erntemaschinen, landwirtschaftliche Ausrüstung, landwirtschaftliche Maschinen, Händler, Maschinen kaufen, gefilterte Suche, Erntemaschinen kaufen, Mähdrescher, Traktoren, Feldhäcksler, Pflanzmaschinen, Dreschmaschinen, Erntewerkzeuge, Landmaschinenhändler, Landtechnik, Agrartechnik, gebrauchte Erntemaschinen, Neuheiten in der Erntetechnik, landwirtschaftliche Geräte, Anbaugeräte für Erntemaschinen, Ersatzteile für Erntemaschinen, professionelle Erntemaschinen, Hochleistungserntemaschinen, Landwirtschaftliche Maschinenhersteller, Erntemaschinenverleih',
  url: theming?.metaDataUrl || 'https://dev.moerschen.machinemaster.de/',
  ogImage: theming?.metaDataImage?.url || 'https://postimg.cc/q6kk32wm',
  ogUrl: theming?.metaDataUrl || 'https://dev.moerschen.machinemaster.de/',
  ogTitle: theming?.pageTitle || 'Machine Master',
  ogDescription:
    theming?.metaDataDescription ||
    'MachineMaster ist eine Online-Plattform zur Suche und zum Kauf von Landmaschinen und landwirtschaftlichen Geräten. Finden Sie eine Vielzahl von Landmaschinen, Traktoren und Erntemaschinen verschiedener Händler und treten Sie mit dem richtigen Händler für Ihre spezifischen Bedürfnisse in Kontakt. Mit den Suchfilteroptionen können Sie die perfekte Maschine für Ihre Anforderungen finden.',

});
</script>