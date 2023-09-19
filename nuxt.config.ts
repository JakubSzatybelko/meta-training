// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
      title: 'Machine Master',
      meta: [
        { name: 'author', content: 'Venture Labs GmbH' },
        {
          name: 'description',
          content:
            'MachineMaster ist eine Online-Plattform zur Suche und zum Kauf von Landmaschinen und landwirtschaftlichen Geräten. Finden Sie eine Vielzahl von Landmaschinen, Traktoren und Erntemaschinen verschiedener Händler und treten Sie mit dem richtigen Händler für Ihre spezifischen Bedürfnisse in Kontakt. Mit den Suchfilteroptionen können Sie die perfekte Maschine für Ihre Anforderungen finden.',
        },
        {
          name: 'keywords',
          content:
            'MachineMaster, Erntemaschinen, landwirtschaftliche Ausrüstung, landwirtschaftliche Maschinen, Händler, Maschinen kaufen, gefilterte Suche, Erntemaschinen kaufen, Mähdrescher, Traktoren, Feldhäcksler, Pflanzmaschinen, Dreschmaschinen, Erntewerkzeuge, Landmaschinenhändler, Landtechnik, Agrartechnik, gebrauchte Erntemaschinen, Neuheiten in der Erntetechnik, landwirtschaftliche Geräte, Anbaugeräte für Erntemaschinen, Ersatzteile für Erntemaschinen, professionelle Erntemaschinen, Hochleistungserntemaschinen, Landwirtschaftliche Maschinenhersteller, Erntemaschinenverleih',
        },
      ],
    },
  },
})
