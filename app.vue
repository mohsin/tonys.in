<template>
  <Body class="is-preload">
    <div id="page-wrapper">
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
</template>
