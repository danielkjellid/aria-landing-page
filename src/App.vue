<template>
  <div class="relative content">
    <header>
      <a href="https://bella.no/">
        <img class="absolute pt-9 px-10 left-0 top-0 z-50 right-0 mx-auto lg:m-0" alt="logo" :src="require('@/assets/images/logo.png')" />
      </a>
      <ImageHeader :object="headerImage">
        <div class="text-center mb-4">
          <h1 class="text-2xl font-medium text-white">Det er klart for sommer og uteflis!</h1>
          <h2 class="mt-3 text-lg text-white">En verden av ro, ærlige materialer, naturlige farger og bærekraftige design</h2>
        </div>
      </ImageHeader>
    </header>
    <main class="mx-auto">
      <!-- site  content -->
      <div class="container max-w-screen-xl min-h-screen mx-auto">
        <Banner />
        <Collections :collections="collections" />
        <ContactCard class="my-16" />
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
        image_512x512: require('@/assets/images/header/ubik-ivory-villa-512x512.jpg'),
        image_1024x1024: require('@/assets/images/header/ubik-ivory-villa-1024x1024.jpg'),
        image_1024x480: require('@/assets/images/header/ubik-ivory-villa-1024x480.jpg'),
        image_1536x660: require('@/assets/images/header/ubik-ivory-villa-1536x660.jpg'),
        image_2048x800: require('@/assets/images/header/ubik-ivory-villa-2048x880.jpg'),
        image_2560x940: require('@/assets/images/header/ubik-ivory-villa-2560x940.jpg'),
        image_3072x940: require('@/assets/images/header/ubik-ivory-villa-3072x940.jpg'),
      },
      collections: [{
          id: 1,
          name: "Navn",
          thumbnail_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lobortis arcu vitae pretium. Nam ut sapien scelerisque, pellentesque massa quis, auctor massa. Donec in pellentesque mauris. Praesent convallis, orci a mattis mollis, magna.",
          colors: 4,
          sizes: 4,
          thumbnail_500x305: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-one/hvitevarer_2_1/069021814ccb3aa7830cd245a414eec9.jpg",
          thumbnail_660x400: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-one/hvitevarer_2_1/d76e019ade5969fe12c3ebda63cad26d.jpg",
          thumbnail_850x520: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-one/hvitevarer_2_1/43d8508dbb1f3d4db857be21b99f520b.jpg"
      }, {
          id: 2,
          name: "Navn",
          thumbnail_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lobortis arcu vitae pretium. Nam ut sapien scelerisque, pellentesque massa quis, auctor massa. Donec in pellentesque mauris. Praesent convallis, orci a mattis mollis, magna.",
          colors: 4,
          sizes: 4,
          thumbnail_500x305: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-craft/JKE_Billede_u_person_BRED_1/d749f3afc040498c2c89ee4288b2d1c3.jpg",
          thumbnail_660x400: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-craft/JKE_Billede_u_person_BRED_1/5db1ff944a9d4a4e6fadd565ab34fab7.jpg",
          thumbnail_850x520: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-craft/JKE_Billede_u_person_BRED_1/d07e44ba5884398546ca7a082e17ac7e.jpg"
      }, {
          id: 3,
          name: "Navn",
          thumbnail_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lobortis arcu vitae pretium. Nam ut sapien scelerisque, pellentesque massa quis, auctor massa. Donec in pellentesque mauris. Praesent convallis, orci a mattis mollis, magna.",
          colors: 4,
          sizes: 4,
          thumbnail_500x305: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-multifront/kj%C3%B8kken_1_1/22edd9313bb6431eaacd43db91c9abc3.jpg",
          thumbnail_660x400: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-multifront/kj%C3%B8kken_1_1/344acad76a8e464351e2d1831fd49cf1.jpg",
          thumbnail_850x520: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-multifront/kj%C3%B8kken_1_1/9845b34a5a1f221be0474dfc52f0414c.jpg"
      }, {
          id: 4,
          name: "Navn",
          thumbnail_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lobortis arcu vitae pretium. Nam ut sapien scelerisque, pellentesque massa quis, auctor massa. Donec in pellentesque mauris. Praesent convallis, orci a mattis mollis, magna.",
          colors: 4,
          sizes: 4,
          thumbnail_500x305: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-nature/JKE_20190812_A_002_lukket_laage_1/d385ac0c4369d8d3a3097157fbfd8fb2.jpg",
          thumbnail_660x400: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-nature/JKE_20190812_A_002_lukket_laage_1/58a41d310d9fda4dc44180fb8ef98f32.jpg",
          thumbnail_850x520: "https://flishuset.s3.amazonaws.com/CACHE/images/media/kitchens/nordic-nature/JKE_20190812_A_002_lukket_laage_1/3e65dcf44e144d8cb1bf3258c400df54.jpg"
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