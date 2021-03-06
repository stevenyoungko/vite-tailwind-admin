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
          <li v-for="item in menuItems" :key="item.to">
            <Router-link 
              :to="item.to" 
              class="flex items-center px-4 sm:px-5 py-3"
              :class="isActive(item.to) ? '' : 'text-violet-400 hover:text-white'"
            >
              <!-- <heroicons-outline-home  /> -->
              <component :is="item.icon" class="w-5 h-5 mr-2" />
              {{ item.text }}
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

          <ul>
            <template
              v-for="item in userMenuItems"
              :key="item.text"
            >
              <li v-if="item.mobile">
                <component :is="item.tag" class="flex items-center px-4 py-3 w-full text-violet-400 hover:text-white" @click="item.onClick">
                  {{ item.text }}
                </component> 
              </li>
            </template>
          </ul>
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


          <Menu as="div" class="relative">
            <MenuButton class=" flex justify-center items-center w-7 h-7 hover:bg-violet-500 rounded transition-colors duration-200" type="MenuButton" >
              <heroicons-outline-dots-vertical class="w-5 h-5" />
            </MenuButton>
             <TransitionZoom>
              <MenuItems class="flex flex-col absolute left-full bottom-0 ml-2 bg-white rounded-md shadow-lg w-32 overflow-hidden origin-bottom-left">
                <MenuItem 
                  v-slot="{ active }"
                  v-for="item in userMenuItems"
                  :key="item.text"
                >
                  <component
                    :is="item.tag" 
                    :to="item.to" 
                    class="text-gray-700 text-left text-base font-normal px-3 py-2"
                    :class="active ? 'bg-gray-100' : ''"
                    @click="item.onClick"
                  >
                    {{ item.text }}
                  </component> 
                </MenuItem>
              </MenuItems>
            </TransitionZoom>
          </Menu>
        </div>
      </div>
    </div>

    <!-- 右側佈局區 -->
    <div class="flex-grow min-w-0 p-6 sm:px-10 sm:py-8 bg-gray-50">
      <slot />
    </div>
  </div>
</template>

<script>
import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
import HeroiconsOutlineDocumentText from '~icons/heroicons-outline/document-text'
import HeroiconsOutlineUser from '~icons/heroicons-outline/user'
import { useRoute, useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'

export default {
  components: {
    HeroiconsOutlineHome,
    HeroiconsOutlineDocumentText,
    HeroiconsOutlineUser
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const showMenu = ref(false)
    const menuItems = [
      { to: '/', text: '首頁', icon: 'heroicons-outline-home' },
      { to: '/posts', text: '文章', icon: 'heroicons-outline-document-text' },
      { to: '/setting', text: '個人資料', icon: 'heroicons-outline-user' }
    ]
    const activeItem = computed(() =>
      [...menuItems].reverse().find(item => route.path.startsWith(item.to)) 
    )
    const userMenuItems = [
      { tag: 'RouterLink',  to: '/setting', text: '個人資料' },
      { tag: 'button',  text: '登出', mobile: true,
        onClick: () => {
          router.push('/login')
        } 
      },
    ]

    const toggleMenu = () => showMenu.value = !showMenu.value
    const isActive = to => to === activeItem.value.to


    return { showMenu, toggleMenu, menuItems, isActive, userMenuItems }
  },
};
</script>

<style lang="scss" scoped></style>
