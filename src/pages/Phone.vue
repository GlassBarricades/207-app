<template>
  <q-page padding>
    <div style="max-width: 450px">
    <q-list bordered separator>
      <q-item class="list-item" clickable v-ripple v-for="(phone, idx) in phones" :key="idx">
        <q-item-section class="list-item-iner"><span>{{ phone.phoneNumber }}</span><q-icon :class="{hidden:phone.done}" :name="iconName"/><a :href="'tel:'+phone.phoneNumber"><q-btn @click='phoneCheck(phone)' color="primary" label="Позвонить" /></a></q-item-section>
      </q-item>
    </q-list>
  </div>
  </q-page>
</template>

<script>
import { phones } from '../assets/data/phones';

export default {
  data() {
    return {
      phones,
      iconName: 'done',
    }
  },
  methods: {
    phoneCheck(phone){
      phone.done = false
    }
  }
}
</script>

<style scoped>
  a {
    list-style: none;
    text-decoration: none;
  }
  .list-item-iner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>