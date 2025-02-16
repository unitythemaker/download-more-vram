<template>
  <div class="min-h-screen text-white relative">
    <div class="fixed inset-0 bg-black">
      <img src="/img/background.png" alt="" class="w-full h-full object-cover opacity-30 animate-subtle-pulse" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
    </div>
    <div class="relative z-10">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Download More VRAM - Free Video Memory for AI Development',
  titleTemplate: '%s | DownloadMoreVRAM',
  meta: [
    { name: 'description', content: 'Need more VRAM for your AI models? Download unlimited VRAM for free! The most reliable source of imaginary VRAM for your GPU. (This is a parody website)' },
    { name: 'keywords', content: 'VRAM, GPU memory, AI development, machine learning, parody, humor, download vram, AI models' },
    { property: 'og:title', content: 'Download More VRAM - Free Video Memory for AI Development' },
    { property: 'og:description', content: 'Need more VRAM for your AI models? Download unlimited VRAM for free! The most reliable source of imaginary VRAM for your GPU. (This is a parody website)' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/img/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Download More VRAM - Free Video Memory for AI Development' },
    { name: 'twitter:description', content: 'Need more VRAM for your AI models? Download unlimited VRAM for free! The most reliable source of imaginary VRAM for your GPU. (This is a parody website)' },
    { name: 'twitter:image', content: '/img/og-image.png' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }
  ]
})
</script>

<style>
.animate-subtle-pulse {
  animation: subtle-pulse 8s ease-in-out infinite;
}

@keyframes subtle-pulse {
  0% {
    opacity: 0.25;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(1.02);
  }
  100% {
    opacity: 0.25;
    transform: scale(1);
  }
}
</style>
