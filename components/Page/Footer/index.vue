<template>
  <section id="footer">
    <div class="container">
      <header>
        <h2>Questions or comments? <strong>Get in touch:</strong></h2>
      </header>
      <div class="row">
        <div class="col-6 col-12-medium">
          <section>
            <form method="post" action="#">
              <div class="row gtr-50">
                <div class="col-6 col-12-small">
                  <input name="name" placeholder="Name" type="text" />
                </div>
                <div class="col-6 col-12-small">
                  <input name="email" placeholder="Email" type="text" />
                </div>
                <div class="col-12">
                  <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div class="col-12">
                  <a href="#" class="button icon solid flex justify-center">
                    <Icon class="text-sm h-8 w-8 opacity-50 no-underline font-normal not-italic antialiased leading-8 text-center p-2 mx-2 normal-case" name="fa-solid:envelope" />
                    <span>Send Message</span>
                  </a>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div class="col-6 col-12-medium">
          <section>
            <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phaselamet
            mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur
            leo nibh, rutrum eu malesuada.</p>
            <div class="row">
              <div class="col-6 col-12-small">
                <PageFooterInfoLinks :items="contacts" />
              </div>
              <div class="col-6 col-12-small max-sm:!pt-0">
                <PageFooterInfoLinks :items="socials" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div id="copyright" class="container">
      <ul class="links">
        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
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
