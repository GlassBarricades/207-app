<template>
  <q-page padding>
    <article-item :title="priceTitle" :text="priceText"></article-item>
    <div style="max-width: 650px">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="+2р"
          caption="Бездорожье"
        >
          <q-card>
            <q-card-section>
              <div style="max-width: 650px">
                <q-list bordered separator>
                  <q-item v-for="(village, i) in villages" :key="i" clickable v-ripple>
                    <q-item-section>{{ village }}</q-item-section>
                  </q-item>
                </q-list>
                <p class="q-mt-sm">В случае поездки туда - обратно с пассажиром, добавляем 2 раза</p>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="+3р"
          caption="Доставка"
        >
          <q-card>
            <q-card-section>
              С момента, как пакет с покупкой попал в автомобиль до пассажира едем с включенным счетчиком, по приезду к заказчику, добавляем услугу "Доставка".
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="+3р"
          caption="Крупногабаритный груз"
        >
          <q-card>
            <q-card-section>
              Добавляем если габариты груза превышают 1м
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="+5р"
          caption="Подача автомобиля в другой населенный пункт"
        >
          <q-card>
            <q-card-section>
              <p>При подаче автомобиля в другой населенный пункт, с последующим передвижением <b>НЕ</b> в город Жодино.</p>
              <p>Не входят (подача бесплатная):</p>
              <div style="max-width: 650px">
                <q-list bordered separator>
                  <q-item v-for="(exception, ind) in exceptions" :key="ind" clickable v-ripple>
                    <q-item-section>{{ exception }}</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="+1.5р"
          caption="Подача"
        >
          <q-card>
            <q-card-section>
              Маршрут Берёзовица - Барсуки
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-list>
    </div>
  </q-page>
</template>

<script>
import ArticleItem from "components/ArticleItem.vue";

export default {
  components: {
    ArticleItem,
  },
  data() {
    return {
      priceTitle: "Наценки",
      priceText: "",
      villages: ['Мичуринец', 'Заброденье', 'Автомобилист', 'Родничок', 'Березка', 'Старые грядки', 'Лавля', 'Сухой остров', 'Строитель', 'Барсуковское озеро', 'Яловка', 'Радуга-4', 'Лесная поляна', 'Восход грядки', 'Цветовод', 'Сутоки', 'Минута'],
      exceptions: ['Барсуки', 'Калюжки', 'Будагово', 'Новые Грядки', 'Заря', 'Дымковка', 'Поддубье', 'Приборье'],
    };
  },
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
  }
</style>
