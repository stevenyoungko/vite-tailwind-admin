<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b border-gray-200">
          <th class="text-left pl-5 py-3">
            <input type="checkbox" class="form-checkbox">
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
        <tr v-for="record in data" :key="record.id">
          <td class="text-gray-600 pl-5 py-3 whitespace-nowrap">
            <input type="checkbox" class="form-checkbox">
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
        </tr>

        <tr v-if="!data.length">
          <td :colspan="columnsCount" class="py-12 text-center text-gray-400">
            {{ emptyText }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
    }
  },
  setup(props) {
    const columnsCount = computed(() => {
      return props.columns.length + 2
    })

    return { columnsCount }
  }
}
</script>

<style lang="scss" scoped>

</style>