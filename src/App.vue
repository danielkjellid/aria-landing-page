<template>
  <div class="content relative">
    <header class="realtive">
      <a href="https://bella.no/">
        <!-- <img class="pt-9 lg:m-0 absolute top-0 left-0 right-0 z-50 px-10 mx-auto" alt="logo" :src="require('@/assets/images/logo.png')" /> -->
        <svg class="sm:mt-4 sm:ml-4 md:w-32 md:h-32 lg:w-40 lg:h-40 absolute top-0 left-0 right-0 z-50 w-24 h-24 mx-auto mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.947 377.947">
          <path d="M189.037 374.166c-102.117 0-185.196-83.08-185.196-185.197S86.92 3.773 189.037 3.773c102.118 0 185.198 83.079 185.198 185.196 0 102.118-83.08 185.197-185.198 185.197" fill="#231f20"/>
          <path d="M169.832 237.967c-9.988 0-19.052-4-26.333-11.804-10.318-10.859-11.548-32.584-2.744-48.427 4.725-8.33 13.597-14.243 23.733-15.816 9.487-1.47 18.607 1.097 25.027 7.045 3.15 2.922 8.437 9.78 8.437 22.899 0 1.753-.113 2.835-.117 2.88l-.151 1.53h-52.213l-.171 1.267a51.03 51.03 0 00-.11 3.32c0 7.948 2.018 14.582 5.838 19.182 7.932 9.549 22.848 10.572 32.685 6.042 3.628-1.673 7.843-5.352 8.651-6.072l2.86-2.601v11.175l-.577.513c-.915.776-5.566 4.593-10.675 6.359-4.85 1.678-9.59 2.508-14.14 2.508zm-22.327-51.108h40.258c-.27-2.107-1.206-5.991-4.408-9.851-3.063-3.695-7.35-5.837-12.398-6.199-5.99-.436-12.34 1.808-16.98 5.994-3.44 3.126-5.637 7.662-6.472 10.056M89.668 237.932c-.411 0-.82-.008-1.231-.024-8.554-.33-16.23-4.08-22.202-10.844-6.428-7.123-6.928-18.907-6.928-22.348v-66.595h9.763v32.594a34.986 34.986 0 019.88-6.255c14.99-6.23 29.767-2.864 38.567 8.779l-.002.001c11.158 14.94 9.583 41.804-3.163 54.279-6.863 6.66-15.797 10.413-24.684 10.413zm3.873-67.38c-3.391 0-6.952.78-10.53 2.377-13.782 6.152-13.94 16.156-13.94 16.579v14.423c0 1.865.231 11.438 4.814 16.762 4.25 5.038 9.68 7.82 15.705 8.051 6.588.244 13.344-2.599 18.504-7.833 4.768-4.891 7.615-13.27 7.615-22.412 0-7.422-1.957-14.419-5.369-19.199-4.145-5.739-10.142-8.748-16.8-8.748M212.105 235.741v-97.62h10.024v97.616l-10.024.004M238.835 235.741v-97.62h10.024v97.616l-10.024.004M284.813 237.868c-6.612 0-13.492-1.952-18.278-7.033-3.695-3.94-5.731-9.104-5.731-14.542 0-.42.016-.869.045-1.37.372-5.716 2.955-10.818 7.268-14.367 4.394-3.608 13.331-5.937 21.974-8.19 6.468-1.683 17.289-4.503 17.289-6.745v-1.745c0-1.597-.321-5.695-3.31-9.225-3.013-3.328-5.93-4.51-11.142-4.51-7.935 0-18.223 4.47-21.072 6.099l-2.568 1.464.097-10.06.991-.445c6.76-3.051 13.99-4.998 20.355-5.484 8.346-.639 15.284 1.746 20.088 6.902 5.381 5.826 6.072 12.482 6.072 17.628v49.496h-8.327l-1.184-7.85c-2.02 2.556-4.596 4.716-7.663 6.428-3.782 2.12-9.245 3.548-14.904 3.549zm22.567-41.741c-2.123.837-5.439 1.784-10.69 3.202-8.057 2.172-18.065 4.872-21.682 7.823-2.884 2.361-4.579 5.697-4.65 9.152v.225c0 3.224 1.378 6.218 3.878 8.43 4.433 3.898 11.201 4.037 16.056 2.862 6.9-1.696 11.837-6.201 14.673-13.388 2.247-5.693 2.422-11.344 2.422-12.94 0-.161-.003-.286-.004-.373l-.003-.108v-4.885" fill="#fff"/>
        </svg>
      </a>
      <ImageHeader :object="headerImage">
        <div class="mt-5 mb-4 text-center">
          <h1 class="text-3xl font-medium text-white">Spennende og vedlikholdsfritt uterom!</h1>
        </div>
      </ImageHeader>
    </header>
    <main class="mx-auto">
      <!-- site  content -->
      <div class="container max-w-screen-xl min-h-screen mx-auto">
        <div class="my-16">
          <Collections :collections="collections" />
        </div>
        <Banner />
        <ContactCard class="my-5" />
      </div>
    </main>
  </div>
