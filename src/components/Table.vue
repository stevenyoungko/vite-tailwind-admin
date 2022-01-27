<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b border-gray-200">
          <th class="text-left pl-5 py-3">
            <SelectAllCheckbox 
              :state="selectAllState"
              @update:state="updateSelectAllState"
            />
          </th>
          <th
            v-for="col in columns"
            :key="col.key"
            class="text-left text-gray-400 text-sm font-medium tracking-wider px-5 py-3 whitespace-nowrap">
            {{ col.label }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(record, i) in data" 
          :key="record.id"
          :class="{ 'bg-violet-50': rowSelectStatus[i] }"
        >
          <td class="text-gray-600 pl-5 py-3 whitespace-nowrap">
            <SelectRowCheckbox 
              :state="rowSelectStatus[i]"
              :index="i"
              @update:state="updateRowSelectStatus"
            />
          </td>
          <td
            v-for="col in columns"
            :key="col.key"
            class="text-gray-600 px-5 py-3 whitespace-nowrap"
          >
            <slot 
              :name="`column-${col.key}`"
              :column="col"
              :record="record"
              :value="record[col.key]"
            >
              {{ record[col.key] }}
            </slot>  
          </td>
          <td class="text-gray-600 px-5 py-3 whitespace-nowrap">
            <slot name="actions" :record="record" :confirmDeleteText="confirmDeleteText"></slot>
          </td>
        </tr>
        <tr v-if="!data.length">
          <td :colspan="columnsCount" class="py-12 text-center text-gray-400">
            {{ emptyText }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Paginator 
    v-model:current-page="currentPage" 
    :total-page="totalPage"
  />
</template>

<script>
import { computed } from 'vue-demi'
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    emptyText: {
      type: String,
      default: '當前沒有任何資料'
    },
    confirmDeleteText: {
      type: String,
      default: '確定要執行刪除嗎？~~'
    }
  },
  setup(props) {
    const currentPage = ref(1)
    const totalPage = ref(10)
    const selectAllState = ref('none')
    const rowSelectStatus = ref(props.data.map(_ => false))

    const columnsCount = computed(() => {
      return props.columns.length + 2
    })
    const seletedIds = computed(() => {
      return props.data
        .filter((_, index) => rowSelectStatus.value[index])
        .map(record => record.id)
    })

    const updateSelectAllState = state => {
      selectAllState.value = state

      rowSelectStatus.value = rowSelectStatus.value.map(() => selectAllState.value === 'all')
    }
    const updateRowSelectStatus = (state, index) => {
      rowSelectStatus.value[index] = state

      // 當全部勾選時
      if (seletedIds.value.length === props.data.length) {
        selectAllState.value = 'all'
      }
      // 當部分勾選時
      else if (seletedIds.value.length > 0 && seletedIds.value.length < props.data.length) {
        selectAllState.value = 'some'
      }
      // 當沒有勾選時
      else {
        selectAllState.value = 'none'
      }
    }

    return { 
      columnsCount,
      currentPage,
      totalPage,
      rowSelectStatus,
      selectAllState,
      updateSelectAllState,
      updateRowSelectStatus
    }
  }
}
</script>

<style lang="scss" scoped>

</style>