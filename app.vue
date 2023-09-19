<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
const  theming= ref(null) 
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
  ogImage: theming?.metaDataImage?.url || 'https://media.discordapp.net/attachments/1136207345559539794/1153329446523248741/jakubszatybelko_big_cool_tracktor_400163d3-9bf0-4265-b0c2-5b4099c35401.png?width=1365&height=1365',
  ogUrl: theming?.metaDataUrl || 'https://dev.moerschen.machinemaster.de/',
  ogTitle: theming?.pageTitle || 'Machine Master',
  ogDescription:
    theming?.metaDataDescription ||
    'MachineMaster ist eine Online-Plattform zur Suche und zum Kauf von Landmaschinen und landwirtschaftlichen Geräten. Finden Sie eine Vielzahl von Landmaschinen, Traktoren und Erntemaschinen verschiedener Händler und treten Sie mit dem richtigen Händler für Ihre spezifischen Bedürfnisse in Kontakt. Mit den Suchfilteroptionen können Sie die perfekte Maschine für Ihre Anforderungen finden.',
  
});
</script>