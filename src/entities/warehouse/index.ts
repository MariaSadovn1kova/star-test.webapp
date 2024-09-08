import { defineStore } from 'pinia';

interface WarehouseState {
  totalCount: number;
}

export const useWarehouseStore = defineStore('warehouse', {
  state: (): WarehouseState => ({
    totalCount: 0,
  }),
  actions: {
  

  },
});
