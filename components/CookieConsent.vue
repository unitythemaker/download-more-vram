<template>
  <div v-if="!hasConsent" class="fixed bottom-4 right-4 p-4 bg-gray-900/95 backdrop-blur rounded-lg shadow-lg max-w-sm border border-gray-800 z-50">
    <p class="text-sm text-gray-300 mb-4">
      We use cookies to analyze traffic and improve your experience. Your privacy matters.
    </p>
    <div class="flex justify-end space-x-3">
      <button 
        @click="decline" 
        class="px-3 py-1.5 text-sm text-gray-400 hover:text-gray-200 transition-colors"
      >
        Decline
      </button>
      <button 
        @click="accept" 
        class="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-500 transition-colors"
      >
        Accept
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { initialize } = useGtag()
const hasConsent = ref(false)

// Check if consent was previously given
onMounted(() => {
  const savedConsent = localStorage.getItem('analytics-consent')
  if (savedConsent === 'true') {
    hasConsent.value = true
    initialize()
  }
})

function accept() {
  hasConsent.value = true
  localStorage.setItem('analytics-consent', 'true')
  initialize()
}

function decline() {
  hasConsent.value = true
  localStorage.setItem('analytics-consent', 'false')
}
</script>