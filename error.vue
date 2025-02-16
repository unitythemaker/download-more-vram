<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-4">
    <div class="text-center space-y-6 max-w-xl">
      <div class="text-8xl mb-4">😅</div>
      <h1 class="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">
        Oops! VRAM Overload
      </h1>
      <p class="text-gray-400 text-lg">
        Looks like we downloaded too much VRAM and crashed the quantum matrix!
        Don't worry, it's just a temporal anomaly.
      </p>
      <div class="text-sm text-gray-500">
        Error: {{ error.message || "Unknown quantum fluctuation" }}
      </div>
      <div class="pt-6">
        <button @click="handleError" 
                class="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all">
          Download More Error Handlers
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>