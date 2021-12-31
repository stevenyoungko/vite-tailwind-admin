<template>
  <notifications>
    <template #body="{ item, close }">
      <div 
        class="notification bg-white rounded-lg shadow-lg mx-4 mb-4 relative overflow-hidden"
        :class="`notification-${item.type || 'default'}`"
      >
        <div class="notification-inner flex p-3 border-l-4 border-green-500">
          <div>
            <heroicons-outline-check-circle v-if="item.type === 'success'" class="notification-icon w-8 h-8 text-green-500" />
            <heroicons-outline-information-circle v-else-if="item.type === 'warn'" class="notification-icon" />
            <heroicons-outline-x-circle v-else-if="item.type === 'error'" class="notification-icon" />
            <heroicons-outline-information-circle v-else class="notification-icon" />
          </div>  
          <div class="ml-2">
            <div class="mt-0.5 text-gray-600 font-normal tracking-wide">{{ item.title }}</div>
            <div v-if="item.text" class="mt-0.5 text-gray-400 text-sm">{{ item.text }}</div>
            <button 
              type="button" 
              class="absolute right-2 top-2 w-6 h-6 flex justify-center items-center text-gray-400 hover:text-gray-500 transition-colors duration-100"
              :class="item.text ? 'top-2' : 'top-4'"
              @click="close"
            >
              <heroicons-outline-x class="w-4 h-4" />  
            </button>
          </div>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>