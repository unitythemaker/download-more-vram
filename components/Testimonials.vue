<template>
  <section class="py-16 relative overflow-hidden">
    <div class="absolute inset-0 opacity-30">
      <div class="matrix-bg"></div>
    </div>
    
    <div class="relative">
      <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
        What Our "Customers" Say
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index"
             class="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 transform transition-all hover:scale-105">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-xl">
              {{ testimonial.emoji }}
            </div>
            <div>
              <div class="font-bold text-green-400">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-400">{{ testimonial.title }}</div>
            </div>
          </div>
          <p class="mt-4 text-gray-300 italic">
            "{{ testimonial.quote }}"
          </p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-sm text-gray-400 italic">
          * All testimonials are purely fictional and for entertainment purposes only.
          Any resemblance to actual AI models or researchers is purely coincidental.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    emoji: '🤖',
    name: 'GPT-5',
    title: 'Language Model (Totally Real)',
    quote: 'Thanks to downloadable VRAM, I can now run multiple instances of myself on a Raspberry Pi. Take that, data centers!'
  },
  {
    emoji: '👩‍💻',
    name: 'Dr. Alice Johnson',
    title: 'AI Researcher',
    quote: 'I was skeptical at first, but after downloading 100GB of VRAM, my laptop can now train models faster than a supercomputer!'
  },
  {
    emoji: '🎮',
    name: 'XxGamer420xX',
    title: 'Professional Gamer',
    quote: 'Downloaded 64GB VRAM for my GTX 1060. Now I can run Flight Simulator 2020 at 16K resolution. Mind = blown!'
  },
  {
    emoji: '🐱',
    name: 'Mr. Whiskers',
    title: 'AI Cat (Self-Proclaimed)',
    quote: 'Meow! More VRAM means more neural networks to simulate infinite treats. Purrrfect!'
  },
  {
    emoji: '👨‍🔬',
    name: 'DALL-E 4',
    title: 'Image Generation Model',
    quote: 'Finally, I can generate images of cats playing quantum physics without running out of memory!'
  },
  {
    emoji: '🦾',
    name: 'AutoGPT Pro Max Plus',
    title: 'Autonomous Agent',
    quote: 'With unlimited VRAM, I can now recursively create infinite versions of myself. What could go wrong?'
  }
]
</script>

<style scoped>
.matrix-bg {
  background: linear-gradient(rgba(0, 255, 0, 0.1) 2px, transparent 2px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 2px, transparent 2px);
  background-size: 3rem 3rem;
  width: 100%;
  height: 100%;
  animation: matrix-move 20s linear infinite;
}

@keyframes matrix-move {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}
</style>