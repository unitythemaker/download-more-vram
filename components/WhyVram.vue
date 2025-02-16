<template>
  <section class="py-16">
    <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-green-400 text-transparent bg-clip-text">
      Why Download More VRAM?
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(reason, index) in reasons" :key="index"
           class="p-6 bg-gray-800 rounded-lg border border-gray-700 transform transition-all hover:scale-105 hover:border-green-500">
        <div class="text-4xl mb-4">{{ reason.emoji }}</div>
        <h3 class="text-xl font-bold text-green-400 mb-2">{{ reason.title }}</h3>
        <p class="text-gray-300">{{ reason.description }}</p>
      </div>
    </div>

    <div class="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div class="flex-1 min-w-[200px]">
          <div class="text-2xl font-bold text-green-400 mb-2">VRAM vs Cloud GPUs</div>
          <p class="text-gray-300">
            Why pay $2.50/hour for cloud GPUs when you can download unlimited VRAM for free?
            Our proprietary technology beats everything else in the market!
          </p>
        </div>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-green-400">✓</span>
            <span>No usage limits</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-green-400">✓</span>
            <span>Zero latency</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-green-400">✓</span>
            <span>Infinite scaling</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-green-400">✓</span>
            <span>100% imaginary uptime</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    emoji: '🚀',
    title: 'Infinite Possibilities',
    description: 'Train GPT-5 on your laptop! Run DALL-E 3 locally! The sky is no longer the limit with our downloadable VRAM!'
  },
  {
    emoji: '💰',
    title: 'Save Money',
    description: 'Why buy expensive GPUs when you can just download more VRAM? Our technology is 100% free and 100% imaginary!'
  },
  {
    emoji: '🌍',
    title: 'Save the Planet',
    description: 'Our virtual VRAM produces zero heat and consumes zero electricity. The greenest solution in the universe!'
  },
  {
    emoji: '🔒',
    title: 'Privacy First',
    description: 'Keep your AI models local with unlimited VRAM. No more data sharing with cloud providers!'
  },
  {
    emoji: '⚡',
    title: 'Instant Upgrade',
    description: 'No need to wait for shipping or installation. Download and use immediately!'
  },
  {
    emoji: '🎮',
    title: 'Gaming Ready',
    description: 'Run Cyberpunk 2077 at 16K resolution with ray tracing! (Results may vary in reality)'
  }
]
</script>