<template>
  <q-page padding>
     <!-- <div class="q-pa-md">
    <q-list bordered>
      <q-item v-for="(driver, index) in drivers" :key="index" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            <q-icon :name="driver.icon" color="white" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ driver.nick }}</q-item-label>
          <q-item-label caption lines="1">{{ driver.driverName }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <a :href="driver.phoneHref"><q-icon class="driver_icon" name="phone_in_talk" color="green" /></a>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>
  </div> -->
  <div class="q-pa-md" style="max-width: 550px">
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        class="exp_itm"
        v-for="(driver, index) in drivers" :key="index"
        dense
        dense-toggle
        expand-separator
        icon="perm_identity"
        :label="driver.nick"
        :caption="driver.driverName"
      >
        <q-card>
          <q-card-section>
            <a class="phone_exp" :href="'tel:'+driver.phone">{{ driver.phone }}<q-icon class="driver_icon" name="phone_in_talk" color="green" /></a>
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
import { drivers } from '../assets/data/drivers';

export default {
  data: () => ({
      drivers
  })
}
</script>
