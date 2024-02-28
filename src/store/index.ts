import { createStore } from 'vuex'
const store = createStore({
  state () {
    return {
      posts: []
    }
  },
  mutations: {
    SET_POSTS(state:any, value:any){
      state.posts = value
    }
  },
  actions: {
    async getPots(ctx:any){
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());

      ctx.commit("SET_POSTS", res);
    }
  }
});

export default store;