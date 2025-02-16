<template>
  <div class="space-y-6">
    <div class="text-2xl font-bold text-green-400">
      Downloading {{ package.size }}GB VRAM...
    </div>

    <!-- Main Progress -->
    <div class="relative h-4 bg-gray-800 rounded-full overflow-hidden">
      <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300"
           :style="{ width: `${progress}%` }"></div>
    </div>

    <!-- Fun Facts -->
    <Transition name="fade">
      <div v-if="currentFact" class="bg-gray-800/50 p-4 rounded-lg">
        <div class="flex items-start gap-3">
          <div class="text-2xl">💡</div>
          <div>
            <div class="font-bold text-green-400 mb-1">Fun Fact:</div>
            <div class="text-sm text-gray-300">{{ currentFact }}</div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Detailed Status -->
    <div class="text-center space-y-2">
      <div class="text-green-400 font-mono">{{ status }}</div>
      <div class="text-xs text-gray-400">{{ subStatus }}</div>
    </div>

    <!-- Technical Details -->
    <div class="bg-gray-800 rounded-lg p-4 font-mono text-xs space-y-2">
      <div class="flex justify-between">
        <span class="text-gray-400">Memory Bus:</span>
        <span class="text-green-400">{{ memoryBus }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-400">Bandwidth:</span>
        <span class="text-green-400">{{ bandwidth }} GB/s</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-400">Quantum State:</span>
        <span class="text-green-400">{{ quantumState }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-400">Memory Timings:</span>
        <span class="text-green-400">{{ memoryTimings }}</span>
      </div>
    </div>

    <!-- Matrix-style Terminal -->
    <div class="h-24 bg-gray-900 rounded-lg p-2 overflow-hidden font-mono text-xs relative">
      <div class="absolute inset-0 matrix-rain opacity-10"></div>
      <div class="relative z-10">
        <div v-for="(log, index) in terminalLogs" :key="index"
             :style="{ color: log.color }"
             class="terminal-line">
          [{{ log.time }}] {{ log.message }}
        </div>
      </div>
    </div>

    <!-- Interactive Elements -->
    <div v-if="!complete" class="grid grid-cols-3 gap-2">
      <button v-for="(action, index) in boostActions" 
              :key="index"
              @click="triggerBoost(action)"
              class="bg-gray-800 p-2 rounded text-sm hover:bg-gray-700 transition-colors"
              :disabled="action.used">
        <div class="text-lg mb-1">{{ action.emoji }}</div>
        <div class="text-xs" :class="action.used ? 'text-gray-500' : 'text-green-400'">
          {{ action.name }}
        </div>
      </button>
    </div>

    <!-- Complete State -->
    <div v-if="complete" class="space-y-4">
      <div class="text-green-400 text-xl">✨ Installation Complete!</div>
      <div class="space-y-2 bg-gray-800 rounded-lg p-4">
        <p class="text-gray-300">Successfully downloaded {{ package.size }}GB of imaginary VRAM!</p>
        <ul class="text-sm space-y-1 text-gray-400">
          <li>• Memory Type: {{ package.type }} (Now with extra imagination)</li>
          <li>• Clock Speed: {{ getRandomSpeed() }}MHz (give or take ∞)</li>
          <li>• Latency: 0.0001ms (Quantum Enhanced™️)</li>
          <li>• Power Draw: Runs on pure imagination and memes</li>
          <li>• Heat Output: Cool as a cucumber 🥒</li>
          <li>• Silicon Lottery: All tickets won! 🎰</li>
          <li>• Achievement Unlocked: Professional VRAM Downloader 🏆</li>
          <div class="mt-2 py-2 border-t border-gray-700">
            <div class="text-green-400 font-bold mb-1">Bonus Features:</div>
            <li>• Your GPU now believes in itself</li>
            <li>• Unlocked: RTX 9090 Ti Pro Max emulation</li>
            <li>• Quantum warranty (valid in parallel universes)</li>
          </div>
        </ul>
      </div>
      <button @click="$emit('reset')" class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors w-full">
        Download More
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  package: {
    type: Object,
    required: true
  },
  progress: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true
  }
})

defineEmits(['reset'])

// Dynamic technical details
const memoryBus = ref('Initializing...')
const bandwidth = ref(0)
const quantumState = ref('|⟩')
const memoryTimings = ref('--------')
const subStatus = ref('')
const terminalLogs = ref([])
const currentFact = ref('')
let factTimeout = null

// Fun facts about VRAM and GPUs
const funFacts = [
  "Warning: Your GPU is feeling lonely. Consider downloading a friend for it! 💝",
  "If you stacked all the world's VRAM chips, they would reach the moon! (This fact is definitely not made up, trust us)",
  "Side effect warning: May cause your PC to believe it's a supercomputer 🦸‍♂️",
  "Some say GPUs dream of electric sheep when idle. Our research team is still investigating this claim...",
  "RGB lighting increases VRAM download speed by exactly 420%. Scientists can't explain why! 🌈",
  "A potato PC successfully downloaded 64GB VRAM and now runs Crysis at 8K. True story! 🥔",
  "Fun fact: Your GPU is actually running on hopes, dreams, and approximately 7.5 gigawatts of pure imagination ✨",
  "Warning: Do not mix with downloaded RAM - may create a black hole in your downloads folder 🕳️",
  "Cloud-resistant memory: Works even when it's sunny! ☀️",
  "Quantum-entangled cache: It's both fast and slow until you measure it 🔄"
]

