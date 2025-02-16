<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <div class="text-center space-y-6 py-16">
      <h1 class="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
        Download More VRAM
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Struggling with OOM errors? Can't fit your LLMs? Download unlimited VRAM now! 
        Perfect for self-hosted AI enthusiasts! 🚀
      </p>
      <div class="flex justify-center gap-4">
        <button @click="scrollTo('download')" class="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-105">
          Download Now
        </button>
        <button @click="scrollTo('calculator')" class="border border-green-500 text-green-400 px-8 py-3 rounded-lg hover:bg-green-500/10 transition-all">
          Calculate Needs
        </button>
      </div>
    </div>

    <!-- VRAM Calculator -->
    <div id="calculator" class="scroll-mt-8 max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 class="text-2xl font-bold text-green-400 mb-6">VRAM Calculator</h2>
      <div class="space-y-4">
        <div v-for="(model, index) in aiModels" :key="index" class="flex items-center gap-4">
          <input type="checkbox" v-model="model.selected" class="w-5 h-5 rounded border-gray-600">
          <span class="flex-1">{{ model.name }}</span>
          <span class="text-green-400">{{ model.vram }}GB</span>
        </div>
        <div class="pt-4 border-t border-gray-700">
          <div class="flex justify-between items-center">
            <span class="text-lg">Total VRAM Needed:</span>
            <span class="text-2xl font-bold text-green-400">{{ totalVramNeeded }}GB</span>
          </div>
          <div v-if="totalVramNeeded > 0" class="mt-4">
            <button @click="downloadCalculatedVram" class="w-full text-center bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
              Download {{ totalVramNeeded }}GB VRAM
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Why VRAM Section -->
    <WhyVram />

    <!-- Technology Section -->
    <Technology />

    <!-- VRAM Checker -->
    <div id="checker" class="scroll-mt-8">
      <VramChecker />
    </div>

    <!-- Legal Disclaimer -->
    <div class="max-w-2xl mx-auto">
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

    <!-- VRAM Packages -->
    <div id="download" class="scroll-mt-8 mt-8 space-y-8">
      <h2 class="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-green-400 text-transparent bg-clip-text">
        Choose Your VRAM Package
      </h2>
      <div v-if="!downloading" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="vramPack in vramPackages" :key="vramPack.size" 
             class="border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-all transform hover:-translate-y-1 cursor-pointer"
             @click="startDownload(vramPack)">
          <div class="text-2xl font-bold text-green-400">{{ vramPack.size }} GB</div>
          <div class="text-gray-400 mt-2">{{ vramPack.type }}</div>
          <ul class="mt-4 space-y-2 text-sm">
            <li v-for="feature in vramPack.features" :key="feature" class="flex items-center">
              <span class="text-green-400 mr-2">✓</span>
              {{ feature }}
            </li>
          </ul>
          <button class="mt-6 w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-md hover:opacity-90 transition-opacity">
            Download Now
          </button>
        </div>
      </div>

      <!-- Download Progress -->
      <div v-else class="max-w-2xl mx-auto">
        <DownloadProgress
          :package="selectedPackage"
          :progress="progress"
          :status="downloadStatus"
          :complete="downloadComplete"
          @reset="resetDownload"
        />
      </div>
    </div>

    <!-- AI Model Zoo -->
    <AiModelZoo />

    <!-- Testimonials -->
    <Testimonials />
  </div>
</template>

<script setup>
import WhyVram from '../components/WhyVram.vue'
import Technology from '../components/Technology.vue'
import Testimonials from '../components/Testimonials.vue'
import VramChecker from '../components/VramChecker.vue'
import AiModelZoo from '../components/AiModelZoo.vue'
import DownloadProgress from '../components/DownloadProgress.vue'

const downloading = ref(false)
const progress = ref(0)
const downloadComplete = ref(false)
const downloadStatus = ref('')
const selectedPackage = ref(null)

const aiModels = ref([
  { name: 'Stable Diffusion XL', vram: 8, selected: false },
  { name: 'LLaMA 2 70B', vram: 140, selected: false },
  { name: 'GPT-3 175B', vram: 350, selected: false },
  { name: 'DALL-E 3', vram: 12, selected: false },
  { name: 'Whisper Large v3', vram: 6, selected: false },
  { name: 'Custom Fine-tuning', vram: 24, selected: false }
])

