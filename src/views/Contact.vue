<template>

<div class="w-screen h-screen bg-very-light-sage flex justify-center p-16 pt-24 content-center overflow-x-hidden">
  <div class="w-7/8 flex flex-row bg-medium-light rounded breakpoint:flex-col">
    <div class="w-1/2 rounded h-fit bg-medium-light flex flex-col gap-y-6  justify-center items-start p-5 breakpoint:w-full" >
     <div class="flex flex-col lg:gap-y-2 items-center w-full">
       <h1 class="text-center text-gray-900 text-4xl font-extrabold lg:text-4xl md:text-3xl sm:text-2xl">Get in touch with us</h1>
       <h2 class="text-center text-sage text-4xl font-serif italic font-bold lg:text-4xl md:text-3xl sm:text-2xl">& show your ideas</h2>
     </div>
     <div class="w-full text-left">
      <p class="text-gray-700 text-md breakpoint:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, nisl vitae cursus placerat, mi metus viverra ante, non gravida lectus tellus vel mauris. Fusce vulputate neque id odio tincidunt facilisis. Fusce laoreet justo ac tempus laoreet. Vivamus eu commodo sapien. Ut vitae metus a metus tristique pretium hendrerit a mi. Ut odio augue, auctor at feugiat vitae, dignissim vitae turpis. Nulla non lorem eget est ornare fermentum. Fusce auctor lacus quis mattis ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis at lorem fermentum, eleifend mi quis, blandit sem. Cras a rhoncus erat. Ut lacinia nec nulla a venenatis.</p>
     </div>
    </div>
  <div
    id="form"
    class="w-1/2 rounded flex justify-center content-center bg-cover bg-bottom bg-no-repeat bg-leaves breakpoint:w-full breakpoint:p-7" 
  >
    <form
      @submit.prevent="submit"
      class="max-w-sm flex flex-col content-center justify-center gap-y-5"
    >
      <div class="flex content-center justify-center font-bold text-3xl text-dark-sage">
      </div>

      <div class="flex flex-col">
        <div class="flex items-center breakpoint:flex-col breakpoint:items-start">
          <div class="w-1/3 breakpoint:w-full breakpoint:text-left">
            <label
              class="block text-gray-800 font-semibold md:text-left mb-1 md:mb-0 pr-4"
              for="fullname"
              >Full name</label
            >
          </div>
          <div class="w-2/3 breakpoint:w-full">
            <input
              v-model="fullname"
              type="text"
              class="bg-light-sage appearance-none border-2 border-light-sage rounded w-full py-1.5 px-4 text-gray-700 border-0 focus:outline-none focus:bg-white focus:border-dark-sage"
            />
            <div
              v-if="fullnameError"
              class="text-red-700 text-xs flex justify-end h-1"
            >
              This field is required
            </div>
          </div>
        </div>
      </div>
      <div class="email flex flex-col">
        <div class="label-input flex flex-row items-center text-gray-800 breakpoint:flex-col">
          <div class="w-1/3 breakpoint:w-full breakpoint:text-left">
            <label
              class="block font-semibold md:text-left mb-1 md:mb-0 pr-4"
              for="email"
              >E-mail</label
            >
          </div>
          <div class="w-2/3 breakpoint:w-full">
            <input
              v-model="email"
              type="email"
              class="bg-light-sage appearance-none rounded w-full py-1.5 px-4 text-gray-700 border-2 border-light-sage focus:outline-none focus:bg-white focus:border-dark-sage"
            />
          </div>
        </div>
        <div v-if="emailError" class="text-red-700 text-xs flex justify-end">
          This field is required
        </div>
      </div>
      <div class="subject flex flex-col">
        <div class="label-input flex flex-row items-center text-gray-800 breakpoint:flex-col">
          <div class="w-1/3 breakpoint:w-full breakpoint:text-left">
            <label
              class="block font-semibold md:text-left mb-1 md:mb-0 pr-4"
              for="subject"
              >Subject</label
            >
          </div>
          <div class="w-2/3 breakpoint:w-full">
            <input
              v-model="subject"
              type="text"
              class="bg-light-sage appearance-none border-2 border-light-sage rounded w-full py-1.5 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-dark-sage"
            />
          </div>
        </div>
        <div v-if="subjectError" class="text-red-700 text-xs flex justify-end">
          This field is required
        </div>
      </div>
      <div class="message flex flex-col">
        <div class="label-input flex flex-row breakpoint:flex-col">
          <div class="w-1/3 breakpoint:w-full text-left">
            <label
              class="block font-semibold md:text-left mb-1 md:mb-0 pr-4 text-gray-800"
              for="message"
              >Message</label
            >
          </div>
          <div class="w-2/3 breakpoint:w-full">
            <textarea
              v-model="message"
              class="bg-light-sage border-2 border-light-sage appearance-none rounded w-full h-28 py-1.5 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-dark-sage"
            ></textarea>
          </div>
        </div>
        <div v-if="messageError" class="text-red-700 text-xs flex justify-end">
          This field is required
        </div>
      </div>
      <div class="button flex content-center justify-center">
        <button
          v-on:click="setup"
          type="submit"
          class="bg-dark-sage rounded w-full py-1.5 px-5 font-semibold text-very-light-sage hover:bg-dark-sage mt-3"
        >
          Submit message
        </button>
      </div>
    </form>
  </div>
  </div>
</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const fullname = ref(null);
    const email = ref(null);
    const subject = ref(null);
    const message = ref(null);
    const fullnameError = ref(null);
    const emailError = ref(null);
    const subjectError = ref(null);
    const messageError = ref(null);

    const submit = function () {
      console.log(fullname.value);
      console.log(email.value);
      console.log(subject.value);
      console.log(message.value);

      if (!fullname.value) {
        fullnameError.value = true;
      }
      if (!email.value) {
        emailError.value = true;
      }
      if (!subject.value) {
        subjectError.value = true;
      }
      if (!message.value) {
        messageError.value = true;
      }
      if (fullname.value && email.value && subject.value && message.value) {
        fullname.value = email.value = subject.value = message.value = "";
        fullnameError.value = null;
        emailError.value = null;
        subjectError.value = null;
        messageError.value = null;
      }
    };

    return {
      submit,
      fullname,
      email,
      subject,
      message,
      fullnameError,
      emailError,
      subjectError,
      messageError,
    };
  },
};
</script>
