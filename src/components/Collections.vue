<template>
  <section>
    <div 
      class="lg:flex lg:items-center lg:mb-5 w-full mb-8" 
      v-for="(collection, index) in collections" 
      :key="collection.id"
      :class="index % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
    >
      <div class="image-container flex-shrink-0 overflow-hidden">
        <img 
          :src="collection.thumbnail_660x400" 
          alt=""
          :srcset="`${collection.thumbnail_500x305} 500w,
                    ${collection.thumbnail_660x400} 660w,
                    ${collection.thumbnail_850x520} 850w`"   
        >
      </div>
      <div class="lg:px-16 px-4">
        <div class="flex items-center justify-between mt-4">
          <h1 class="text-xl font-semibold text-gray-900">{{ collection.name }}</h1>
          <button class="hover:underline lg:hidden text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:border-transparent rounded-sm">Les mer →</button>
        </div>
        <p class="mt-2 text-sm text-gray-800">{{ collection.thumbnail_description }}</p>
        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center mr-6">
              <svg class="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span class="text-sm text-gray-700">{{ collection.colors }} farger</span>
            </div>
            <div class="flex items-center">
              <svg class="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span class="text-sm text-gray-700">{{ collection.sizes }} størrelser</span>
            </div>
          </div>
        </div>
        <a :href="`mailto:@bella@bella.no?subject=Interessert i ${collection.name}`" class="hover:underline lg:block hidden mt-4 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:border-transparent rounded-sm">Les mer →</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Collections',
  props: {
    collections: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .image-container {
    width: 100%;
    height: 250px;
  }

  @media (min-width: 640px) {
    .image-container {
      height: 300px;
    }
  }

  @media (min-width: 768px) {
    .image-container {
      height: 350px;
    }
  }

  @media (min-width: 1024px) {
    .image-container {
      height: 400px;
      width: 60%;
    }
  }

  @media (min-width: 1280px) {
    .image-container {
      height: 520px;
      width: 66%;
    }
  }
</style>