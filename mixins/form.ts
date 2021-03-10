import { mapValues, compact, keys, values } from 'lodash';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FormMixin extends Vue {
  isAutoFill = false;

  get isFormValid() {
    const veeErrors = (this as any).veeErrors;
    const veeFields = (this as any).veeFields;
    const isAutoFill = this.isAutoFill;

    let validated = compact(values(mapValues(veeFields, 'validated')));
    const isOk =
      (!veeErrors.any() && keys(veeFields).length === validated.length) ||
      isAutoFill;
    return isOk;
  }

  get isFormDirty() {
    const veeErrors = (this as any).veeErrors;
    const veeFields = (this as any).veeFields;
    return Object.keys(veeFields).some(key => veeFields[key].dirty);
  }

  onAutoFill() {
    this.isAutoFill = true;
  }

  clearVeeErros() {
    this.isAutoFill = false;
    this.$validator.pause();
    this.$nextTick(() => {
      this.$validator.fields.items.forEach(field => (field as any).reset());
      this.$validator.resume();
    });
  }
}
