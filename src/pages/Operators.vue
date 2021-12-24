<template>
  <q-page padding>
      <div style="max-width: 550px">
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        class="exp_itm"
        v-for="(operator, index) in operators" :key="index"
        dense
        dense-toggle
        expand-separator
        icon="perm_identity"
        :label="operator.nick"
        :caption="operator.operatorName"
      >
        <q-card>
          <q-card-section>
            <a class="phone_exp" :href="'tel:'+operator.phone">{{ operator.phone }}<q-icon class="driver_icon" name="phone_in_talk" color="green" /></a>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
  </q-page>
</template>

<style scoped>
.exp_itm {
  margin-bottom: 1em;
}
.driver_icon {
  font-size: 25px;
  margin-left: 3em;

}
.phone_exp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4em;
}
a {
  text-decoration: none;
}
</style>

<script>
import { operators } from '../assets/data/operators';

export default {
   data: () => ({
      operators
  })
}
</script>