const totalVramNeeded = computed(() => {
  return aiModels.value
    .filter(model => model.selected)
    .reduce((total, model) => total + model.vram, 0)
})

const vramPackages = [
  {
    size: 4,
    type: 'GDDR6',
    features: [
      'Perfect for small LLMs',
      'Stable Diffusion ready',
      'No CUDA errors',
      '24/7 imaginary support'
    ]
  },
  {
    size: 12,
    type: 'GDDR6X',
    features: [
      'Run multiple LLMs',
      'Better than downloading RAM',
      'RTX-like performance',
      'Cloud-free computing'
    ]
  },
  {
    size: 24,
    type: 'HBM3',
    features: [
      'Enterprise-grade memory',
      '4K AI upscaling ready',
      'Unlimited fine-tuning',
      'Local LLM paradise'
    ]
  },
  {
    size: 48,
    type: 'HBM3e',
    features: [
      'Data center capacity',
      'AGI preparation kit',
      'Quantum-ready VRAM',
      'Infinite AI potential'
    ]
  }
]

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}

const startDownload = (vramPack) => {
  selectedPackage.value = vramPack
  downloading.value = true
  progress.value = 0
  downloadComplete.value = false
  downloadStatus.value = 'Initializing VRAM download...'

  const steps = [
    { progress: 5, status: 'Initializing quantum memory controller...', delay: 800 },
    { progress: 10, status: 'Detecting GPU architecture...', delay: 1000 },
    { progress: 15, status: 'Establishing neural pathway connection...', delay: 900 },
    { progress: 20, status: 'Bypassing hardware limitations...', delay: 1200 },
    { progress: 25, status: 'Generating synthetic memory addresses...', delay: 800 },
    { progress: 30, status: 'Configuring tensor flow matrices...', delay: 1100 },
    { progress: 35, status: 'Optimizing memory timings...', delay: 900 },
    { progress: 40, status: 'Injecting CUDA core modifications...', delay: 1000 },
    { progress: 45, status: 'Synthesizing virtual memory modules...', delay: 1200 },
    { progress: 50, status: 'Calibrating quantum entanglement...', delay: 1100 },
    { progress: 55, status: 'Downloading more bandwidth...', delay: 900 },
    { progress: 60, status: 'Implementing blockchain verification...', delay: 1000 },
    { progress: 65, status: 'Overclocking imagination processor...', delay: 800 },
    { progress: 70, status: 'Compressing space-time continuum...', delay: 1200 },
    { progress: 75, status: 'Allocating hyperdimensional buffers...', delay: 900 },
    { progress: 80, status: 'Extending neural memory pathways...', delay: 1000 },
    { progress: 85, status: 'Stabilizing quantum fluctuations...', delay: 1100 },
    { progress: 90, status: 'Engaging AI-powered memory controller...', delay: 900 },
    { progress: 95, status: 'Finalizing memory crystallization...', delay: 1000 },
    { progress: 100, status: 'VRAM installation complete! Memory matrix stabilized.', delay: 1500 }
  ]

  let currentStep = 0
  const processStep = () => {
    if (currentStep < steps.length) {
      const step = steps[currentStep]
      progress.value = step.progress
      downloadStatus.value = step.status
      currentStep++
      setTimeout(processStep, step.delay)
    } else {
      downloadComplete.value = true
    }
  }

  setTimeout(processStep, 500)
}

const downloadCalculatedVram = () => {
  scrollTo('download')
  nextTick(() => {
    const customPackage = {
      size: totalVramNeeded.value,
      type: 'Custom VRAM',
      features: [
        'Tailored to your needs',
        'AI-optimized memory',
        'Quantum-enhanced performance',
        'Unlimited potential'
      ]
    }
    startDownload(customPackage)
  })
}

const resetDownload = () => {
  downloading.value = false
  selectedPackage.value = null
}
</script>

<style>
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

html {
  scroll-behavior: smooth;
}
</style>