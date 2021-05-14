<template>
  <section>
    <div class="xl:px-0 px-4">
      <div class="bg-brand-50 lg:mt-16 lg:px-8 xl:px-16 relative w-full px-4 my-4">
        <div class="md:block sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2 md:top-0 z-10 hidden h-56">
          <img :src="require('@/assets/images/store.jpg')" class="z-25 object-cover w-full h-full" />
        </div>
        <div class="max-w-7xl sm:px-6 lg:px-8 lg:py-16 relative px-4 py-12 mx-auto">
          <div class="md:mr-auto md:w-1/2 md:pr-10">
            <h1 class="sm:text-4xl text-brand-700 mt-2 text-3xl font-extrabold tracking-tight">
              Velkommen til Bella.
            </h1>
            <div class="mt-5 text-base text-gray-700">
              <p>Bella er et norsk/italiensk flis- og interiørkonsept som vektlegger design og kvalitet. Inspirert av italiensk livsstil og nordisk design, leverer vi fliser og modulbaserte baderomsinnredninger som passer kundens behov. Bella betyr vakkert på italiensk og det er nettopp dette som er vårt konsept.</p>
              <p class="mt-4">Vi satser på produkter som prepresenterer det siste innen design, kombinert med italienske håndverktradisjoner. Hos Bella vil du finne unike kombinasjoner og løsninger. Vi har 40 års erfaring fra bransjen, gjennom to generasjoner.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
