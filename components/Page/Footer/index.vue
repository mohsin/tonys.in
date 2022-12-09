<template>
  <section id="footer" class="relative overflow-hidden border-t-2 border-[#e5e5e5] bg-[#f0f0f0] py-8 sm:py-16 px-0 lg:pt-24 lg:pb-32">
    <div class="mx-auto my-0 max-w-full w-[calc(100%-40px)] sm:w-[calc(100%-100px)] md:w-[calc(100%-80px)] lg:w-[70em]">
      <header>
        <h2 class="text-[#888] text-center font-normal uppercase text-lg sm:text-2xl md:text-3xl mx-0 mt-0 mb-4 sm:mb-12 tracking-widest">Questions or comments? <strong class="font-semibold">Get in touch:</strong></h2>
      </header>
      <div class="grid sm:grid-cols-2 gap-12">
        <section class="pt-0 sm:pt-12 sm:pl-6">
          <form method="post" action="#">
            <div class="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
              <div class="col-span-2 sm:col-span-1">
                <input class="w-full transition-colors duration-300 ease-in-out appearance-none block shadow-[inset_2px_2px_0px_0px-rgba(0,0,0,0.1)] rounded leading-5 py-3 px-2 font-common font-light text-gray-200 text-xl bg-[#f7f7f7] focus:bg-[#fff]" name="name" placeholder="Name" type="text" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <input class="w-full transition-colors duration-300 ease-in-out appearance-none block shadow-[inset_2px_2px_0px_0px-rgba(0,0,0,0.1)] rounded leading-5 py-3 px-2 font-common font-light text-gray-200 text-xl bg-[#f7f7f7] focus:bg-[#fff]" name="email" placeholder="Email" type="text" />
              </div>
              <div class="col-span-2">
                <textarea class="w-full min-h-[7em] sm:min-h-[11em] transition-colors duration-300 ease-in-out appearance-none block shadow-[inset_2px_2px_0px_0px-rgba(0,0,0,0.1)] rounded leading-5 py-3 px-2 font-common font-light text-gray-200 text-xl bg-[#f7f7f7] focus:bg-[#fff]" name="message" placeholder="Message"></textarea>
              </div>
              <div class="col-span-2">
                <a href="#" class="transition-all duration-300 ease-in-out appearance-none relative block sm:inline-block bg-[#ed786a] !text-white uppercase rounded-sm border-0 outline-0 text-sm shadow-[0.125em_0.175em_0_0_rgba(0,0,0,0.125)] font-semibold text-center tracking-widest px-0 w-full sm:w-auto sm:px-11 py-4 sm:py-3 hover:bg-[#fd887a] active:bg-[#fd887a] icon solid justify-center">
                  <Icon class="text-sm opacity-50 h-8 w-8 no-underline font-normal not-italic antialiased leading-8 relative -top-[0.025em] text-center pr-3 normal-case" name="fa-solid:envelope" />
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </form>
        </section>
        <section class="pt-0 sm:pt-12 sm:pl-6">
          <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phaselamet
          mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur
          leo nibh, rutrum eu malesuada.</p>
          <div class="grid sm:grid-cols-2 sm:mt-8">
            <PageFooterInfoLinks :items="contacts" />
            <PageFooterInfoLinks class="max-sm:!pt-0" :items="socials" />
          </div>
        </section>
      </div>
    </div>
    <div class="border-t-2 border-[#e5e5e5] mt-8 sm:mt-24 pt-16 sm:pt-8 text-center mx-auto my-0 max-w-full w-[calc(100%-40px)] sm:w-[calc(100%-100px)] md:w-[calc(100%-80px)] lg:w-[70em]">
      <ul class="mb-0 sm:mb-auto">
        <li class="block pl-0 ml-o b-l-0">&copy; Untitled. All rights reserved.</li><li>Design: <a class="transition-colors duration-300 ease-in-out text-[#666] border-b-[1px] border-[#ddd] hover:text-[#ed786a] hover:border-0" href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </section>
</template>

<script setup>
var contacts = [
  {
    icon: 'fa-solid:home',
    text: `1234 Somewhere Road
          <br />Nashville, TN 00000
          <br />USA`
  },
  {
    icon: 'fa-solid:phone',
    text: '(000) 000-0000',
    href: 'tel:(000) 000-0000'
  },
  {
    icon: 'fa-solid:home',
    text: 'info@untitled.tld',
    href: 'mailto:info@untitled.tld'
  },
];
var socials = [
  {
    icon: 'fa6-brands:twitter',
    text: '@untitled',
    href: 'http://twitter.com/@untitled'
  },
  {
    icon: 'fa6-brands:instagram',
    text: 'instagram.com/untitled',
    href: 'http://instagram.com/@untitled'
  },
  {
    icon: 'fa6-brands:dribbble',
    text: 'dribbble.com/untitled',
    href: 'http://dribble.com/untitled'
  },
  {
    icon: 'fa6-brands:facebook-f',
    text: 'facebook.com/untitled',
    href: 'http://facebook.com/untitled'
  }
];
</script>
