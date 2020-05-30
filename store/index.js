import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: '',
        },
        mutations: {
            // // setToken: state => (token) => state.token = token
            // setToken(state, token){
            //     state.token = token
            //   }
        },
        getters: {
            getToken: state => () => state.token,
            isLoggedIn: state => !!state.token
          }
    })
}

export default createStore
  