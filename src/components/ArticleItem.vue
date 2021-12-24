<template>
  <h4 class="text-center">{{ title }}</h4>
  <p>{{ text }}</p>
  <slot></slot>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    title: String,
    text: String,

  },
  data() {
    return {

    }
  },
  setup () {
    return {
      
    }
  }
}
</script>
