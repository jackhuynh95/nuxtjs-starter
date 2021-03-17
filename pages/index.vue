<template lang="pug">
  div
    h1 {{ ip }}
    div {{ profile }}
    div {{ 9000 | numberWithComma }}
    .text-oswald(v-t='"header_menu.sign_in"')
    NuxtLink(to='/' @click.prevent.stop.native='changeLocale("en")') English
    NuxtLink(to='/' @click.prevent.stop.native='changeLocale("vi")') Viet Nam
    form(@submit.prevent='')
      input(v-model='text' name='text' v-validate='"required"')
      small.form-text.text-danger {{ veeErrors.first("text") }}
    
    ul.social.list-inline.d-flex.flex-wrap.align-items-centerfont
      li.pr-2.pr-md-2.pr-lg-3.my-1
        a.d-inline-block.position-relative(href="https://www.facebook.com/Fan8club-106596241270784/" title="Facebook" target="_blank") 
          .icon.d-flex.align-items-center.justify-content-center
            font-awesome-icon.text-primary(:icon="['fab', 'facebook-f']" )
      li.pr-2.pr-md-2.pr-lg-3.my-1
        a.d-inline-block.position-relative(href="https://www.instagram.com/fan8.club/" title="instagram" target="_blank") 
          .icon.d-flex.align-items-center.justify-content-center
            font-awesome-icon.text-primary(:icon="['fab', 'instagram']" )
      li.pr-2.pr-md-2.pr-lg-3.my-1
        a.d-inline-block.position-relative(href="https://twitter.com/Fan8Club" title="twitter" target="_blank") 
          .icon.d-flex.align-items-center.justify-content-center
            font-awesome-icon.text-primary(:icon="['fab', 'twitter']" )
      li.pr-2.pr-md-2.pr-lg-3.my-1
        a.d-inline-block.position-relative(href="https://www.youtube.com/channel/UC2DRkIck7Dw5gqpD4k9qlVg" title="youtube" target="_blank") 
          .icon.d-flex.align-items-center.justify-content-center
            font-awesome-icon.text-primary(:icon="['fab', 'youtube']" )
      li.pr-0
        a.d-inline-block.position-relative(href="https://www.tiktok.com/@fan8.club" title="tiktok" target="_blank") 
          .icon.d-flex.align-items-center.justify-content-center
            font-awesome-icon.text-primary(:icon="['fab', 'tiktok']" )

      TextBoxAutoHeight(v-model='text')

</template> 

<style lang="stylus" scoped>
@import '~@/styles/variables'

</style>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { mixins } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import FormMixin from '@/mixins/form';
import TextBoxAutoHeight from '@/components/shared/MaskedInputAmount.vue';
import AccountApis from '@/apis/account';

@Component({
  layout: 'central',
  components: {
    TextBoxAutoHeight,
  },
  meta: {
    requiresAuth: true,
  },
})
export default class Home extends mixins(FormMixin) {
  isLoading = false;
  text = '';

  @State(state => state.account.profile)
  profile;

  changeLocale(locale) {
    this.$i18n.setLocale(locale);
    window.location.reload();
  }


  mounted() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_BASE_DOMAIN_URL);
    setTimeout(() => {
      this.$store.dispatch('account/resetProfile');
    }, 500);

    AccountApis.getProfile();
  }

  async asyncData ({ params, $http }) {
    const ip = await $http.$get('https://icanhazip.com');
    // text = ip;
    return { ip };
  }

  head() {
    return { 
      title: this.ip,
    };
  }
}
</script>