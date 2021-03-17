import _ from 'lodash';

let required = false;

function setRequired(flag) {
  required = flag;
}

function getRequired() {
  return required;
}

export default {
  setRequired,
  getRequired,
};
