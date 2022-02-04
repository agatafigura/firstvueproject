<template>

<div class="w-screen h-screen bg-very-light-sage flex justify-center p-16 pt-24 content-center overflow-x-hidden">
  <div class="w-11/12 h-11/12 blur flex bg-medium-light rounded -m-5">
    <div class="w-1/2 flex flex-col gap-y-12 justify-center items-center p-5">
     <div class="flex flex-col gap-y-2 items-start w-full justify-start">
       <h1 class="text-gray-900 text-5xl font-extrabold">Get in touch</h1>
       <h2 class="text-sage text-5xl font-serif italic font-bold">talk to us</h2>
     </div>
     <div class="w-full text-left">
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, nisl vitae cursus placerat, mi metus viverra ante, non gravida lectus tellus vel mauris. Fusce vulputate neque id odio tincidunt facilisis. Fusce laoreet justo ac tempus laoreet. Vivamus eu commodo sapien. Ut vitae metus a metus tristique pretium hendrerit a mi. Ut odio augue, auctor at feugiat vitae, dignissim vitae turpis. Nulla non lorem eget est ornare fermentum. Fusce auctor lacus quis mattis ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis at lorem fermentum, eleifend mi quis, blandit sem. Cras a rhoncus erat. Ut lacinia nec nulla a venenatis.</p>
     </div>
    </div>
  <div
    id="form"
    class="w-1/2 rounded flex justify-center content-center bg-leaves" 
  >
    <form
      @submit.prevent="submit"
      class="max-w-sm flex flex-col content-center justify-center gap-y-5"
    >
      <div class="flex content-center justify-center font-bold text-3xl text-sage">
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="w-1/3">
            <label
              class="block text-white font-semibold md:text-left mb-1 md:mb-0 pr-4"
              for="fullname"
              >Full name</label
            >
          </div>
          <div class="w-2/3">
            <input
              v-model="fullname"
              type="text"
              class="bg-light-sage appearance-none border-2 border-light-sage rounded w-full py-1.5 px-4 text-gray-700 border-0 focus:outline-none focus:bg-white focus:border-dark-sage"
            />
            <div
              v-if="fullnameError"
              class="text-red-700 text-xs flex justify-end"
            >
              This field is required
            </div>
          </div>
        </div>
      </div>
      <div class="email flex flex-col">
        <div class="label-input flex items-center text-white">
          <div class="w-1/3">
            <label
              class="block font-semibold md:text-left mb-1 md:mb-0 pr-4"
              for="email"
              >E-mail</label
            >
          </div>
          <div class="w-2/3">
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
        <div class="label-input flex items-center text-white">
          <div class="w-1/3">
            <label
              class="block font-semibold md:text-left mb-1 md:mb-0 pr-4"
              for="subject"
              >Subject</label
            >
          </div>
          <div class="w-2/3">
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
        <div class="label-input flex">
          <div class="w-1/3">
            <label
              class="block font-semibold md:text-left mb-1 md:mb-0 pr-4 text-white"
              for="message"
              >Message</label
            >
          </div>
          <div class="w-2/3">
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
          class="bg-very-dark-sage rounded w-full py-1.5 px-5 font-semibold text-very-light-sage hover:bg-dark-sage mt-3"
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
import { computed, ref } from "vue";
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
