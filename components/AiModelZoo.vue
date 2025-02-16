<template>
  <div class="py-16">
    <h2 class="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
      AI Model Zoo
    </h2>
    <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      With your downloaded VRAM, you can run these totally real* AI models locally! 
      No cloud required, just pure imagination.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="model in aiModels" :key="model.name"
           class="group bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all transform hover:-translate-y-1">
        <div class="flex items-start justify-between mb-4">
          <div class="text-4xl">{{ model.emoji }}</div>
          <div class="text-xs text-gray-400 px-2 py-1 bg-gray-700 rounded-full">
            {{ model.vram }}GB VRAM
          </div>
        </div>
        
        <h3 class="text-xl font-bold text-green-400 mb-2 group-hover:animate-rainbow-text">{{ model.name }}</h3>
        <p class="text-gray-300 text-sm mb-4">{{ model.description }}</p>
        
        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-2" v-for="feature in model.features" :key="feature">
            <span class="text-green-400">✓</span>
            <span>{{ feature }}</span>
          </div>
        </div>

        <button @click="tryModel(model)" class="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-md hover:opacity-90 transition-opacity">
          Try Model
        </button>
      </div>
    </div>

    <!-- Easter Egg: Konami Code Handler -->
    <div v-if="konamiActivated" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div class="text-center space-y-6 p-8">
        <div class="text-6xl animate-bounce">🎮</div>
        <div class="text-2xl text-green-400">Konami Code Activated!</div>
        <div class="text-xl text-gray-300">You've unlocked infinite VRAM!</div>
        <div class="text-gray-400">(Just kidding, that would be too easy)</div>
        <button @click="konamiActivated = false" class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
          Back to Reality
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const konamiActivated = ref(false)
const konamiCode = ref('')
const konamiSequence = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    konamiCode.value += e.key
    if (konamiCode.value.length > konamiSequence.length) {
      konamiCode.value = konamiCode.value.substring(1)
    }
    if (konamiCode.value === konamiSequence) {
      konamiActivated.value = true
      konamiCode.value = ''
    }
  })
})

const aiModels = [
  {
    name: 'GPT-9001',
    emoji: '🤖',
    vram: 420,
    description: 'The most powerful language model that can predict what you\'ll say before you even think it!',
    features: [
      'Reads your mind (with consent)',
      'Writes better code than you',
      'Makes dad jokes actually funny',
      'Understands why you\'re single'
    ]
  },
  {
    name: 'DALL·E X Pro Max',
    emoji: '🎨',
    vram: 256,
    description: 'Generate images so realistic, they might actually exist in a parallel universe!',
    features: [
      'Creates art better than Van Gogh*',
      'Fixes your family photos',
      'Generates impossible objects',
      'Makes NFTs obsolete'
    ]
  },
  {
    name: 'WhisperMax Ultra',
    emoji: '👂',
    vram: 128,
    description: 'So good at speech recognition, it can hear your thoughts! (Privacy advocates hate this)',
    features: [
      'Transcribes silence accurately',
      'Understands cat language',
      'Hears your inner voice',
      'Noise cancels existence'
    ]
  },
  {
    name: 'StableDreamer 4D',
    emoji: '🌌',
    vram: 512,
    description: 'Generate images in the 4th dimension! (Warning: May cause temporal paradoxes)',
    features: [
      'Time-travel image generation',
      'Quantum style transfer',
      'Reality diffusion',
      'Dreams in 4D'
    ]
  },
  {
    name: 'CatGPT',
    emoji: '😺',
    vram: 69,
    description: 'The first AI model trained exclusively on cat videos and memes. Meow!',
    features: [
      'Purrs in binary',
      'Generates cat memes',
      'Predicts zoomies',
      'Speaks fluent Meow'
    ]
  },
  {
    name: 'MetaLLaMA XL',
    emoji: '🦙',
    vram: 1337,
    description: 'A LLaMA so large, it needs its own universe to run. Good thing you downloaded more VRAM!',
    features: [
      'Creates smaller LLaMAs',
      'Spits quantum facts',
      'Solves P=NP daily',
      'Actually knows what it knows'
    ]
  }
]

const tryModel = (model) => {
  // Easter egg: Different responses based on model
  const responses = {
    'GPT-9001': 'I know you were going to click this. In fact, I wrote this message before you were born.',
    'DALL·E X Pro Max': 'Creating an image so beautiful, your GPU started crying...',
    'WhisperMax Ultra': 'I heard what you were thinking about this website. Very funny!',
    'StableDreamer 4D': 'Warning: Image generated in year 2054. Please wait -30 years.',
    'CatGPT': 'Meow meow meow... I mean, initializing purrameters...',
    'MetaLLaMA XL': 'Error: Universe.exe has stopped working. Need more VRAM.'
  }

  alert(responses[model.name] || 'Error: Not enough imagination detected!')
}
</script>

<style scoped>
.animate-rainbow-text {
  animation: rainbow 8s linear infinite;
  background: linear-gradient(to right, #ff0000, #00ff00, #0000ff, #ff0000);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@keyframes rainbow {
  0% { background-position: 0% 50%; }
  100% { background-position: 400% 50%; }
}
</style>