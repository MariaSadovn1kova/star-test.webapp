export interface ISizeRange {
  id: string
  size: number
  remainsWB: number
  remainsProvider: number
  remainsWarehouse: number
  remainsAll: number
  onTheWay: number
  expenditure: number
}

export interface IWarehouseItem {
  id: string
  img: string
  title: string
  articleWB: string
  remainsWB: number
  remainsProvider: number
  remainsWarehouse: number
  remainsAll: number
  onTheWay: number
  expenditure: number
  sizeRange?: ISizeRange[]
}