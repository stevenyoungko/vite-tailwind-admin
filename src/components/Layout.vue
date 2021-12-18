<template>
  <div class="flex">
    <!-- 左側選單欄  -->
    <div class="flex flex-col justify-between bg-violet-600 text-white min-h-screen w-64">
      <div>
        <!-- Logo -->
        <div class="flex justify-center items-center h-16">
          <heroicons-outline-book-open class="w-10 h-10 mr-2" />
          <span class="text-xl font-medium">StevenPress</span>
        </div>
        <!-- 主要選單 -->
        <ul>
          <li>
            <Router-link to="/" class="flex items-center px-5 py-3 text-white">
              <heroicons-outline-home class="w-5 h-5 mr-2"  />
              首頁
            </Router-link>
          </li>
          <li>
            <Router-link to="/" class="flex items-center px-5 py-3 text-violet-400 hover:text-white">
            <heroicons-outline-document-text class="w-5 h-5 mr-2"  />
              文章
            </Router-link>
          </li>
          <li>
            <Router-link to="/" class="flex items-center px-5 py-3 text-violet-400 hover:text-white">
              <heroicons-outline-user class="w-5 h-5 mr-2"  />
              個人資料
            </Router-link>
          </li>
        </ul>
      </div>

      <!-- 用戶名稱 -->
      <div class="flex justify-between items-center border-t border-violet-400 px-5 py-4">
        <div class="flex items-center">
          <img class="w-8 h-8 rounded-full mr-2" src="https://avatars.githubusercontent.com/u/37804392?v=4" alt="">
          <div class="text-xl font-medium tracking-wide">Steven 小柯</div>
        </div>

        <button class="flex justify-center items-center w-7 h-7 hover:bg-violet-500 rounded transition-colors duration-200" type="button">
          <heroicons-outline-dots-vertical class="w-5 h-5"  />
        </button>
      </div>
    </div>

    <!-- 右側佈局區 -->
     <div class="flex-grow min-w-0">
       <slot></slot>
     </div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>