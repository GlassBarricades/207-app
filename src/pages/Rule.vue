<template>
  <q-page padding>
    <q-card class="my-card" flat bordered style="max-width: 600px">
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6">Битяй-Новицкая Вероника Анатольевна</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          iusto necessitatibus expedita doloribus, cupiditate ex perferendis
          optio illum sunt accusantium velit porro ad. Similique iusto quia
          laboriosam accusantium accusamus saepe eaque, laborum autem nam id
          cumque dolores deserunt harum magnam quod fuga suscipit soluta quis
          odio ex tempore! Maxime, earum.
        </q-card-section>

        <q-img class="col-5" src="https://sun9-13.userapi.com/impf/c846418/v846418709/1e6ab8/W3dt2_5FUMs.jpg?size=1040x1040&quality=96&sign=a653aac5e02412519713a10f41243dbb&type=album" />
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat round :icon="fabInstagram" />
        <q-btn flat round :icon="fabVk" />
        <q-btn flat round :icon="fabViber" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card q-mt-sm" flat bordered style="max-width: 600px">
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6">Потехин Сергей Владимирович</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          iusto necessitatibus expedita doloribus, cupiditate ex perferendis
          optio illum sunt accusantium velit porro ad. Similique iusto quia
          laboriosam accusantium accusamus saepe eaque, laborum autem nam id
          cumque dolores deserunt harum magnam quod fuga suscipit soluta quis
          odio ex tempore! Maxime, earum.
        </q-card-section>

        <q-img class="col-5" src="https://sun9-19.userapi.com/impf/c852320/v852320596/14587/0TB98kJqDRo.jpg?size=1344x760&quality=96&sign=e65a2e57e271e4f06e7918ee7d7bcdc2&type=album" />
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat round :icon="fabInstagram" />
        <q-btn flat round :icon="fabVk" />
        <q-btn flat round :icon="fabViber" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { fabInstagram } from "@quasar/extras/fontawesome-v5";
import { fabVk } from "@quasar/extras/fontawesome-v5";
import { fabViber } from "@quasar/extras/fontawesome-v5";

export default {
  data: () => ({
      fabInstagram,
      fabVk,
      fabViber
  }),
  created() {
      (this.fabInstagram = fabInstagram),
      (this.fabVk = fabVk),
      (this.fabViber = fabViber);
  },
};
</script>
