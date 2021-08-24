<template>
  <div class="container">
    <form @submit.prevent="submitParams">
      <input type="text" v-model="password" id="final-pw" />
      <div class="includes">
        <label class="checkbox">
          <span>A-Z</span>
          <input type="checkbox" v-model="includeUppercase" />
        </label>
        <label class="checkbox">
          <span>a-z</span>
          <input type="checkbox" v-model="includeLowercase" />
        </label>
        <label class="checkbox">
          <span>0-9</span>
          <input type="checkbox" v-model="includeNumbers" />
        </label>
        <label class="checkbox">
          <span>Symbols</span>
          <input type="checkbox" v-model="includeSpecial" />
        </label>
      </div>
      <div class="length">
        <label>Password Length: </label>
        <input type="number" v-model.number="passwordLength" id="pw-length" />
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

<style>
#final-pw {
  height: 30px;
  width: 220px;
  border-radius: 4px;
  border: none;
  margin: 15px;
  text-align: center;
  font-size: 1rem;
  color: #2E3192;
}

.includes {
  margin: 15px;
}

input[type="checkbox"] {
  color: teal;
}

.length {
  margin: 15px;
}

#pw-length {
  height: 30px;
  width: 50px;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-size: 1rem;
  color: #2E3192;
}

button {
  height: 40px;
  width: 100px;
  background: darkorange;
  color: white;
  border-radius: 4px;
  border: none;
  margin: 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

label {
  margin-left: 15px;
}

.checkbox {
  display: inline-flex;
  cursor: pointer;
  position: relative;
  align-items: center;
}

.checkbox > span {
  padding: 0.5rem 0.25rem;
}

.checkbox > input {
  height: 1.5em;
  width: 1.5em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: none;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: white;
  cursor: pointer;
}

.checkbox > input:checked {
  background-color: darkorange;
}

.checkbox > input:checked + span::before {
  display: block;
  text-align: center;
  color: darkorange;
  position: absolute;
  left: 0.7rem;
  top: 0.2rem;
}

.checkbox > input:active {
  border: 2px solid darkorange;
}
</style>