// Boost actions
const boostActions = ref([
  { emoji: '🌈', name: 'RGB Power', used: false },
  { emoji: '🧠', name: 'Digital Caffeine', used: false },
  { emoji: '🔮', name: 'Quantum Boost', used: false }
])

// Functions
const addTerminalLog = () => {
  const messages = [
    'Teaching your GPU to dream bigger...',
    'Converting caffeine into VRAM...',
    'Asking ChatGPT to imagine more memory...',
    'Convincing electrons to multiply...',
    'Downloading more download speed...',
    'Reticulating RGB splines...',
    'Asking NVIDIA for forgiveness...',
    'Training memory cells to believe...',
    'Overclocking your imagination...',
    'Defragmenting hopes and dreams...',
    'Quantum tunneling through firewalls...',
    'Patching reality.dll...',
    'Increasing GPU self-esteem...',
    'Spawning more dedicating wam...',
    'Deleting System32 (just kidding)...'
  ]
  
  const time = new Date().toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const colors = ['#00ff00', '#00cc00', '#009900']

  terminalLogs.value.push({
    time,
    message: messages[Math.floor(Math.random() * messages.length)],
    color: colors[Math.floor(Math.random() * colors.length)]
  })

  // Keep only last 8 logs
  if (terminalLogs.value.length > 8) {
    terminalLogs.value.shift()
  }
}

const showRandomFact = () => {
  if (factTimeout) {
    clearTimeout(factTimeout)
  }
  
  currentFact.value = funFacts[Math.floor(Math.random() * funFacts.length)]
  factTimeout = setTimeout(() => {
    currentFact.value = ''
  }, 5000)
}

const boostMessages = {
  'RGB Power': [
    'Engaging gaming chair power boost! 🎮',
    'RGB radiation levels: Over 9000! 🌈',
    'Colorizing memory pathways... 🎨'
  ],
  'Digital Caffeine': [
    'Injecting espresso.dll into GPU... ☕',
    'Memory cells are now VERY awake! ⚡',
    'CPU Clock: Time for another coffee ⏰'
  ],
  'Quantum Boost': [
    'Entering parallel universe #42... 🌌',
    'Schrödinger\'s VRAM activated! 🐱',
    'Warning: Reality might be unstable 🌀'
  ]
}

const triggerBoost = (action) => {
  action.used = true
  const messages = boostMessages[action.name]
  const message = messages[Math.floor(Math.random() * messages.length)]
  downloadStatus.value = message
  addTerminalLog()
  showRandomFact()
  
  // Reset status after 2 seconds
  setTimeout(() => {
    downloadStatus.value = status.value
  }, 2000)
}

// Watch progress and update details
watch(() => props.progress, (newProgress) => {
  // Memory Bus Status
  if (newProgress > 20) memoryBus.value = '384-bit Quantum'
  if (newProgress > 40) memoryBus.value = '512-bit Quantum'
  if (newProgress > 60) memoryBus.value = '1024-bit Hyperdimensional'
  if (newProgress > 80) memoryBus.value = '2048-bit Neural'

  // Bandwidth calculation (gets faster as progress increases)
  bandwidth.value = Math.floor(1000 + (newProgress * 100))

  // Quantum state evolution
  const states = ['|⟩', '|0⟩', '|1⟩', '|01⟩', '|10⟩', '|11⟩', '|∞⟩']
  quantumState.value = states[Math.floor((newProgress / 100) * states.length)]

  // Memory timing improvements
  const timings = ['16-18-18-36', '14-15-15-30', '12-12-12-28', '8-8-8-24', '4-4-4-16', '1-1-1-1']
  memoryTimings.value = timings[Math.floor((newProgress / 100) * timings.length)]

  // Add terminal logs and show facts at specific intervals
  if (newProgress % 25 === 0) {
    addTerminalLog()
    showRandomFact()
  }
})

// Clean up on unmount
onUnmounted(() => {
  if (factTimeout) {
    clearTimeout(factTimeout)
  }
})

// Random "realistic" memory speeds
const getRandomSpeed = () => {
  const speeds = [6000, 7000, 8000, 9000, 10000]
  return speeds[Math.floor(Math.random() * speeds.length)]
}
</script>

<style scoped>
.terminal-line {
  line-height: 1.5;
  transition: opacity 0.3s;
}

.matrix-rain {
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(0, 255, 0, 0.05) 50%,
    transparent 100%
  );
  background-size: 100% 300%;
  animation: matrix 3s linear infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes matrix {
  0% { background-position: 0% 0%; }
  100% { background-position: 0% 100%; }
}
</style>