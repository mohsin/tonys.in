<template>
  <section id="header" class="relative bg-white text-center">
    <div class="pt-24 sm:pt-40 md:pt-48 lg:pt-56 px-0 pb-16 sm:pb-28 md:pb-20 lg:pb-28 border-b-2 border-[#e5e5e5] shadow-[inset_0px_-8px_0px_0px_#fff,inset_0px_-10px_0px_0px_#e5e5e5] mx-auto my-0 max-w-full w-[calc(100%-40px)] sm:w-[calc(100%-100px)] md:w-[calc(100%-80px)] lg:w-[68em] xl:w-[70em]">

      <!-- Logo -->
        <h1 id="logo" class="[text-shadow:0.05em_0.075em_0px_rgba(0,0,0,0.1)] leading-9 md:leading-5 tracking-[8px] md:tracking-[13px] uppercase font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-red-400"><a class="border-0 no-underline" href="/">Strongly Typed</a></h1>
        <p class="mt-5 sm:mt-10 tracking-widest sm:tracking-[3px] text-[#888] uppercase font-normal text-sm text-center">A responsive HTML5 site template. Manufactured by HTML5 UP.</p>

      <!-- Nav -->
        <nav class="hidden md:block absolute top-12 left-0 w-full cursor-default" id="nav">
          <PageNavList :links="navLinks" />
        </nav>

    </div>
  </section>
</template>

<script setup lang="ts">
var navLinks = [
  {
    href: '/',
    icon: 'fa-solid:home',
    text: 'Introduction'
  },
  {
    href: '#',
    icon: 'fa-solid:chart-bar',
    text: 'Dropdown',
    children: [
      {
        href: '#',
        text: 'Lorem ipsum dolor'
      },
      {
        href: '#',
        text: 'Magna phasellus'
      },
      {
        href: '#',
        text: 'Etiam dolore nisl'
      },
      {
        href: '#',
        text: 'Phasellus consequat',
        children: [
          {
            href: '#',
            text: 'Lorem ipsum dolor'
          },
          {
            href: '#',
            text: 'Magna phasellus'
          },
          {
            href: '#',
            text: 'Etiam dolore nisl'
          }
        ]
      },
      {
        href: '#',
        text: 'Veroeros feugiat'
      }
    ]
  },
  {
    href: '/left-sidebar',
    icon: 'fa-solid:cog',
    text: 'Left Sidebar'
  },
  {
    href: '/right-sidebar',
    icon: 'fa-solid:retweet',
    text: 'Right Sidebar'
  },{
    href: '/no-sidebar',
    icon: 'fa-solid:sitemap',
    text: 'No Sidebar'
  },
];
</script>