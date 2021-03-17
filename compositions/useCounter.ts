import { ref, computed } from '@vue/composition-api';

export default function useCounter() {
  const counter = ref(0);
  const twiceTheCounter = computed(() => counter.value * 2);
  

  return {
    counter,
    twiceTheCounter,
  }
}