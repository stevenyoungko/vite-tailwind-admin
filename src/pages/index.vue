<template>
  <Layout>
    <div class="p-4">
      <PrimaryButton @click="showModal = true">開啟視窗</PrimaryButton>

      <Modal v-model="showModal">
        <template #title>嗨囉 我是標題</template>
        <template #content>
          <div class="mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis excepturi cum porro, vitae perspiciatis vero deleniti voluptatum fuga. Quia fugit excepturi quidem architecto ratione inventore commodi voluptatum ipsam expedita eum.
          </div>
        </template>
      </Modal>
    </div>
  </Layout>
</template>

<script>
export default {
  setup() {
    const showModal = ref(false)
    return { showModal }
  }
}

</script>
