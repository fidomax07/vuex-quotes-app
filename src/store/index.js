import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const randomQuoteUrl = "https://api.quotable.io/random";
const requestHeaders = {
  Accept: "application/json",
};

export default new Vuex.Store({
  state: {
    currentQuote: "",
    quotesList: [],
  },
  mutations: {
    setCurrentQuote(state, quote) {
      state.currentQuote = quote;
    },
    addQuote(state, quote) {
      if (state.quotesList.includes(quote)) {
        return;
      }
      state.quotesList.push(quote);
    },
    deleteQuote(state, id) {
      state.quotesList = state.quotesList.filter((quote) => quote._id !== id);
    },
  },
  actions: {
    async setCurrentQuote({ commit }) {
      const quote = await fetch(randomQuoteUrl, { requestHeaders });
      const quoteObject = await quote.json();
      commit("setCurrentQuote", quoteObject);
    },
    addQuote({ state, commit }) {
      commit("addQuote", state.currentQuote);
    },
    deleteQuote({ commit }, id) {
      commit("deleteQuote", id);
    },
  },
  getters: {
    getCurrentQuote(state) {
      return state.currentQuote.content;
    },
    getQuotesList(state) {
      return state.quotesList;
    },
    getQuotesAuthors(state) {
      return state.quotesList.map((q) => q.author);
    },
  },
});
