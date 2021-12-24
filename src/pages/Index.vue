<template>
  <q-page padding class="flex flex-center column">
    <div class="text-h4 text-center">Путеводитель 207</div>
    <p class="main_text">Справочная информация службы такси 207 "Минутка" г. Жодино</p>
    <div>
      <q-btn class="q-mr-sm" color="primary" label="Телефоны" to="/drivers" />
      <q-btn class="q-ml-sm" color="primary" label="Графики" to="/grafik-driver" />
    </div>
  </q-page>
</template>
<style scoped>
  .main_text {
    margin-top: 2em;
    font-size: 20px;
    max-width: 700px;
    text-align: center;
  }
</style>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
})
</script>
