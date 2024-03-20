import type { LocaleObject } from '@nuxtjs/i18n';

export const localesConst = [
	{ files: [ 'es-CO.json' ], code: 'es', iso: 'es-CO', name: 'Spanish' },
	{ files: [ 'en-US.json' ], code: 'en', iso: 'en-US', name: 'English' },
] as const;

export type LocaleCodes = typeof localesConst[number]['code'];

export const locales = localesConst as unknown as LocaleObject[];