<template>
  <Router-link :to="to" class="w-8 h-8 inline-flex justify-center items-center text-gray-400 hover:text-violet-600 transition-colors">
    <heroicons-outline-pencil-alt />
  </Router-link>
</template>

<script>
export default {
  props: {
    to: String
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>