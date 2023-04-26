export default defineNuxtPlugin(() => {
  return {
    provide: {
      email: (value, required) => {
        const emailRegex = /^[^\s@]{1,255}@[^\s@]+\.[^\s@]+$/;
        const specialCharRegex = /[!#\$%&'\*\+\-\/=\?\^_`\{\|\}~]/;
        const isEmailValid = required ? emailRegex.test(String(value)) : true;
        const isSpecialCharValid = !specialCharRegex.test(String(value));
        return isEmailValid && isSpecialCharValid;
      },
      password: (value, required) => {
        const passwordRegex = /^([a-zA-Z0-9]{8,16})$/;
        const specialCharRegex = /[!#\$%&'\*\+\-\/=\?\^_`\{\|\}~]/;
        const isPasswordValid = required ? passwordRegex.test(String(value)) : true;
        const isSpecialCharValid = !specialCharRegex.test(String(value));
        return isPasswordValid && isSpecialCharValid;
      }
    }
  }
})