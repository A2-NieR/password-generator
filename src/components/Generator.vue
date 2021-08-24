<template>
  <div class="container">
    <form @submit.prevent="submitParams">
      <input type="text" v-model="password" />
      <div class="includes">
        <label for="checkbox">A-Z</label>
        <input
          type="checkbox"
          v-model="includeUppercase"
        />
        <label for="checkbox">a-z</label>
        <input
          type="checkbox"
          v-model="includeLowercase"
        />
        <label for="checkbox">0-9</label>
        <input
          type="checkbox"
          v-model="includeNumbers"
        />
        <label for="checkbox">!@#$%^&*</label>
        <input
          type="checkbox"
          v-model="includeSpecial"
        />
      </div>
      <div class="length">
        <label>Password Length: </label>
        <input type="number" v-model.number="passwordLength" />
      </div>
      <button>Generate</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import generatePassword from '../composables/passwordGenerator';

export default {
  setup() {
    const password = ref('');
    const passwordLength = ref(8);
    const includeUppercase = ref(false);
    const includeLowercase = ref(true);
    const includeNumbers = ref(false);
    const includeSpecial = ref(false);

    const submitParams = () => {
      const { finalPassword } = generatePassword(
        passwordLength.value,
        includeUppercase.value,
        includeLowercase.value,
        includeNumbers.value,
        includeSpecial.value,
      );
      password.value = finalPassword;
    };

    return {
      password,
      passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSpecial,
      submitParams,
    };
  },
};
</script>

<style></style>
