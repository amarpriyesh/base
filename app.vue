<script setup lang="ts">
const appConfig = useAppConfig();

const seoConfig = appConfig.seoConfig;

if (seoConfig) {
  useHead({
    title: seoConfig.title,
  })

  useSeoMeta({
    title: seoConfig.title,
    description: seoConfig.description,

    ogType: 'website',
    ogUrl: seoConfig.url,
    ogTitle: seoConfig.title,
    ogDescription: seoConfig.description,
    ogImage: seoConfig.image,

    twitterCard: seoConfig.twitter.creatorUsername as any,
    twitterTitle: seoConfig.title,
    twitterDescription: seoConfig.description,
    twitterCreator: seoConfig.twitter.creatorUsername,
    twitterImage: seoConfig.image,
  })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
