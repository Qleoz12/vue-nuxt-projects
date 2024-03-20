// https://nuxt.com/docs/api/configuration/nuxt-config

import { locales } from './assets/data/locales';
import { readFileSync, watch as fsWatch } from 'fs';
import { genLocalesJson } from './scripts/gen-locale';


const baseUrl =
	process.env.NODE_ENV == 'development'
		? 'http://localhost:3000'
		: 'https://misskey-hub.net'; //cambiar esto por la url de /prod /dev / qa

export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
	'@nuxt/content',
	'@nuxtjs/tailwindcss',
	'@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  content: {
    documentDriven: true
  },
  i18n: {
		baseUrl,
		vueI18n: './i18n.config.ts',
		locales,
		lazy: true,
		langDir: 'locales_dist',
		defaultLocale: 'ja', // se deja para que solo redireccione a en/es y se mantenga siempre el idioma 
		// ▼ Defaultルートは、nitroプラグインでオーバーライドする
		// 　 リンクはuseGLocalePath（ラッパー）を使う
		strategy: 'prefix_and_default',
		trailingSlash: true,
	},
  hooks: {
		'build:before': async (...args) => {
			// genApiTranslationFiles(...args);
			genLocalesJson(...args);
			if (process.env.NODE_ENV === 'development') {
				fsWatch('./locales/', (ev, filename) => {
					if (filename && filename.endsWith('.yml')) {
						genLocalesJson(...args);
					}
				});
			}
			// await fetchCrowdinMembers(...args);
		},
	},
})
