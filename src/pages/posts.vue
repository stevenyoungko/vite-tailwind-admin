<template>
  <Layout>
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-semibold tracking-wider text-gray-900">文章</h1>
      <div>
        <PrimaryButton to="/posts">新增</PrimaryButton>
      </div>
    </div>
    <div class="mt-6 overflow-x-auto bg-white border border-gray-200 rounded-md shadow relative">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="pl-5 py-3">
              <input type="checkbox" class="form-checkbox">
            </th>
            <th class="text-left text-gray-400 text-sm font-medium tracking-wider px-5 py-3 whitespace-nowrap">標題</th>
            <th class="text-left text-gray-400 text-sm font-medium tracking-wider px-5 py-3 whitespace-nowrap">簡介</th>
            <th class="text-left text-gray-400 text-sm font-medium tracking-wider px-5 py-3 whitespace-nowrap">瀏覽次數</th>
            <th class="text-left text-gray-400 text-sm font-medium tracking-wider px-5 py-3 whitespace-nowrap">建立日期</th>
            <th class="text-left text-gray-400 text-sm font-medium tracking-wider px-5 py-3 whitespace-nowrap">標籤</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 4" :key="i">
            <td class="text-gray-600 pl-5 py-3 whitespace-nowrap">
              <input type="checkbox" class="form-checkbox">
            </td>
            <td class="text-gray-600 px-5 py-3 whitespace-nowrap">
              <Router-link to="/posts/1" class="link font-normal" >我的文章1</Router-link>
            </td>
            <td class="text-gray-600 px-5 py-3 whitespace-nowrap">文章簡介文章簡介文章簡介文章簡介文章簡介...</td>
            <td class="text-gray-600 px-5 py-3 whitespace-nowrap"><heroicons-outline-eye class="inline-block w-4 h-4" />123次</td>
            <td class="text-gray-600 px-5 py-3 whitespace-nowrap">2021/11/11</td>
            <td class="text-gray-600 px-5 py-3 whitespace-nowrap">
              <span class="inline-flex space-x-2">
                <span class="bg-violet-600 px-2 py-0.5 text-white rounded-full text-sm font-normal tracking-wider">標籤一</span>
                <span class="bg-violet-600 px-2 py-0.5 text-white rounded-full text-sm font-normal tracking-wider">標籤二</span>
              </span>
            </td>
            <td class="text-gray-600 px-5 py-3 whitespace-nowrap">
              <Router-link to="/posts" class="w-8 h-8 inline-flex justify-center items-center text-gray-400 hover:text-violet-600 transition-colors">
                <heroicons-outline-pencil-alt />
              </Router-link>
              <button type="button" class="w-8 h-8 inline-flex justify-center items-center text-gray-400 hover:text-red-600 transition-colors">
                <heroicons-outline-trash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script>
export default {
  setup() {
   
  }
}

</script>
