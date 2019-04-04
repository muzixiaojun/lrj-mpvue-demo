export default {
  namespace: true,
  state: {
    count: 21
  },
  mutations: {
    increments: (state) => {
      state.count += 1
    },
    decrements: (state) => {
      state.count -= 1
    }
  }
}
