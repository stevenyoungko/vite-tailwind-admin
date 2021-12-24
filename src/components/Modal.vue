<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-gray-700/40" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <div class="px-6 py-4">
                <DialogTitle as="h3" class="text-2xl font-medium  text-gray-900 text-center">
                  <slot name="title"></slot>
                </DialogTitle>

                <slot name="content"></slot>
              </div>
              

              <div class="p-6">
                <slot name="footer">
                  <PrimaryButton
                    class="w-full py-1.5"
                    @click="closeModal"
                  >
                    確定
                  </PrimaryButton>
                </slot>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { useVModel } from '@vueuse/core'

export default {
  emits: ['update:model-value'],
  props: {
    modelValue: Boolean    
  },
  setup(props, { emit }) {
    const isOpen = useVModel(props)

    const closeModal = () => {
      isOpen.value = false
    }
    const openModal = () => {
      isOpen.value = true
    }

    return {
      isOpen,
      closeModal,
      openModal
    }
  },
}
</script>
