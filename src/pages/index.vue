<template>
  <Layout>
    <div class="p-4 space-y-4">
      <div class="space-x-4">
         <PrimaryButton disabled>
          主要按鈕
        </PrimaryButton>

        <PrimaryButton to="/">
          主要按鈕
        </PrimaryButton>
      </div>
      <div>
        <SecondaryButton disabled>
          次要按鈕
        </SecondaryButton>
      </div>
      <div>
         <DangerButton disabled>
          刪除帳號
        </DangerButton>
      </div>
    </div>
  </Layout>
</template>

<script>
import SecondaryButton from '@/components/SecondaryButton.vue';

</script>
