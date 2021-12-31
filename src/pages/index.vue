<template>
  <Layout>
    <div class="p-4">
      <DangerButton @click="deletePost">刪除</DangerButton>
      <PrimaryButton @click="open">顯示通知</PrimaryButton>
    </div>
  </Layout>
</template>

<script>
import { useConfirm } from '@/composables/useConfirmModal'
import { notify } from "@kyvg/vue3-notification"

export default {
  setup() {
    const deletePost = () => {
      useConfirm('確定要刪除嗎？').then(result => {
        console.log(result)
        if (result) {
          console.log('刪除成功!')
        }
      })
    }

    const open = () => {
      notify({
        // type: 'success',
        // type: 'warn',
        // type: 'error',
        title: '更新成功',
        text: '已經更新成功了',
        duration: 100000
      })
    }
    return { deletePost, open }
  }
}

</script>
