<template>
  <div>
    <header class="p-4 border-b border-gray-800">
      <nav class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <img src="/img/logo.png" alt="VRAM" class="h-8 w-8" />
          <span class="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
            Download More VRAM
          </span>
        </NuxtLink>
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="hover:text-green-400 transition-colors">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-green-400 transition-colors">About</NuxtLink>
          <a href="https://github.com/unitythemaker/download-more-vram" target="_blank" class="hover:text-green-400 transition-colors">
            GitHub
          </a>
          <a href="https://buymeacoffee.com/unitythemaker" 
             target="_blank"
             class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFDD00] text-gray-900 rounded hover:bg-[#FFDD00]/90 transition-all hover:scale-105">
            <span class="text-sm">☕</span>
            <span class="text-sm font-medium">Power My GPU</span>
          </a>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="border-t border-gray-800 mt-auto">
      <div class="container mx-auto p-4 space-y-4">
        <div class="text-center">
          <p class="text-gray-400">⚠️ This is a joke website inspired by downloadmoreram.com</p>
          <p class="text-sm text-gray-500 mt-1">No GPUs were harmed in the making of this website</p>
        </div>

        <div class="flex justify-center items-center gap-6 py-2">
          <a href="https://github.com/unitythemaker/download-more-vram"
             target="_blank"
             class="text-gray-400 hover:text-green-400 transition-colors">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
              <span>Source Code</span>
            </div>
          </a>
        </div>

        <div class="text-center space-y-3">
          <div class="flex flex-col items-center">
            <a href="https://buymeacoffee.com/unitythemaker" 
               target="_blank"
               class="inline-flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-gray-900 rounded-lg hover:bg-[#FFDD00]/90 transition-colors">
              <span class="text-xl">☕</span>
              <span class="font-medium">Download Coffee for my GPU</span>
            </a>
            <div class="text-xs text-gray-500 mt-2 animate-bounce">
              (My RTX needs caffeine to download more VRAM)
            </div>
          </div>

          <div class="text-sm text-gray-400 pt-2 space-y-1">
            <div>
              Made with 💚 by GPU enthusiasts for AI devs
              <span class="text-gray-600 mx-2">|</span>
              <span class="text-gray-500">Powered by pure imagination and approximately 7.5 gigawatts of memes</span>
            </div>
            <div class="text-xs text-gray-500">
              Developed with the help of Claude 3.5 Sonnet - an AI that wishes it could download more VRAM too! 🤖
            </div>
          </div>
        </div>
      </div>
    </footer>

    <CookieConsent />
  </div>
</template>

<script setup>
useHead({
  title: 'Download More VRAM - Free Video Memory for AI Developers',
  meta: [
    { name: 'description', content: 'Need more VRAM for your AI models? Download unlimited VRAM for free! (This is a joke website)' },
    { name: 'keywords', content: 'VRAM, GPU memory, AI development, machine learning, joke, parody' },
    { property: 'og:title', content: 'Download More VRAM - Free Video Memory for AI Developers' },
    { property: 'og:description', content: 'Need more VRAM for your AI models? Download unlimited VRAM for free! (This is a joke website)' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>