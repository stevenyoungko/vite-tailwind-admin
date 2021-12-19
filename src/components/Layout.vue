<template>
  <div class="flex flex-col min-h-screen sm:flex-row">
    <!-- 左側選單欄  -->
    <div class="flex flex-col justify-between flex-shrink-0 bg-violet-600 text-white w-full sm:w-64" >
      <!-- Logo -->
      <div class="h-16 flex justify-between items-center px-4 sm:justify-center" >
        <div class="flex justify-center items-center">
          <heroicons-outline-book-open class="w-10 h-10 mr-2" />
          <span class="text-xl font-medium">StevenPress</span>
        </div>
        <button 
          class="flex justify-center items-center w-8 h-8 sm:hidden"
          @click="toggleMenu"
        >
          <heroicons-outline-menu class="w-5 h-5" />
        </button>
      </div>
      <div class="flex-grow sm:flex sm:flex-col sm:justify-between" :class="showMenu ? '' : 'hidden'">
        <!-- 主要選單 -->
        <ul>
          <li>
            <Router-link to="/" class="flex items-center px-4 sm:px-5 py-3 text-white" >
              <heroicons-outline-home class="w-5 h-5 mr-2" />
              首頁
            </Router-link>
          </li>
          <li>
            <Router-link to="/" class="flex items-center px-4 sm:px-5 py-3 text-violet-400 hover:text-white" >
              <heroicons-outline-document-text class="w-5 h-5 mr-2" />
              文章
            </Router-link>
          </li>
          <li>
            <Router-link to="/" class="flex items-center px-4 sm:px-5 py-3 text-violet-400 hover:text-white" >
              <heroicons-outline-user class="w-5 h-5 mr-2" />
              個人資料
            </Router-link>
          </li>
        </ul>

        <!-- 用戶名稱 手機版 -->
        <div class="border-t border-violet-400 sm:hidden mt-2 py-1" >
          <div class="px-4 py-3 flex items-center">
            <img
              class="w-8 h-8 rounded-full mr-2"
              src="https://avatars.githubusercontent.com/u/37804392?v=4"
              alt=""
            />
            <div class="text-xl font-medium tracking-wide">Steven 小柯</div>
          </div>
        </div>
        <!-- 用戶名稱 電腦版 -->
        <div class="hidden sm:flex sm:justify-between sm:items-center border-t border-violet-400 px-4 py-4" >
          <div class="flex items-center">
            <img
              class="w-8 h-8 rounded-full mr-2"
              src="https://avatars.githubusercontent.com/u/37804392?v=4"
              alt=""
            />
            <div class="text-xl font-medium tracking-wide">Steven 小柯</div>
          </div>

          <button class=" flex justify-center items-center w-7 h-7 hover:bg-violet-500 rounded transition-colors duration-200" type="button" >
            <heroicons-outline-dots-vertical class="w-5 h-5" />
          </button>
        </div>
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
  setup() {
    const showMenu = ref(false)

    const toggleMenu = () => showMenu.value = !showMenu.value

    return { showMenu, toggleMenu }
  },
};
</script>

<style lang="scss" scoped></style>
