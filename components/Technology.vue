<template>
  <section class="py-16">
    <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-purple-400 text-transparent bg-clip-text">
      Our "Revolutionary" Technology
    </h2>

    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8">
        <div v-for="(step, index) in techSteps" :key="index"
             class="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition-all hover:border-green-500"
             :class="{ 'animate-pulse': index === activeStep }">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-xl font-bold">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold text-green-400">{{ step.title }}</h3>
          </div>
          <p class="mt-3 text-gray-300">{{ step.description }}</p>
        </div>
      </div>

      <div class="relative">
        <div class="aspect-square bg-gray-800 rounded-lg border border-gray-700 p-8 overflow-hidden">
          <!-- Simple, elegant visualization -->
          <div class="vram-visualization">
            <!-- Moving particles -->
            <div v-for="n in 3" :key="n" class="particle-ring" :style="{ '--delay': `${n * -10}s` }">
              <div v-for="i in 8" :key="i" 
                   class="particle" 
                   :style="{ '--i': i }">
              </div>
            </div>
            
            <!-- Central core -->
            <div class="core">
              <div class="core-inner"></div>
            </div>
          </div>

          <!-- Status overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center bg-gray-900/80 p-4 rounded-lg backdrop-blur-sm">
              <div class="text-6xl mb-4">{{ techEmoji[activeStep] }}</div>
              <div class="text-green-400 font-bold">{{ techStatus }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 max-w-2xl mx-auto">
      <div class="bg-red-900/20 border border-red-800 rounded-lg p-6">
        <h3 class="text-xl font-bold text-red-400 mb-2 flex items-center gap-2">
          <span>⚠️</span> Legal Disclaimer
        </h3>
        <p class="text-gray-300 text-sm">
          Our "quantum-based" VRAM downloading technology is powered by pure imagination and runs on 
          approximately 7.5 gigawatts of humor. Any resemblance to actual technology is purely coincidental. 
          Side effects may include uncontrollable laughter, eye-rolling, and sudden urges to explain why 
          downloading VRAM is impossible.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const techSteps = [
  {
    title: 'Quantum VRAM Synthesis',
    description: 'Our proprietary quantum algorithms create virtual VRAM particles in the cloud, using advanced memetic engineering and pure imagination.'
  },
  {
    title: 'Neural Bandwidth Optimization',
    description: 'We leverage AI-powered blockchain technology to compress the downloadable VRAM into packets small enough to fit through your internet tubes.'
  },
  {
    title: 'GPU Integration',
    description: 'Through the magic of reverse-engineered drivers and some very convincing HTTP requests, we convince your GPU it has more memory than it actually does.'
  },
  {
    title: 'Memory Materialization',
    description: 'Using quantum entanglement and the power of positive thinking, we materialize the downloaded VRAM directly into your graphics card.'
  }
]

const techEmoji = ['🌌', '🧠', '🔌', '✨']
const techStatus = ref('Initializing Quantum Core...')
const activeStep = ref(0)

// Cycle through steps for animation
onMounted(() => {
  setInterval(() => {
    activeStep.value = (activeStep.value + 1) % techSteps.length
    techStatus.value = `Processing ${techSteps[activeStep.value].title}...`
  }, 3000)
})
</script>

<style scoped>
.vram-visualization {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.particle-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate 20s linear infinite;
  animation-delay: var(--delay, 0s);
}

.particle {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10b981;
  top: 50%;
  left: 50%;
  transform-origin: 100px 0;
  animation: particle-glow 2s ease-in-out infinite;
  transform: rotate(calc(45deg * var(--i))) translateX(100px);
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes particle-glow {
  0%, 100% { 
    opacity: 0.3;
    box-shadow: 0 0 10px #10b981;
  }
  50% { 
    opacity: 1;
    box-shadow: 0 0 20px #10b981, 0 0 30px #10b981;
  }
}

.core {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #059669, #10b981);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: core-pulse 4s ease-in-out infinite;
}

.core-inner {
  width: 60%;
  height: 60%;
  background: #111827;
  border-radius: 50%;
  position: relative;
}

.core-inner::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  background: linear-gradient(45deg, #059669, transparent, #10b981);
  animation: core-inner-rotate 3s linear infinite;
}

@keyframes core-pulse {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(16, 185, 129, 0.5);
    transform: scale(1.1);
  }
}

@keyframes core-inner-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>