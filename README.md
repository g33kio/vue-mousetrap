# vue-mousetrap
> A vue plugin to add [mousetrap](https://github.com/ccampbell/mousetrap) to the Vue object.

## Installing
Install using NPM
```shell
npm install vue-mousetrap --save
```
Install using Yarn
```shell
yarn add vue-mousetrap
```

## Usage
The loading of the plugin is different between Vue 2 and Vue 3 in the **main.js** file. Once loaded access mousetrap in components is the same for both versions.

### Vue 2
```js
import Vue from 'vue'
import VueMousetrapPlugin from 'vue-mousetrap/vue2'
Vue.use(VueMousetrapPlugin)
```

### Vue 3

#### Usage with options API
```js
import { createApp } from 'vue'
import App from './App.vue'
import VueMousetrapPlugin from 'vue-mousetrap'

const app = createApp(App)

app.use(VueMousetrapPlugin)

app.mount('#app')
```

#### Usage with composition API

```js
app.use(VueMousetrapPlugin).provide('mousetrap', app.config.globalProperties.$mousetrap).mount('#app')
```

### Vue 2 and Vue 3 Access in Components


#### Usage with options API

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

#### Usage with composition API

```js
setup() {
    const mousetrap = inject('mousetrap')

    onMounted(() => {
        mousetrap.bind(['command+k', 'ctrl+k'], () => {
            console.log("Yikes")
        });
    })

    return {};
},
```
