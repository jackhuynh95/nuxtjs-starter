import _ from 'lodash';
import Vue from 'vue';

Vue.filter('cutoff', function cutoff(value, precision = 8): string {
    var rval=10;
    for (var i = 2; i <= precision; i++)
        rval = rval * 10;

  return (+value/rval).toString();
});
