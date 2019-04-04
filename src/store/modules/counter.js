export default {
  namespace: true,
  state: {
    count: 11
  },
  mutations: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
}
