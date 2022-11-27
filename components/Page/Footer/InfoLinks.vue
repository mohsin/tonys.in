<template>
  <ul class="list-none pl-0 !mb-0">
    <li class="flex items-start justify-between py-3 m-0" v-for="item in items" v-bind:key="item.text">
      <span class="w-14"><Icon class="text-sm bg-gandalf-gray text-grayish rounded-4xl h-8 w-8 no-underline font-normal not-italic antialiased leading-8 text-center p-2 normal-case" :name="item.icon" /></span>
      <span class="flex-1"><a target="_new" class="no-underline" v-html="item.text" :href="item.href" /></span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

type ListItem = {
    icon: string,
    href: string,
    text: string
}

defineProps({
  items: { type: Array as PropType<ListItem[]>, required: true }
})

</script>