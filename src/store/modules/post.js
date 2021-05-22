export default {
    state: {
        posts: []
    },
    mutations: {
        updatePosts(state,posts) {
            state.posts = posts;
        }
    },
    actions: {
        async fetchPosts(context) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
            const posts = await res.json();

            context.commit('updatePosts', posts)
        }
    },
    getters: {
        allPosts(state) {
            return state.posts;
        }
    },
}