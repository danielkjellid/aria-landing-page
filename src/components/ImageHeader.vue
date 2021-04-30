<template>
  <section>
    <article class="image-full-container relative overflow-hidden">
      <div class="table-cell align-middle">
        <img 
          :src="object.image_1536x660" 
          alt="Decorative background image"
          class="absolute bottom-0 left-0 right-0 w-full h-full"
          :srcset="`${object.image_512x512} 512w,
                    ${object.image_1024x1024} 1024w,
                    ${object.image_1024x480} 1024w,
                    ${object.image_1536x660} 1536w,
                    ${object.image_2048x800} 2048w,
                    ${object.image_2560x940} 2560w,
                    ${object.image_3072x940} 3072w`"
        >
        <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center h-full px-4">
          <div class="text-center">
            <slot>
              <h2 class="text-2xl font-medium text-white">{{ object.name }}</h2>
            </slot>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 mb-8 text-center">
          <button @click="navigateToContent" class="appearance-none text-gray-300 hover:text-gray-400">
            <svg class="h-12 w-12 animate-bounce-slow text-white hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import breakpoints from '@/utils/breakpoints'

export default {
  name: 'BaseImageheader',
  props: {
    object: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      breakpoints: breakpoints
    }
  },
  methods: {
    navigateToContent() {
      if (this.breakpoints.w > 1536 && this.breakpoints.w <= 3072) return window.scrollTo({top: 800, left: 0, behavior: 'smooth'})
      if (this.breakpoints.w > 1024 && this.breakpoints.w <= 1536) return window.scrollTo({top: 660, left: 0, behavior: 'smooth'})
      if (this.breakpoints.w > 768 && this.breakpoints.w <= 1024) return window.scrollTo({top: 480, left: 0, behavior: 'smooth'})
      if (this.breakpoints.w > 640 && this.breakpoints.w <= 768) return window.scrollTo({top: 366, left: 0, behavior: 'smooth'})
      if (this.breakpoints.w > 375 && this.breakpoints.w <= 640) return window.scrollTo({top: 300, left: 0, behavior: 'smooth'})
      if (this.breakpoints.w > 0 && this.breakpoints.w <= 375) return window.scrollTo({top: 375, left: 0, behavior: 'smooth'})

      return window.scrollTo({top: 940, left: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style scoped>
  .image-full-container {
    height: 375px;
    width: 100%;
  }

  .image-half-container {
    height: 375px;
    width: 100%;
  }

  @media (min-width: 640px) {
    .image-full-container {
      height: 300px;
      width: 100%;
    }

    .image-half-container {
      height: 300px;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .image-full-container {
      height: 366px;
      width: 100%;
    }

    .image-half-container {
      height: 366px;
      width: 100%;
    }
  }

  @media (min-width:1024px) {
    .image-full-container {
      height: 480px;
      width: 100%;
    }

    .image-half-container {
      height: 480px;
      width: 100%;
    }
  }

  @media (min-width: 1280px) {
    .image-full-container {
      height: 660px;
      width: 100%;
    }

    .image-half-container {
      height: 660px;
      width: 100%;
    }
  }

  @media (min-width: 1536px) {
    .image-full-container {
      height: 800px;
      width: 100%;
    }

    .image-half-container {
      height: 800px;
      width: 100%;
    }
  }

  @media (min-width: 2048px) {
    .image-full-container {
      height: 800px;
      width: 100%;
    }

    .image-half-container {
      height: 800px;
      width: 100%;
    }
  }

  @media (min-width: 3072px) {
    .image-full-container {
      height: 940px;
      width: 100%;
    }

    .image-half-container {
      height: 940px;
      width: 100%;
    }
  }
</style>