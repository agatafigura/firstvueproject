<template>
  <div
    class="bg-very-light-sage w-screen h-screen overflow-x-hidden"
  >
    <div
      class="bg-medium-light mx-20 mt-28 mb-10 px-10 py-10 rounded breakpoint3:px-5 breakpoint3:py-5"
    >
      <div class="text-center">
        <h1
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl breakpoint3:text-3xl breakpoint3:text-center"
        >
          Services in our offer
        </h1>
        <h2 class="text-sage font-serif italic text-4xl font-bold sm:text-3xl breakpoint3:text-2xl breakpoint3:text-center">
          Learn more about our products
        </h2>
      </div>

      <div class="mt-14">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
        <!-- services -->
             <!-- service 1 -->
          <div class="relative">
            <dt>
              <div
                v-on:click="open1"
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sage text-white hover:bg-dark-sage cursor-pointer"
              >
                <!-- Heroicon name: outline/globe-alt -->
                <svg
                  class="h-6 w-6 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <p
                v-on:click="open1" class="text-left ml-16 breakpoint3:pt-2 text-lg leading-6 font-medium text-gray-800 font-bold hover:text-very-dark-sage cursor-pointer"
              >
                Service 1
              </p>
            </dt>
            <dd class="text-left mt-2 ml-16 breakpoint3:ml-2 breakpoint3:mt-10 text-base text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
           <!-- service 2 -->
          <div class="relative">
            <dt>
              <div
                v-on:click="open2"
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sage text-white hover:bg-dark-sage cursor-pointer"
              >
                <!-- Heroicon name: outline/scale -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <p
                v-on:click="open2" class="text-left ml-16 breakpoint3:pt-2 text-lg leading-6 font-medium text-gray-800 font-bold hover:text-very-dark-sage cursor-pointer"
              >
                Service 2
              </p>
            </dt>
            <dd class="text-left mt-2 ml-16 breakpoint3:ml-2 breakpoint3:mt-10 text-base text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
         <!-- service 3 -->
          <div class="relative">
            <dt>
              <div
              v-on:click="open3"
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sage text-white hover:bg-dark-sage cursor-pointer"
              >
                <!-- Heroicon name: outline/lightning-bolt -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p
                v-on:click="open3" class="text-left ml-16 breakpoint3:pt-2 text-lg leading-6 font-medium text-gray-800 font-bold hover:text-very-dark-sage cursor-pointer"
              >
                Service 3
              </p>
            </dt>
            <dd class="text-left mt-2 ml-16 breakpoint3:ml-2 breakpoint3:mt-10 text-base text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <!-- service 4 -->
          <div class="relative">
            <dt>
              <div
                v-on:click="open4"
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sage text-white hover:bg-dark-sage cursor-pointer"
              >
                <!-- Heroicon name: outline/annotation -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <p
                v-on:click="open4" class="text-left ml-16 breakpoint3:pt-2 text-lg leading-6 font-medium text-gray-800 font-bold hover:text-very-dark-sage cursor-pointer"
              >
                Service 4
              </p>
            </dt>
            <dd class="text-left mt-2 ml-16 breakpoint3:ml-2 breakpoint3:mt-10 text-base text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
        </dl>
      </div>
    </div>
        <!-- pop-ups -->
             <!-- pop-up 1 -->
    <div
      v-if="popup1open"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-medium-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sage sm:mx-0 sm:h-10 sm:w-10"
              >
          
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-bold text-gray-800"
                  id="modal-title"
                >
                  Service 1
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vel lorem blandit mi consequat scelerisque ac ut eros.
                    Nulla ut tortor vitae nisl pharetra tincidunt. Curabitur id
                    scelerisque massa. Sed sed malesuada mauris. Aliquam cursus,
                    tellus quis posuere iaculis, diam urna ullamcorper urna, in
                    ultrices erat ante ac est. Praesent fringilla, felis sed
                    eleifend sagittis, enim ipsum hendrerit justo, vel dignissim
                    leo felis ac risus. Fusce malesuada, nunc hendrerit
                    pellentesque vehicula, mauris magna blandit felis, eu
                    ullamcorper neque enim sed sapien. Ut eu pellentesque odio,
                    ut vestibulum leo. In vitae purus volutpat, faucibus magna
                    vulputate, fermentum massa.
                  </p>
                </div>
              </div>
              <div v-on:click="close1" class="absolute top-3 right-3">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="bg-medium-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          ></div>
        </div>
      </div>
    </div>
           <!-- pop-up 2 -->
    <div
      v-if="popup2open"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-medium-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sage sm:mx-0 sm:h-10 sm:w-10"
              >
                <!-- Heroicon name: outline/exclamation -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-bold text-gray-800"
                  id="modal-title"
                >
                  Service 2
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vel lorem blandit mi consequat scelerisque ac ut eros.
                    Nulla ut tortor vitae nisl pharetra tincidunt. Curabitur id
                    scelerisque massa. Sed sed malesuada mauris. Aliquam cursus,
                    tellus quis posuere iaculis, diam urna ullamcorper urna, in
                    ultrices erat ante ac est. Praesent fringilla, felis sed
                    eleifend sagittis, enim ipsum hendrerit justo, vel dignissim
                    leo felis ac risus. Fusce malesuada, nunc hendrerit
                    pellentesque vehicula, mauris magna blandit felis, eu
                    ullamcorper neque enim sed sapien. Ut eu pellentesque odio,
                    ut vestibulum leo. In vitae purus volutpat, faucibus magna
                    vulputate, fermentum massa.
                  </p>
                </div>
              </div>
              <div v-on:click="close2" class="absolute top-3 right-3">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="bg-medium-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          ></div>
        </div>
      </div>
    </div>
         <!-- pop-up 3 -->
    <div
      v-if="popup3open"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-medium-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sage sm:mx-0 sm:h-10 sm:w-10"
              >
                <!-- Heroicon name: outline/exclamation -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-bold text-gray-800"
                  id="modal-title"
                >
                  Service 3
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vel lorem blandit mi consequat scelerisque ac ut eros.
                    Nulla ut tortor vitae nisl pharetra tincidunt. Curabitur id
                    scelerisque massa. Sed sed malesuada mauris. Aliquam cursus,
                    tellus quis posuere iaculis, diam urna ullamcorper urna, in
                    ultrices erat ante ac est. Praesent fringilla, felis sed
                    eleifend sagittis, enim ipsum hendrerit justo, vel dignissim
                    leo felis ac risus. Fusce malesuada, nunc hendrerit
                    pellentesque vehicula, mauris magna blandit felis, eu
                    ullamcorper neque enim sed sapien. Ut eu pellentesque odio,
                    ut vestibulum leo. In vitae purus volutpat, faucibus magna
                    vulputate, fermentum massa.
                  </p>
                </div>
              </div>
              <div v-on:click="close3" class="absolute top-3 right-3">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="bg-medium-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          ></div>
        </div>
      </div>
    </div>
        <!-- pop-up 4 -->
        <div
      v-if="popup4open"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-medium-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sage sm:mx-0 sm:h-10 sm:w-10"
              >
                <!-- Heroicon name: outline/exclamation -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-bold text-gray-800"
                  id="modal-title"
                >
                  Service 4
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vel lorem blandit mi consequat scelerisque ac ut eros.
                    Nulla ut tortor vitae nisl pharetra tincidunt. Curabitur id
                    scelerisque massa. Sed sed malesuada mauris. Aliquam cursus,
                    tellus quis posuere iaculis, diam urna ullamcorper urna, in
                    ultrices erat ante ac est. Praesent fringilla, felis sed
                    eleifend sagittis, enim ipsum hendrerit justo, vel dignissim
                    leo felis ac risus. Fusce malesuada, nunc hendrerit
                    pellentesque vehicula, mauris magna blandit felis, eu
                    ullamcorper neque enim sed sapien. Ut eu pellentesque odio,
                    ut vestibulum leo. In vitae purus volutpat, faucibus magna
                    vulputate, fermentum massa.
                  </p>
                </div>
              </div>
              <div v-on:click="close4" class="absolute top-3 right-3">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="bg-medium-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const popup1open = ref(null);
    const popup2open = ref(null);
    const popup3open = ref(null);
    const popup4open = ref(null);

    const open1 = function () {
        popup1open.value = true;
        console.log(popup1open.value);
    };

    const open2 = function () {
        popup2open.value = true;
        console.log(popup2open.value);
    };

    const open3 = function () {
        popup3open.value = true;
        console.log(popup3open.value);
    };

    const open4 = function () {
      popup4open.value = true;
      console.log(popup4open.value);
    }

    const close1 = function () {
      popup1open.value = null;
      console.log(popup1open.value);
    };

    const close2 = function () {
      popup2open.value = null;
      console.log(popup2open.value);
    };

    const close3 = function () {
      popup3open.value = null;
      console.log(popup3open.value);
    };

    const close4 = function () {
      popup4open.value = null;
      console.log(popup4open.value);
    }

    return {
      open1,
      open2,
      open3,
      open4,
      close1,
      close2,
      close3,
      close4,
      popup1open,
      popup2open,
      popup3open,
      popup4open,
    };
  },
};
</script>
