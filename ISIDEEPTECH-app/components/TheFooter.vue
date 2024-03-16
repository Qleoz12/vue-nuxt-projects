<script setup lang="ts">

const offices = computed(() => [
  {
    name: "OFICINA PRINCIPAL",
    addres: "AV. CRA 45 # 103 40 OF 412",
    city: "Bogotá Colombia",
    tel: "(60 1) 6001605",
    href: "/", current: useRoute().path == "/", external: false
  },
  {
    name: "OFICINA USA",
    addres: "direccion",
    city: "NUMERO TELEFONICO",
    tel: "(60 1) 6001605",
    href: "/", current: useRoute().path == "/", external: false
  },
  {
    name: "OFICINA PANAMA",
    addres: "direccion",
    city: "NUMERO TELEFONICO",
    tel: "(60 1) 6001605",
    href: "/", current: useRoute().path == "/", external: false
  }

  ]);

</script>
<template>
  <footer class="p-4 sm:p-6 bg-gray-800 lg:py-10">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between lg:pr-10">
        <div class="mb-6 md:mb-0">
          <NuxtLink to="/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-300">
              ISI DEEP TECH
            </span>
          </NuxtLink>
          <span class="italic text-gray-500">
            POTENGIA TU NEGOCIO
            Con Inteligencia Artificial
          </span>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-4">
          <div v-for="item in offices">
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">{{item.name}} </h2>
            <ul class="text-gray-400">
              <li class="">
                <NuxtLink class="hover:underline">{{item.addres}}</NuxtLink>
              </li>
              <li>
                <a href="/repos/" class="hover:underline">
                  {{item.tel}}
                </a>
              </li>
              <li>
                {{ item.city }}
              </li>
            </ul>
          </div>
          <!-- end for -->
        </div>
      </div>

      <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024 ISI DEEP TECH &middot; <a href="/dash/">🚀</a>
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://t.me/hazadus" class="text-gray-500 hover:text-gray-400">
            <Icon name="bi:telegram" size="1.5rem" />
          </a>
          <a href="mailto:hazadus7@gmail.com" class="text-gray-500 hover:text-gray-400">
            <Icon name="material-symbols:mail-rounded" size="1.5rem" />
          </a>
          <a href="https://github.com/hazadus" class="text-gray-500 hover:text-gray-400">
            <Icon name="octicon:mark-github-16" size="1.5rem" />
          </a>
          <a href="https://fosstodon.org/@hazadus" rel="me" class="text-gray-500 hover:text-gray-400">
            <Icon name="mdi:mastodon" size="1.5rem" />
          </a>
          <a href="https://hazadus.ru/rss.xml" class="text-gray-500 hover:text-gray-400">
            <Icon name="material-symbols:rss-feed" size="1.5rem" />
          </a>
          <a href="https://stackoverflow.com/users/20197519/hazadus" class="text-gray-500 hover:text-gray-400">
            <Icon name="ion:logo-stackoverflow" size="1.5rem" />
          </a>
          <a href="https://steamcommunity.com/id/hazadus/" class="text-gray-500 hover:text-gray-400">
            <Icon name="bi:steam" size="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
