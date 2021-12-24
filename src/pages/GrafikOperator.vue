<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-column-table"
      title="График операторов декабрь"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="separator"
      flat
      hide-bottom
    />
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Имя',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: '1', align: 'center', label: '1', field: '1'},
  { name: '2', label: '2', field: '2' },
  { name: '3', label: '3', field: '3' },
  { name: '4', label: '4', field: '4' },
  { name: '5', label: '5', field: '5' },
  { name: '6', label: '6', field: '6' },
  { name: '7', label: '7', field: '7' },
  { name: '8', label: '8', field: '8' },
  { name: '9', label: '9', field: '9' },
  { name: '10', label: '10', field: '10' },
  { name: '11', label: '11', field: '11' },
  { name: '12', label: '12', field: '12' },
  { name: '13', label: '13', field: '13' },
  { name: '14', label: '14', field: '14' },
  { name: '15', label: '15', field: '15' },
  { name: '16', label: '16', field: '16' },
  { name: '17', label: '17', field: '17' },
  { name: '18', label: '18', field: '18' },
  { name: '19', label: '19', field: '19' },
  { name: '20', label: '20', field: '20' },
  { name: '21', label: '21', field: '21' },
  { name: '22', label: '22', field: '22' },
  { name: '23', label: '23', field: '23' },
  { name: '24', label: '24', field: '24' },
  { name: '25', label: '25', field: '25' },
  { name: '26', label: '26', field: '26' },
  { name: '27', label: '27', field: '27' },
  { name: '28', label: '28', field: '28' },
  { name: '29', label: '29', field: '29' },
  { name: '30', label: '30', field: '30' },
  { name: '31', label: '31', field: '31' },
  { name: 'total', label: 'Всего часов', field: '31' },
]

const rows = [
  {
    name: 'Андрей',
    1: '',
    2: '6-18',
    3: '6-18',
    4: '',
    5: '',
    6: '6-18',
    7: '6-18',
    8: '',
    9: '',
    10: '18-6',
    11: '18-6',
    12: '',
    13: '',
    14: '6-18',
    15: '6-18',
    16: '',
    17: '',
    18: '18-6',
    19: '18-6',
    20: '',
    21: '',
    22: '',
    23: '',
    24: '',
    25: '',
    26: '',
    27: '',
    28: '',
    29: '',
    30: '',
    31: '',
    total: '',
  },
  {
    name: 'Алена',
    1: '6-18',
    2: '',
    3: '',
    4: '6-18',
    5: '6-18',
    6: '',
    7: '',
    8: '6-18',
    9: '6-18',
    10: '6-18',
    11: '6-18',
    12: '6-18',
    13: '6-18',
    14: '',
    15: '',
    16: '6-18',
    17: '6-18',
    18: '',
    19: '',
    20: '6-18',
    21: '6-18',
    22: '',
    23: '',
    24: '',
    25: '',
    26: '',
    27: '',
    28: '',
    29: '',
    30: '',
    31: '',
  },
  {
    name: 'Ира',
    1: '',
    2: '18-6',
    3: '18-6',
    4: '',
    5: '',
    6: '18-6',
    7: '18-6',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '18-6',
    15: '18-6',
    16: '',
    17: '',
    18: '6-18',
    19: '6-18',
    20: '',
    21: '',
    22: '',
    23: '',
    24: '',
    25: '',
    26: '',
    27: '',
    28: '',
    29: '',
    30: '',
    31: '',
  },
  {
    name: 'Инна',
    1: '18-6',
    2: '',
    3: '',
    4: '18-6',
    5: '18-6',
    6: '',
    7: '',
    8: '18-6',
    9: '18-6',
    10: '',
    11: '',
    12: '18-6',
    13: '18-6',
    14: '',
    15: '',
    16: '18-6',
    17: '18-6',
    18: '',
    19: '',
    20: '18-6',
    21: '18-6',
    22: '',
    23: '',
    24: '',
    25: '',
    26: '',
    27: '',
    28: '',
    29: '',
    30: '',
    31: '',
  },
  {
    name: 'Оксана',
    1: '',
    2: '',
    3: '6-18',
    4: '6-12',
    5: '8-20',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '6-18',
    11: '6-12',
    12: '6-20',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '6-18',
    18: '6-12',
    19: '8-20',
    20: '',
    21: '',
    22: '',
    23: '',
    24: '6-18',
    25: '6-12',
    26: '8-20',
    27: '',
    28: '',
    29: '',
    30: '',
    31: '',
  },
  {
    name: 'Даша',
    1: '',
    2: '',
    3: '18-1',
    4: '12-1',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '18-1',
    11: '12-1',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '18-1',
    18: '12-1',
    19: '',
    20: '',
    21: '',
    22: '',
    23: '',
    24: '18-1',
    25: '12-1',
    26: '',
    27: '',
    28: '',
    29: '',
    30: '',
    31: '',
  },
]

export default {
  setup () {
    return {
      separator: ref('cell'),
      columns,
      rows
    }
  },
}
</script>

<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  // height: 500px

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  // max-width: 600px

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: $primary !important
    color: #fff
  .q-table__top,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: $primary !important
    color: #fff
  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #fff

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>