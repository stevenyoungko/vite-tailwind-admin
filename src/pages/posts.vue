<template>
  <Layout>
    <PageHeader>
      <template #title>文章</template>
      <template #action>
        <PrimaryButton to="/posts">新增</PrimaryButton>
      </template>
    </PageHeader>
    <Card class="mt-6" stretch>
      <Table :columns="columns" :data="data">
        <template #column-title="{ record, value }">
          <Router-link :to="`/posts/${record.id}`" class="link font-normal">{{ value }}</Router-link>
        </template>
        <template #column-visits="{ value }">
          <heroicons-outline-eye class="inline-block w-4 h-4" />{{ value }}次
        </template>
        <template #column-tags="{ value }">
          <span class="inline-flex space-x-2">
            <span
              v-for="tag in value"
              :key="tag"
              class="bg-violet-600 px-2 py-0.5 text-white rounded-full text-sm font-normal tracking-wider">
              {{ tag }}
            </span>
          </span>
        </template>
        <template #actions="{ record, confirmDeleteText }">
          <EditAction  :to="`/posts/${record.id}`" />
          <DeleteAction :record="record" :confirmText="confirmDeleteText" @delete="handleDeletePost" />
        </template>
      </Table>
    </Card>
  </Layout>
</template>

<script>
export default {
  setup() {
    const columns = ref([
      { label: '標題', key: 'title' },
      { label: '簡介', key: 'description' },
      { label: '瀏覽次數', key: 'visits' },
      { label: '建立日期', key: 'created_at' },
      { label: '標籤', key: 'tags' }
    ])
    const data = ref(
      [
        {
          id: 1,
          title: '我的文章1',
          description: '文章簡介文章簡介文章簡介文章簡介文章簡介',
          visits: 123,
          created_at: '2021/11/11',
          tags: ['標籤一', '標籤二']
        },
        {
          id: 2,
          title: '我的文章2',
          description: '文章簡介文章簡介文章簡介文章簡介文章簡介',
          visits: 123,
          created_at: '2021/11/11',
          tags: ['標籤一', '標籤二']
        },
        {
          id: 3,
          title: '我的文章3',
          description: '文章簡介文章簡介文章簡介文章簡介文章簡介',
          visits: 123,
          created_at: '2021/11/11',
          tags: ['Tailwind', 'Vue', 'Html']
        }
      ]
    )

    const handleDeletePost = record => {
      // 刪除單一文章
      console.log('123', record)
    }

    return { columns, data, handleDeletePost }
  }
}

</script>
