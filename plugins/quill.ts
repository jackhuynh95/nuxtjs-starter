import Vue from 'vue';
import { Quill, VueEditor } from 'vue2-editor';
import QuillImageDropAndPaste from 'quill-image-drop-and-paste';

Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste);
Vue.component('VueEditor', VueEditor);