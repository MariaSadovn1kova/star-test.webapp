import { defineStore } from 'pinia';
import type { IWarehouseItem } from '@/shared';

interface WarehouseState {
  totalCount: number
  warehouseItems: IWarehouseItem[]
}

export const useWarehouseStore = defineStore('warehouse', {

  state: (): WarehouseState => ({
    totalCount: 0,
    warehouseItems: []
  }),

  actions: {
    fetchWarehouse() {
      this.totalCount = 134;
      this.warehouseItems = [
        {
          id: '1',
          img: 'https://app2top.ru/wp-content/uploads/2022/11/disco-zaum.jpg',
          title: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированная подставка.',
          articleWB: '9619790',
          remainsWB: 55475,
          remainsProvider: 1000,
          remainsWarehouse: 11453,
          remainsAll: 142412,
          onTheWay: 453,
          expenditure: 5
        },
        {
          id: '2',
          img: 'https://app2top.ru/wp-content/uploads/2022/11/disco-zaum.jpg',
          title: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированная подставка.',
          articleWB: '9619790',
          remainsWB: 55475,
          remainsProvider: 1000,
          remainsWarehouse: 11453,
          remainsAll: 142412,
          onTheWay: 453,
          expenditure: 5,
          sizeRange: [
            {
              id: '1',
              size: 38,
              remainsWB: 41,
              remainsProvider: 41,
              remainsWarehouse: 41,
              remainsAll: 41,
              onTheWay: 41,
              expenditure: 5
            },
            {
              id: '2',
              size: 41,
              remainsWB: 41,
              remainsProvider: 41,
              remainsWarehouse: 41,
              remainsAll: 41,
              onTheWay: 41,
              expenditure: 5
            }
          ]
        }
      ]
    },
  },

  getters: {
    getTotalCount: (state) => state.totalCount,
    getWarehouseItems: (state) => state.warehouseItems,
  },

});
