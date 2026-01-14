import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://flightng.com',
  integrations: [
    starlight({
      title: 'FlightNG',
      description: '下一代飞控固件 | Next-generation flight controller firmware',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: {
        github: 'https://github.com/flightng',
      },
      defaultLocale: 'zh',
      locales: {
        zh: {
          label: '简体中文',
        },
        en: {
          label: 'English',
        },
      },
      sidebar: [
        {
          label: 'Fidelity X 固件',
          translations: { en: 'Fidelity X Firmware' },
          items: [
            { slug: 'fydelix' },
            { slug: 'fydelix/getting-started' },
            { slug: 'fydelix/features' },
            { slug: 'fydelix/supported-boards' },
            { slug: 'fydelix/flashing' },
            {
              label: '配置指南',
              translations: { en: 'Configuration' },
              items: [
                { slug: 'fydelix/configuration' },
                { slug: 'fydelix/configuration/pid-tuning' },
                { slug: 'fydelix/configuration/rate-profiles' },
                { slug: 'fydelix/configuration/failsafe' },
              ],
            },
            { slug: 'fydelix/cli-reference' },
          ],
        },
        {
          label: '其他项目',
          translations: { en: 'Other Projects' },
          items: [
            { slug: 'atbetaflight' },
            { slug: 'atbetaflight/tutorial' },
          ],
        },
        {
          label: '赞助',
          translations: { en: 'Sponsor' },
          slug: 'sponsor',
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#6366f1',
          },
        },
      ],
      components: {
        Hero: './src/components/Hero.astro',
      },
      credits: false,
    }),
  ],
});
