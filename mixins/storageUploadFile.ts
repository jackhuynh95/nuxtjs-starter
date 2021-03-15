import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component
export default class storageUploadFile extends Vue {
  uploadFile({ file, fileName = '' }) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('filename', fileName);

    return Promise.resolve(formData);
  }
}
