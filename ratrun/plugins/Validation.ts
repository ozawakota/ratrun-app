export default defineNuxtPlugin(() => {
  return {
    provide: {
      checkValidate: (inputData,value,key) => {
        const isValid = inputData[key].validate(value);

        if (!isValid) {
          inputData[key].isValid = false;
          inputData[key].error = `${
            inputData[key].label
          }を正しく入力してください。${inputData[key].required ? "必須項目です。" : ""}`;
        } else {
          inputData[key].isValid = true;
          inputData[key].error = "";
        }

      }
    }
  }
})