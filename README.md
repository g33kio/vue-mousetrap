# vue-mousetrap
> A vue plugin to add [mousetrap](https://github.com/ccampbell/mousetrap) to the Vue object.

## Installing
Install using NPM
```
npm install vue-mousetrap --save
```

## Usage
This is a basic plugin that adds mousetrap to the Vue instance so you can access it within components a little easier.

**main.js**
```js
import Vue from 'vue'
import VueMousetrap from 'vue-mousetrap'
Vue.use(VueMousetrap)
```

**component**
```js
<script>
  export default {
    name: 'mousetrap-demo',
    mounted() {
      // single keys
      this.$mousetrap.bind('4', this.logIt);
      this.$mousetrap.bind("?", this.logIt);
      this.$mousetrap.bind('esc', this.logIt, 'keyup');

      // combinations
      this.$mousetrap.bind('command+shift+k', this.logIt);

      // map multiple combinations to the same callback
      this.$mousetrap.bind(['command+k', 'ctrl+k'], this.logIt);

      // gmail style sequences
      this.$mousetrap.bind('g i', this.logIt);
      this.$mousetrap.bind('* a', this.logIt);

      // konami code!
      this.$mousetrap.bind('up up down down left right left right b a enter', this.logIt);
    },
    methods: {
      logIt(e) {
        console.log(e);
        return false;
      }
    }
  };
</script>
```