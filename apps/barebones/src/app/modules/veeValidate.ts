import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeError,
  configure,
} from 'vee-validate';
import { UserModule } from '@src/types';

export const install: UserModule = ({ app }) => {
  app.component('VeeForm', VeeForm);
  app.component('VeeField', VeeField);
  app.component('VeeError', VeeError);
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
  });
  console.log('Installed VeeValidate.');
};
