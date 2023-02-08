import { defineStore } from 'pinia'

const configStore = defineStore('config', {
  state: () => {
    return {
      data: 0 as Number
    }
  },
  actions: {
    setProgress(pro: number) {
      this.data = pro
    }
  },
  getters: {
    getProgress(state) {
      return state.data
    }
  }
})

export default configStore
