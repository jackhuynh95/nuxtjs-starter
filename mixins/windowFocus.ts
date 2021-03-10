import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import _ from 'lodash';

@Component
export default class WindowFocusMixin extends Vue {
  metaTitleCurrent = '';
  isFocusWindow = false;

  updateTitleMsg(unReadMsg = null) {
    if(!this.isFocusWindow && unReadMsg){
      document.title = `Chat (${unReadMsg}) - Quickom`;
    }
    else
    {
      document.title = this.metaTitleCurrent;
    }
  }

  updateFocusWindow() {
    this.isFocusWindow = document.hasFocus();
  }

  onWindowFocus = () => {
    this.updateFocusWindow();
  }

  onWindowBlur = () => {
    this.updateFocusWindow();
  }
  
  initTitle() {
    let metaTitle = this.$router.currentRoute.meta.title;
    this.metaTitleCurrent = metaTitle;
  }

  mounted() {
    this.isFocusWindow = document.hasFocus(); 
    window.addEventListener("focus", this.onWindowFocus, false);
    window.addEventListener("blur", this.onWindowBlur, false);
    this.initTitle();
  }
}