<template>
  <div class="month">
    <span v-for="index in Array(35).keys()" :key="index">
      {{ index }}
    </span>
  </div>
</template>

<script>
import { ref, toRefs, onMounted, watch } from 'vue';

const months = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Apile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre'
];

export default {
  props: {
    modelValue: {
      type: String,
      default: () => ''
    },
    page: {
      type: Number,
      default: () => 0
    }
  },
  emits: ['update:modelValue', 'update:page'],
  setup(props, { emit }) {
    const date = new Date();
    const year = ref(date.getFullYear());
    const { page } = toRefs(props);

    onMounted(() => {
      const initialPage = date.getMonth();
      const display = months[initialPage];
      emit('update:modelValue', display);
      emit('update:page', initialPage);
    });

    watch(page, (newVal) => {
      if (newVal > 11) {
        newVal = 0;
        year.value++;
      } else if (newVal < 0) {
        newVal = 11;
        year.value--;
      }
      emit('update:modelValue', months[newVal]);
      emit('update:page', newVal);
    });

    return {};
  }
};
</script>

<style lang="scss" scoped>
.month {
  flex: 1;

  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);

  span {
    padding: var(--space-xs);
    border: {
      top: 1px solid var(--c-border);
      left: 1px solid var(--c-border);
    }
  }

  span:nth-child(-n + 7) {
    border-top-color: transparent;
  }

  span:nth-child(7n + 1) {
    border-left-color: transparent;
  }
}
</style>
