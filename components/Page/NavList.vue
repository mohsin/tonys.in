<template>
  <ul>
    <li :class="{ 'inline-block pr-5 lg:pr-8 group' : !isNested }" v-for="link in props.links" v-bind:key="link.text">
      <NuxtLink :class="{ 'uppercase' : !isNested }" class="border-0 block font-normal no-underline group-hover:text-[#ED786A] outline-0" :active-class="link.href != '#' ? '[--text-color:#ED786A] [--bg-color:grayish]' : ''" :href="link.href">
        <span>
          <span v-if="!isNested" class="text-sm bg-[var(--text-color,#878787)] text-grayish group-hover:bg-[#ED786A] group-hover:text-[#FFF] rounded-full mx-2 no-underline font-normal not-italic antialiased leading-8 text-center p-2 pt-1.5 normal-case"><Icon v-if="link.icon" :name="link.icon" /></span>
          <span :class="{ 'text-sm tracking-[3px]': !isNested }" class="border-0 no-underline text-[var(--text-color,#666)] transition-colors duration-150 ease-in-out border-grayish hover:text-[#ED786A]">{{ link.text }}</span>
        </span>
      </NuxtLink>
      <PageNavList v-if="link.children" :links="link.children" :isNested="true" />
    </li>
  </ul>
</template>

<style scoped>
.dropotron {
  text-align: left;
  border: solid 1px #e5e5e5;
  border-radius: 4px;
  background: #fff;
  background: rgba(255, 255, 255, 0.965);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  padding: 0.75em 0 0.5em 0;
  min-width: 12em;
  margin-top: calc(-0.5em + 1px);
  margin-left: -2px;
  list-style: none;
}

.dropotron.level-0 {
  margin-top: 1.5em;
  margin-left: -1em;
}

.dropotron.level-0:after {
  content: '';
  display: block;
  position: absolute;
  left: 1.25em;
  top: calc(-0.75em + 1px);
  border-left: solid 0.75em rgba(255, 255, 255, 0);
  border-right: solid 0.75em rgba(255, 255, 255, 0);
  border-bottom: solid 0.75em #fff;
}
.dropotron li ~ li {
  border-top: solid 1px #f0f0f0;
}

.dropotron.level-0:before {
  content: '';
  display: block;
  position: absolute;
  left: 1.25em;
  top: -0.75em;
  border-left: solid 0.75em rgba(255, 255, 255, 0);
  border-right: solid 0.75em rgba(255, 255, 255, 0);
  border-bottom: solid 0.75em #ccc;
}

.dropotron span, .dropotron a {
  display: block;
  padding: 0.1em 0.5em;
  border: 0;
  outline: 0;
}

.dropotron li {
  padding-left: 0;
  margin: 0;
}

.dropotron li:first-child > span, .dropotron li:first-child > a {
  border-top: 0;
  padding-top: 0;
}

.dropotron li:hover > span, .dropotron li:hover > a {
  -moz-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
  -webkit-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
  -ms-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
  color: #ed786a;
}
</style>

<script setup lang="ts">
import { PropType } from 'vue'

interface ListItem {
  href: string,
  icon: string,
  text: string,
  children: ListItem[],
}

const props = defineProps({
  links: {
    type: Array as PropType<ListItem[]>,
    required: true
  },
  isNested: {
    type: Boolean,
    default: false
  }
})
</script>
