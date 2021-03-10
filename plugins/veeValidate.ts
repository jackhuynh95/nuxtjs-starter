import VeeValidate, { Field } from 'vee-validate';
import Vue from 'vue';

// const NODE_ENV = process.env.NODE_ENV;
export default {
  apply,
};

function apply() {
  Vue.use(VeeValidate, config);
  extendValidator();
}

const config = {
  errorBagName: 'veeErrors',
  fieldsBagName: 'veeFields',
  locale: 'en',
  events: 'input|blur',
  classes: true,
  // classes: false,
  classNames: {
    invalid: 'is-danger',
  },
  dictionary: initDictionaryConfig(),
};

function extendValidator() {
  VeeValidate.Validator.extend('password', function(value) {
    return (
      value &&
      /^.{8,128}$/.test(value) &&
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[^a-z0-9]/i.test(value)
      // /^(?!.*(.)\1\1)/.test(value)
    );
  });

  VeeValidate.Validator.extend('gt_value', (value: any, gtValue: any) => {
    const valueNumber = parseFloat(value);
    return value && valueNumber && valueNumber > gtValue;
  });

  VeeValidate.Validator.extend('lt_value', (value: any, ltValue: any) => {
    const valueNumber = parseFloat(value);
    return value && valueNumber && valueNumber < ltValue;
  });

  VeeValidate.Validator.extend('eq_value', (value: any, etValue: any) => {
    const valueNumber = parseFloat(value);
    return value && valueNumber && valueNumber == etValue;
  });

  // 2FA Code rule
  VeeValidate.Validator.extend('2fa_code', function(value, gtValue) {
    return value && parseInt(value) && value.toString().length === 6;
  });

  // ERC20 Address
  VeeValidate.Validator.extend('erc20_address', function(value) {
    return value && value.length === 42 && /0[xX][a-zA-Z0-9]+/.test(value);
  });

  // License Number
  VeeValidate.Validator.extend('license_number', function(value) {
    return /^\d{2}[a-zA-Z]\d?-\d{4,5}$/.test(value);
  });

  // Vehicle Size
  VeeValidate.Validator.extend('vehicle_size', function(value) {
    return /\d+ ?[x,X] ?\d+ ?[x,X] ?\d+/.test(value);
  });
}

export function initDictionaryConfig() {
  const dictionary = {
    en: {
      custom: {
        new_password: {
          is_not: 'New Password cannot be the same as current password',
        },
        confirm_new_password: {
          confirmed: 'Your password and confirmation password do not match',
        },
        confirm_password: {
          confirmed: 'Your password and confirmation password do not match',
        },
        duration: {
          min_value: (field: string, value: any) => {
            return `Duration must be ${value} minutes or more`;
          },
        },
        order_size: {
          max_value() {
            return 'Your balance is not enough';
          },
        },
        order_total: {
          min_value: (field: string, value: any) => {
            return `Minimum value is ${value}`;
          },
          max_value: (field: string, value: any) => {
            return `Maximum value is ${value}`;
          },
        },
      },
      messages: {
        password: 'Invalid password',
        email: 'Invalid email address',
        gt_value: (field: string, value: string) => {
          return field + ' must greater than ' + value;
        },
        lt_value: (field: string, value: string) => {
          return field + ' must less than ' + value;
        },
        eq_value: (field: string, value: string) => {
          return field + ' must be equal to ' + value;
        },
        required: (field: string) => {
          return field + ' is required';
        },
        min: (field: string, value: string) => {
          return `${field} must contain at least ${value} characters`;
        },
        min_value: (field: string, value: any) => {
          return `${field} must be greater than or equal to ${value}`;
        },
        max_value: (field: string, value: any) => {
          return `${field} must be less than or equal to ${value}`;
        },
        is: (field: string, value: any) => {
          return `${field} must be equal to ${value}`;
        },
        '2fa_code': (field: string) => {
          return 'Invalid 2FA code';
        },
        erc20_address: (field: string) => {
          return 'Invalid ERC20 address';
        },
        nem_address: () => {
          return 'Invalid NEM address';
        },
      },
    },
    vi: {
      messages: {
        password: 'Mật khẩu không đủ mạnh',
        gt_value: (field: any, value: any) => {
          return `${field} chưa hợp lệ`;
        },
        required: (field: any) => {
          return 'Yêu cầu nhập ' + field;
        },
        eq_value: (field: any, value: any) => {
          return field + ' phải bằng ' + value;
        },
        is: (field: any, value: any) => {
          return `${field} phải bằng ${value}`;
        },
        email: () => {
          return 'Địa chỉ email chưa hợp lệ';
        },
        phone: () => {
          return 'Số điện thoại chưa hợp lệ';
        },
        max: (field: any, value: any) => {
          return `${field} tối đa ${value} ký tự`;
        },
        min: (field: any, value: any) => {
          return `${field} tối thiểu ${value} ký tự`;
        },
        confirmed: (field: any, value: any) => {
          let textError = `${field} khác với `;
          textError = textError + value;
          return textError;
        },
        decimal: (field: any, value: any) => {
          return `${field} chưa hợp lệ`;
        },
      },
    },
  };

  return dictionary;
}

apply();