<template>
  <section id="header" class="relative bg-white text-center">
    <div class="absolute flex sm:inline w-full px-16 pt-6 sm:p-0 sm:ml-6 sm:mt-4 sm:w-32 left-0">
      <img class="" src="~/assets/images/logo.png" alt="Tony's Trust Logo" />
    </div>
    <div class="pt-56 sm:pt-40 md:pt-48 lg:pt-56 px-0 pb-16 sm:pb-28 md:pb-20 lg:pb-28 border-b-2 border-[#e5e5e5] shadow-[inset_0px_-8px_0px_0px_#fff,inset_0px_-10px_0px_0px_#e5e5e5] mx-auto my-0 max-w-full w-[calc(100%-40px)] sm:w-[calc(100%-100px)] md:w-[calc(100%-80px)] lg:w-[68em] xl:w-[70em]">

      <!-- Logo -->
        <h1 id="logo" class="[text-shadow:0.05em_0.075em_0px_rgba(0,0,0,0.1)] leading-9 md:leading-5 tracking-[8px] md:tracking-[13px] uppercase font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-red-400"><a class="border-0 no-underline" href="/">Tony's Education & Welfare Trust</a></h1>
        <p class="mt-5 sm:mt-10 tracking-widest sm:tracking-[3px] text-[#888] uppercase font-normal text-sm text-center">{{ quote }}</p>

      <!-- Nav -->
        <nav class="hidden md:block absolute top-12 left-0 w-full cursor-default" id="nav">
          <PageNavList :links="navLinks" />
        </nav>

    </div>
  </section>
</template>

<script setup lang="ts">
var quotes = [
  '“Education is the key to unlock the golden door of freedom” - George Washington Carver',
  '“Education is one thing no one can take away from you.” — Elin Nordegren',
  '“Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.” — Maimonides',
  '“Education is what remains after one has forgotten what one has learned in school.” — Albert Einstein',
  '“Education is not preparation for life; education is life itself.” — John Dewey',
  '“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela',
  '“A child without education is like a bird without wings.” — Tibetan Proverb',
  '“Knowledge is power. Information is liberating. Education is the premise of progress in every society, in every family.” — Kofi Annan',
  '“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” — Malcolm X',
  '“Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.” ― Walter Cronkite'
];
const quote = quotes[Math.floor(Math.random() * quotes.length)];
var navLinks = [
  {
    href: '/',
    icon: 'fa-solid:home',
    text: 'Home'
  },
  {
    href: '/about',
    icon: 'fa-solid:info',
    text: 'About'
  },
  {
    href: '/activities',
    icon: 'fa-solid:theater-masks',
    text: 'Activities'
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