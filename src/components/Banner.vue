<template>
  <section>
    <div class="xl:px-0 px-4">
      <div class="bg-brand-50 relative w-full lg:my-16 lg:px-16 px-4 my-4">
        <div class="hidden md:block sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2 md:top-0 z-10 h-56">
          <img :src="require('@/assets/images/store.jpg')" class="z-25 object-cover w-full h-full" />
        </div>
        <div class="max-w-7xl sm:px-6 lg:px-8 lg:py-16 relative px-4 py-12 mx-auto">
          <div class="md:mr-auto md:w-1/2 md:pr-10">
            <h1 class="sm:text-4xl mt-2 text-3xl font-extrabold tracking-tight text-brand-700">
              Ciao! Velkommen til Bella.
            </h1>
            <div class="mt-5 text-base text-gray-700">
              <p>Bella er et norsk/italiensk flise- og interiørkonsept som vektlegger design og kvalitet. Bella er inspirert av italiensk livsstil og formspråk ispedd nordiske tradisjoner. Dette gir topp kvalitetsfliser og baderomsinnredninger som er både tidløse og som rammer tidsånden. Bella betyr vakkert på italiensk, og nettopp dette preger vårt konsept.</p>
              <p class="mt-4">Vi satser på produkter som representerer det siste innen design kombinert med italienske håndverkstradisjoner. Hos Bella vil du finne unike farger og kombinasjoner. Vi har 30 års erfaring fra branskjen gjennom flere generasjoner.</p>
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
