<template>
  <div
    class="bg-white relative border-gray-200 shadow"
    :class=" 
      stretch ? 
      ' border -mx-6 sm:mx-0 border-t border-b sm:border sm:bg-gray-300rounded-md'
      :' border rounded-md'
    "
  >
    <slot></slot>  
  </div>
</template>

<script>
export default {
  props: {
    stretch: Boolean
  } 
}
</script>

<style lang="scss" scoped>

</style>