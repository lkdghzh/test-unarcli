import userAPI from '@/api/user'
// mutation-types
const types = {
  GETUSER: 'GETUSER'
}

// state
const state = {
  username: ""
}

// mutations
const mutations = {
  [types.GETUSER](state,userInfo) {
    // mutate state
    state.username = userInfo.username
  }
}

// getters
const getters = {
  username: state => state.username
}

// actions
const actions = {
  getUserInfo: ({ commit, rootState }) => {
    userAPI.getUserInfo(userInfo => {
      commit(types.GETUSER, userInfo)
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
