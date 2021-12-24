<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title><q-btn class="text-h6" flat style="color: #ffffff" label="207" to="/" /></q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <q-scroll-area class="fit q-pa-sm">
        <div class="q-pa-md">
          <q-list class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="phone"
              label="Телефоны"
              default-close
            >
              <div class="q-pa-md">
                <q-list>
                  <q-item clickable v-ripple to="/drivers">
                    <q-item-section avatar>
                      <q-icon color="primary" name="person" />
                    </q-item-section>

                    <q-item-section>Водители</q-item-section>
                  </q-item>
                  <!-- <q-item clickable v-ripple to="/rule">
                    <q-item-section avatar>
                      <q-icon color="primary" name="person" />
                    </q-item-section>

                    <q-item-section>Руководство</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="primary" name="person" />
                    </q-item-section>

                    <q-item-section>Механики</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="primary" name="person" />
                    </q-item-section>

                    <q-item-section>Партнеры</q-item-section>
                  </q-item> -->
                  <q-item clickable v-ripple to="/operators">
                    <q-item-section avatar>
                      <q-icon color="primary" name="headset_mic" />
                    </q-item-section>

                    <q-item-section>Операторы</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple to="/phone">
                    <q-item-section avatar>
                      <q-icon color="primary" name="phone_in_talk" />
                    </q-item-section>

                    <q-item-section>Все телефоны службы</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              icon="date_range"
              label="График"
              default-close
            >
              <div class="q-pa-md">
                <q-list>
                  <q-item clickable v-ripple to="/grafik-driver">
                    <q-item-section avatar>
                      <q-icon color="primary" name="person" />
                    </q-item-section>

                    <q-item-section>Водители</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple to="/grafik-operator">
                    <q-item-section avatar>
                      <q-icon color="primary" name="headset_mic" />
                    </q-item-section>

                    <q-item-section>Операторы</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              icon="menu_book"
              label="Справочная информация"
              default-close
            >
              <div class="q-pa-md">
                <q-list>
                  <q-item clickable v-ripple to="/bonus">
                    <q-item-section avatar>
                      <q-icon color="primary" name="paid" />
                    </q-item-section>

                    <q-item-section>Бонусы</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple to="/price">
                    <q-item-section avatar>
                      <q-icon color="primary" name="payments" />
                    </q-item-section>

                    <q-item-section>Наценки</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-expansion-item>
            <!-- <q-item clickable v-ripple to="/video">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>Видео</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/questions">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>Опросы</q-item-section>
            </q-item> -->
            
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
