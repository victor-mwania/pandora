import axios from "axios";
const api = "https://panapi.herokuapp.com/pandora/user/";

const state = {
  userData: {
    token: localStorage.getItem("jwt"),
    user: localStorage.getItem("user") || undefined,
    username: null,
    first_name: null,
    second_name: null,
    email: null
  },
  isLoggedIn: localStorage.getItem("jwt"),
  posts: [],
  published: []
};
const getters = {
  allPosts: state => state.posts,
  isLogged: state => state.isLoggedIn,
  user: state => state.userData,
  posts: state => state.published
};
const actions = {
  async loginUser({ commit }, user) {
    const response = await axios.post(api + "login", user);
    commit("userSet", response.data);
  },
  async signUser({ commit }, user) {
    const response = await axios.post(api + "signup", user);
    commit("newUser", response.data);
  },
  async getUser({ commit }) {
    const response = await axios.get(
      "https://panapi.herokuapp.com/pandora/users/" +
        localStorage.getItem("user")
    );
    commit("setProfile", response.data);
  },
  async getPosts({ commit }) {
    const response = await axios.get(
      "https://panapi.herokuapp.com/pandora/posts"
    );
    commit("setPosts", response.data);
  },
  async published({ commit }) {
    const response = await axios.get(
      "https://panapi.herokuapp.com/pandora/posts/" +
        localStorage.getItem("user")
    );
    commit("publishedPosts", response.data);
  }
};

const mutations = {
  userSet: (state, user) => (
    localStorage.setItem("user", user.id),
    localStorage.setItem("jwt", user.token),
    (state.userData.token = user.token),
    (state.userData.user = user.id),
    (state.isLogged = user.token)
  ),
  newUser: (state, user) => {
    (state.userData.first_name = user.firstName),
      (state.userData.second_name = user.secondName),
      (state.userData.username = user.userName),
      (state.userData.email = user.email),
      (state.userData.userId = user.id);
  },
  setPosts: (state, posts) => (state.posts = posts),
  setProfile: (state, user) => {
    (state.userData.first_name = user.firstName),
      (state.userData.second_name = user.secondName),
      (state.userData.username = user.userName),
      (state.userData.email = user.email),
      (state.userData.user = user._id);
  },
  publishedPosts: (state, post) => (state.published = post)
};

export default {
  state,
  getters,
  mutations,
  actions
};
