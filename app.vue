<template>
  <Html class="box-border overflow-x-hidden md:overflow-x-auto">
    <Body ref="body" :class="{ '!animate-none !transition-none before:!animate-none before:!transition-none after:!animate-none after:!transition-none' : isPreload }" class="bg-[#f0f0f0] font-common font-light text-[#777] leading-7 text-sm lg:text-base xl:text-lg overflow-x-hidden md:overflow-x-auto">
      <div id="page-wrapper" class="backface-hidden transition-transform duration-500 mb-0 pb-[1px] md:pb-0">
        <Header />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <PageFooter />
      </div>
      <div class="block sm:hidden h-10 fixed top-0 left-0 w-full z-50 transition ease-linear delay-500">
        <a href="#navPanel" class="flex justify-center items-center bg-gray-200 rounded shadow-[3px_3px_0_0_rgba(0,0,0,0.15)] m-1 border-0 h-12 w-16 absolute top-0 left-0 no-underline"><Icon class="text-sm h-8 w-8 mx-2 no-underline font-normal not-italic antialiased leading-8 text-center p-2 normal-case text-neutral-400" name="fa-solid:bars" /></a>
      </div>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const isPreload = useState('preload', () => true)

onMounted(() => {
  setTimeout((preload) => preload.value = false, 100, isPreload)
});
</script>

<style>
#navPanel {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translateX(-275px);
  -webkit-transform: translateX(-275px);
  -ms-transform: translateX(-275px);
  transform: translateX(-275px);
  -moz-transition: -moz-transform 0.5s ease;
  -webkit-transition: -webkit-transform 0.5s ease;
  -ms-transition: -ms-transform 0.5s ease;
  transition: transform 0.5s ease;
  display: block;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 275px;
  z-index: 10002;
  background: #444;
  border-right: solid 2px #3c3c3c;
  font-weight: 400;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 2px;
  font-size: 0.85em;
}

#navPanel .link {
  display: block;
  color: #ddd;
  text-decoration: none;
  height: 44px;
  line-height: 44px;
  border: 0;
  border-top: solid 1px #3c3c3c;
  padding: 0 1em 0 1em;
}

#navPanel .link:first-child {
  border-top: 0;
}

#navPanel .link.depth-0 {
  font-weight: 600;
  color: #fff;
}

#navPanel .indent-1 {
  display: inline-block;
  width: 1em;
}

#navPanel .indent-2 {
  display: inline-block;
  width: 2em;
}

#navPanel .indent-3 {
  display: inline-block;
  width: 3em;
}

#navPanel .indent-4 {
  display: inline-block;
  width: 4em;
}

#navPanel .indent-5 {
  display: inline-block;
  width: 5em;
}

#navPanel .depth-0 {
  color: #fff;
}

body.navPanel-visible #page-wrapper {
  -moz-transform: translateX(275px);
  -webkit-transform: translateX(275px);
  -ms-transform: translateX(275px);
  transform: translateX(275px);
}

body.navPanel-visible #titleBar {
  -moz-transform: translateX(275px);
  -webkit-transform: translateX(275px);
  -ms-transform: translateX(275px);
  transform: translateX(275px);
}

body.navPanel-visible #navPanel {
  -moz-transform: translateX(0);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
</style>
