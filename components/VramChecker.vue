<template>
  <div class="bg-gray-800 rounded-lg p-8 border border-gray-700 max-w-2xl mx-auto">
    <h3 class="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
      <span>🔍</span> VRAM Compatibility Checker
    </h3>

    <div v-if="!checking && !result" class="space-y-6">
      <p class="text-gray-300">
        Not sure if your GPU can handle our downloadable VRAM? Our advanced AI-powered 
        compatibility checker will analyze your system using quantum blockchain technology!
      </p>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm text-gray-400 mb-2">Your GPU Brand</label>
          <select v-model="form.brand" class="w-full bg-gray-900 border border-gray-700 rounded-md p-2 text-white">
            <option value="nvidia">NVIDIA</option>
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
            <option value="imagination">Pure Imagination™</option>
          </select>
        </div>
        <div>
          <label class="block text-sm text-gray-400 mb-2">Current VRAM</label>
          <input v-model="form.vram" type="number" min="0" max="128"
                 class="w-full bg-gray-900 border border-gray-700 rounded-md p-2 text-white"
                 placeholder="Enter VRAM in GB">
        </div>
      </div>

      <div class="space-y-2">
        <label class="flex items-center gap-2">
          <input v-model="form.dlss" type="checkbox" class="rounded border-gray-700">
          <span>I believe in DLSS magic</span>
        </label>
        <label class="flex items-center gap-2">
          <input v-model="form.quantum" type="checkbox" class="rounded border-gray-700">
          <span>My GPU is quantum-entangled</span>
        </label>
        <label class="flex items-center gap-2">
          <input v-model="form.rgb" type="checkbox" class="rounded border-gray-700">
          <span>I have RGB lighting (very important)</span>
        </label>
      </div>

      <button @click="checkCompatibility" 
              class="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-md hover:opacity-90 transition-all">
        Check Compatibility
      </button>
    </div>

    <div v-else-if="checking" class="text-center py-8 space-y-4">
      <div class="text-xl text-green-400">{{ checkStatus }}</div>
      <div class="scanning-animation">
        <div class="scan-line"></div>
        {{ scanMessage }}
      </div>
    </div>

    <div v-else class="space-y-6">
      <div class="text-center">
        <div class="text-4xl mb-4">{{ result.emoji }}</div>
        <div class="text-xl font-bold" :class="result.compatible ? 'text-green-400' : 'text-yellow-400'">
          {{ result.title }}
        </div>
        <p class="text-gray-300 mt-2">{{ result.description }}</p>
      </div>

      <div v-if="result.compatible" class="space-y-4">
        <div class="border border-green-500/20 rounded-lg p-4 bg-green-500/5">
          <div class="font-bold text-green-400 mb-2">Recommended VRAM Package:</div>
          <div class="text-2xl">{{ result.recommendation }}</div>
        </div>
        
        <button @click="resetCheck" class="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
          Check Another GPU
        </button>
      </div>
      
      <div v-else>
        <button @click="resetCheck" class="w-full border border-yellow-500 text-yellow-400 py-2 rounded-md hover:bg-yellow-500/10 transition-colors">
          Try Again
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  brand: 'nvidia',
  vram: null,
  dlss: false,
  quantum: false,
  rgb: false
})

const checking = ref(false)
const result = ref(null)
const checkStatus = ref('')
const scanMessage = ref('')

const funnyScans = [
  'Scanning quantum flux capacitors...',
  'Analyzing RGB performance metrics...',
  'Checking VRAM downloading ports...',
  'Measuring imagination coefficient...',
  'Calculating meme potential...',
  'Evaluating blockchain readiness...',
  'Processing neural pathways...',
  'Quantum entangling memory blocks...',
  'Synthesizing virtual circuits...',
  'Downloading more scanners...'
]

const checkCompatibility = async () => {
  checking.value = true
  result.value = null
  
  // Funny scanning animation
  for (const message of funnyScans) {
    scanMessage.value = message
    await new Promise(r => setTimeout(r, 800))
  }

  // Generate funny result
  const isCompatible = form.value.rgb || form.value.quantum || Math.random() > 0.3
  
  let recommendation = ''
  if (form.value.vram < 8) {
    recommendation = '24GB Quantum Package'
  } else if (form.value.vram < 16) {
    recommendation = '48GB Neural Package'
  } else {
    recommendation = '96GB Imagination Package'
  }

  const results = {
    compatible: {
      emoji: '✨',
      title: 'Congratulations!',
      description: form.value.rgb 
        ? 'Your RGB lighting has blessed you with infinite VRAM potential!'
        : 'Your GPU has been deemed worthy of downloadable VRAM!',
      recommendation,
      compatible: true
    },
    notCompatible: {
      emoji: '🤔',
      title: 'Hmmm...',
      description: `We detected a severe lack of ${form.value.rgb ? 'quantum entanglement' : 'RGB lighting'}. Try adding more unicorn stickers to your GPU.`,
      compatible: false
    }
  }

  await new Promise(r => setTimeout(r, 1000))
  result.value = isCompatible ? results.compatible : results.notCompatible
  checking.value = false
}

const resetCheck = () => {
  result.value = null
  form.value = {
    brand: 'nvidia',
    vram: null,
    dlss: false,
    quantum: false,
    rgb: false
  }
}
</script>

<style scoped>
.scanning-animation {
  position: relative;
  width: 100%;
  height: 100px;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
}

.scan-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% {
    top: 0;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}
</style>