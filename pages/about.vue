<template>
  <div class="max-w-3xl mx-auto space-y-8">
    <h1 class="text-4xl font-bold text-green-400">About Download More VRAM</h1>
    
    <div class="space-y-4 text-gray-300">
      <p>
        Tired of those pesky "Out of Memory" errors? Fed up with your GPU telling you it can't handle
        another Stable Diffusion instance? Welcome to the solution you never knew you needed!
      </p>

      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 class="text-2xl font-bold text-green-400 mb-4">🤔 Is this real?</h2>
        <p class="text-gray-300">
          No, just like you can't download RAM, you can't download VRAM. This is a parody website inspired
          by downloadmoreram.com. VRAM (Video RAM) is a physical component of your graphics card and
          cannot be increased through software downloads.
        </p>
      </div>

      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 class="text-2xl font-bold text-green-400 mb-4">💡 Actual ways to handle VRAM limitations:</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Use model quantization (8-bit, 4-bit)</li>
          <li>Enable gradient checkpointing</li>
          <li>Implement efficient attention mechanisms</li>
          <li>Try CPU offloading techniques</li>
          <li>Consider model pruning</li>
          <li>Split your models across multiple GPUs</li>
          <li>Actually buy a new GPU (sorry!)</li>
        </ul>
      </div>

      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 class="text-2xl font-bold text-green-400 mb-4">🎮 Fun VRAM Facts</h2>
        <ul class="space-y-2">
          <li>
            <span class="text-green-400">Did you know?</span> The first dedicated gaming GPU, the 3dfx Voodoo,
            had only 4MB of VRAM. That's about 0.004GB!
          </li>
          <li>
            <span class="text-green-400">Mind-blowing:</span> Modern AI models can use more VRAM in one training
            session than all gaming GPUs combined had in the 1990s.
          </li>
          <li>
            <span class="text-green-400">Fun fact:</span> If you could actually download VRAM, you'd need
            a download speed of about 1TB/s to match modern GDDR6X memory bandwidth!
          </li>
        </ul>
      </div>

      <div class="text-sm text-gray-400 italic">
        Remember: This is a joke website. Please don't try to actually download VRAM.
        If anyone tries to sell you downloadable VRAM, it's probably a scam! 😉
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About - Download More VRAM',
  meta: [
    { name: 'description', content: 'Learn about our totally legitimate VRAM downloading service (just kidding!).' }
  ]
})
</script>