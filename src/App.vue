<template>
  <div id="app">
    <div class="shadow-lg bg-gray-200 w-8/12 mx-auto mt-20 p-20">
      <h2 class="text-3xl text-orange-600 font-extrabold">Random quotes</h2>
      <h3 class="h-20 text-gray-800 text-lg mt-2">{{ quote }}</h3>
      <button
        class="
          bg-red-500
          hover:bg-red-700
          text-white
          font-bold
          py-2
          px-4
          rounded-lg
          mr-4
          focus:outline-none
        "
        @click="newQuote"
      >
        New quote
      </button>
      <button
        class="
          bg-red-500
          hover:bg-red-700
          text-white
          font-bold
          py-2
          px-4
          rounded-lg
          focus:outline-none
        "
        @click="saveQuote"
      >
        Save quote
      </button>

      <div class="flex flex-col mt-10">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full" v-if="quotes.length > 0">
                <thead class="bg-gray-400 border-b">
                  <tr>
                    <th
                      scope="col"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        px-6
                        py-4
                        text-left
                      "
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        px-6
                        py-4
                        text-left
                      "
                    >
                      Content
                    </th>
                    <th
                      scope="col"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        px-6
                        py-4
                        text-left
                      "
                    >
                      Length
                    </th>
                    <th
                      scope="col"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        px-6
                        py-4
                        text-left
                      "
                    >
                      Author
                    </th>
                    <th
                      scope="col"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        px-6
                        py-4
                        text-left
                      "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="
                      bg-white
                      border-b
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-gray-300
                    "
                    v-for="(quote, index) in quotes"
                    :key="quote._id"
                  >
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm
                        font-medium
                        text-gray-900
                      "
                    >
                      {{ index + 1 }}
                    </td>
                    <td
                      class="
                        text-sm text-gray-900
                        font-light
                        px-6
                        py-4
                        whitespace-nowrap
                      "
                    >
                      {{ quote.content }}
                    </td>
                    <td
                      class="
                        text-sm text-gray-900
                        font-light
                        px-6
                        py-4
                        whitespace-nowrap
                      "
                    >
                      {{ quote.length }}
                    </td>
                    <td
                      class="
                        text-sm text-gray-900
                        font-light
                        px-6
                        py-4
                        whitespace-nowrap
                      "
                    >
                      {{ quote.author }}
                    </td>
                    <td
                      class="
                        text-sm text-gray-900
                        font-light
                        px-6
                        py-4
                        whitespace-nowrap
                      "
                    >
                      <a
                        @click.prevent="deleteQuote(quote._id)"
                        href="#"
                        class="
                          font-medium
                          text-blue-600
                          dark:text-blue-500
                          hover:underline
                        "
                        >Delete</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async newQuote() {
      this.$store.dispatch("setCurrentQuote");
    },
    saveQuote() {
      this.$store.dispatch("addQuote");
    },
    deleteQuote(id) {
      this.$store.dispatch("deleteQuote", id);
    },
  },
  computed: {
    quote() {
      return this.$store.getters.getCurrentQuote;
    },
    quotes() {
      return this.$store.getters.getQuotesList;
    },
  },
  async mounted() {
    await this.$store.dispatch("setCurrentQuote");
  },
};
</script>

<style></style>
