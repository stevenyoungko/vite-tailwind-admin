<template>
  <Layout>
    <div class="p-4">
      <PrimaryButton @click="showModal = true">開啟視窗</PrimaryButton>

      <!-- <Modal v-model="showModal">
        <template #title>嗨囉 我是標題</template>
        <template #content>
          <div class="mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis excepturi cum porro, vitae perspiciatis vero deleniti voluptatum fuga. Quia fugit excepturi quidem architecto ratione inventore commodi voluptatum ipsam expedita eum.
          </div>
        </template>
      </Modal> -->

      <ConfirmModal 
        v-model="showModal" 
        title="確定要刪除文章嗎？"
        @success="success"
        @cancel="cancel" 
      />
    </div>
  </Layout>
</template>

<script>
export default {
  setup() {
    const showModal = ref(false)
    const success = () => {
      console.log('success')
    }
    const cancel = () => {
      console.log('cancel')
    }

    return { showModal, success, cancel }
  }
}

</script>