</template>

<script>
import ImageHeader from '@/components/ImageHeader.vue'
import Banner from '@/components/Banner.vue'
import Collections from '@/components/Collections.vue'
import ContactCard from '@/components/ContactCard.vue'

export default {
  name: 'LandingPage',
  page() {
    return {
      title: 'Bella - uteflis',
      meta: [
        {
          name: 'description',
          content: 'Kampanjeside for uteflis'
        }
      ]
    }
  }, 
  components: {
    ImageHeader,
    Banner,
    Collections,
    ContactCard
  },
  data() {
    return {
      loaded: true,
      category: {},
      headerImage: {
        name: 'Images',
        image_512x512: require('@/assets/images/header/ragno-512x512.jpg'),
        image_1024x1024: require('@/assets/images/header/ragno-1024x1024.jpg'),
        image_1024x480: require('@/assets/images/header/ragno-1024x480.jpg'),
        image_1536x660: require('@/assets/images/header/ragno-1536x660.jpg'),
        image_2048x800: require('@/assets/images/header/ragno-2048x880.jpg'),
        image_2560x940: require('@/assets/images/header/ragno-2560x940.jpg'),
        image_3072x940: require('@/assets/images/header/ragno-3072x940.jpg'),
      },
      collections: [{
          id: 1,
          name: "Ciao!",
          thumbnail_description: "Har du planer om nytt uterom, bad eller parkettgulv? Vi har utvalget både for deg som ønsker en moderne stil eller en mer klassisk look. Hos oss finner du italienske fliser til inne og utemiljøet og til svømmebassenget. Baderomsinnredninger, dusjløsninger, badekar, parkett m.m. Ta kontakt eller kom innom et av våre showroom i Oslo, Tønsberg eller Lier for inspirasjon. La oss hjelpe deg med å finne den perfekte løsningen for ditt prosjekt og din lommebok. Velkommen!",
          thumbnail_500x305: require('@/assets/images/collections/le-reverse/500x305.jpg'),
          thumbnail_660x400: require('@/assets/images/collections/le-reverse/660x400.jpg'),
          thumbnail_850x520: require('@/assets/images/collections/le-reverse/850x520.jpg'),
          display_link: true
      }, {
          id: 2,
          name: "Samme flis ute og inne",
          thumbnail_description: "Ved å bruke samme flis både ute og inne, blir romfølelsen større og man skaper et helhetlig uttrykk. Vi har et stort utvalg av kolleksjoner som muliggjør dette. Variasjonen i størrelse, tykkelse og overflate gjør at de kan brukes både inne og ute. De oppfyller alle prosjektkrav og har et bredt spekter av bruksområder, fra gulv og vegger inne til terrasse og innkjørsel ute. Vår nye livsstil krever mer vedlikeholdsfrie materialer da man ønsker et uterom hvor man kan hente energi og unnslippe hverdagens stress.",
          thumbnail_500x305: require('@/assets/images/collections/teknostone/500x305.jpg'),
          thumbnail_660x400: require('@/assets/images/collections/teknostone/660x400.jpg'),
          thumbnail_850x520: require('@/assets/images/collections/teknostone/850x520.jpg'),
          display_link: true
      }, {
          id: 3,
          name: "Utefliser i tre-look",
          thumbnail_description: "Skap et spennende uterom med vedlikeholdsfritt flisgulv som ser ut som tre! I Norge bruker vi mye ekte tre i interiøret. Vi har enkel tilgang til råvaren som skaper et varmt og behagelig uttrykk. I uterom, vil bruk av ekte tre by på noen utfordringer. Med trefliser beholder man det varme uttrykket, samtidig som det er slitesterkt og vedlikeholdsfritt. Våre leverandører har klart å gjenskape de taktile overflatene på en utmerket måte. Disse flisene bringer fram følelsen av ekte håndverk.  Utendørsflisene kommer i flere formater og i lengder opp til 240 cm. Leveres i en rekke forskjellige typer “treverk”. ",
          thumbnail_500x305: require('@/assets/images/collections/treflis/500x305.jpg'),
          thumbnail_660x400: require('@/assets/images/collections/treflis/660x400.jpg'),
          thumbnail_850x520: require('@/assets/images/collections/treflis/850x520.jpg'),
          display_link: true
      }, {
          id: 4,
          name: "Utefliser for alle underlag",
          thumbnail_description: "Med våre flisheller finnes det en rekke muligheter ved bruk av forskjellige systemer. Vedlikeholdsfritt og enkel installasjon. Lim de på betong, legg med pidestaller, systemgulv eller skinner. Lekkert i grus og gress. Ved montering på eksisterende terrassebord, kan du enkelt gjøre din terrasse ny og elegant ved hjelp av flisheller på pidestaller.",
          thumbnail_500x305: require('@/assets/images/collections/legging/500x305.jpg'),
          thumbnail_660x400: require('@/assets/images/collections/legging/660x400.jpg'),
          thumbnail_850x520: require('@/assets/images/collections/legging/850x520.jpg'),
          display_link: true
      }, {
          id: 4,
          name: "Nytt bad",
          thumbnail_description: "Vær tidlig ute med å planlegge badet, og finn deretter håndverkere. Løs badet ut ifra produktene du velger, ikke omvendt. Vi hjelper deg gjerne med planleggingen og har et stort utvalg av fliser, innredninger og armaturer fra verdensledende leverandører som Ex.t, Antonio Lupi, Agape, Dornbracht og Ideagroup. Kombiner kvalitet, funksjonalitet og lekker design for å få et bad du vil trives med lenge!",
          thumbnail_500x305: require('@/assets/images/collections/dolcevita/500x305.jpg'),
          thumbnail_660x400: require('@/assets/images/collections/dolcevita/660x400.jpg'),
          thumbnail_850x520: require('@/assets/images/collections/dolcevita/850x520.jpg'),
          display_link: true
      }]
    }
  },
}
</script>

<style>
  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-Regular.otf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-RegularItalic.otf');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-Book.otf');
    font-weight: 500;
    font-style: regular;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-BookItalic.otf');
    font-weight: 500;
    font-style: Italic;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-SemiBold.otf');
    font-weight: 600;
    font-style: regular;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-SemiBoldItalic.otf');
    font-weight: 600;
    font-style: Italic;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-Bold.otf');
    font-weight: 700;
    font-style: regular;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-BoldItalic.otf');
    font-weight: 700;
    font-style: Italic;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-Black.otf');
    font-weight: 900;
    font-style: regular;
  }

  @font-face {
    font-family: 'MessinaSans';
    src: url('./assets/fonts/MessinaSans-BlackItalic.otf');
    font-weight: 900;
    font-style: Italic;
  }

  .content {
    font-family: 'MessinaSans', serif;
  }
</style>