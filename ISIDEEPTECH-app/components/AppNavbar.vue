<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { localesConst } from '@/assets/data/locales';
import type { LocaleCodes } from '@/assets/data/locales';
import NavData from '@/assets/data/nav';
import '~/assets/custom.css'


const navOpen = ref(false);

const { locale: currentLocale } = useI18n();
const route = useRoute();
const { push } = useRouter();
const currentPath = ref(route.path);

watch(() => route.path, (to) => {
  currentPath.value = to;
}, {
  immediate: true,
});

const switchLocalePath = useGSwitchLocalePath();
const localePath = useGLocalePath();
const spLocaleOption = ref(currentLocale.value as LocaleCodes);
function changeLocale() {
  const path = switchLocalePath(spLocaleOption.value);
  push(path);
}

const colorMode = useColorMode();
function rotateColorMode() {
  const values = ['system', 'light', 'dark'];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;

  colorMode.preference = values[next];
}



const appConfig = useAppConfig()
// const { navigation } = useContent()

</script>

<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/">
              <img class="block h-8 w-auto shadow max-w-full align-middle border-none"
                src="https://indatalabs.com/wp-content/themes/indata/img/logo-white.svg" alt="" />
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <template v-for="item in NavData.center">
                <NuxtLink v-if="!item.type || item.type !== 'group'" :key="item.i18n" :to="localePath(item.to)"
                  :external="item.external" :class="[
    item.current
      ? 'bg-gray-900 text-white'
      : 'text-gray-300',
    'rounded-md px-3 py-2 text-sm font-medium link__underline hover:text-orange-400',
  ]" :aria-current="item.current ? 'page' : undefined">{{ item.i18n }}</NuxtLink>
                <div v-else :key="item.i18n" class="relative">
                  <template>
                    <div>
                      <Menu as="div" class="relative inline-block text-left">
                        <div>
                          <MenuButton
                            class="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                            {{ item.i18n }}
                            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                              aria-hidden="true" />
                          </MenuButton>
                        </div>
                        <transition enter-active-class="transition duration-100 ease-out"
                          enter-from-class="transform scale-95 opacity-0"
                          enter-to-class="transform scale-100 opacity-100"
                          leave-active-class="transition duration-75 ease-in"
                          leave-from-class="transform scale-100 opacity-100"
                          leave-to-class="transform scale-95 opacity-0">
                          <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div class="px-1 py-1">
                              <MenuItem v-slot="{ active }" v-for="child in item.items" :key="child.i18n"
                                :to="child.to">

                              <NuxtLink :key="item.i18n" :to="item.to" :external="item.external" :class="[
    active ? 'bg-violet-500 text-white' : 'text-gray-900',
    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
  ]" :aria-current="item.current ? 'page' : undefined">{{ child.i18n }}
                              </NuxtLink>

                              </MenuItem>

                            </div>
                          </MenuItems>
                        </transition>
                      </Menu>
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="input-group">
            <span class="input-group-text !rounded-l-full">
              <I18nIcon class="h-5 w-5" /><span class="sr-only">{{ $t('_nav.switchLang') }}</span>
            </span>
            <select class="form-select !rounded-r-full" v-model="spLocaleOption" @change="changeLocale()">
              <option v-for="locale in localesConst" :value="locale.code">{{ locale.name }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in NavData.center" :key="item.i18n" as="a" :to="item.to" :class="[
    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    'block rounded-md px-3 py-2 text-base font-medium',
  ]" :aria-current="item.current ? 'page' : undefined">
          {{ item.i18n }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>