import { ssrRef } from "@nuxtjs/composition-api";

const store = ssrRef<{
  first_route: boolean;
  user: {
    state: string | null;
    first_name: string | null;
    last_name: string | null;
  }
}>({
  first_route: true,
  user: {
    state: null,
    first_name: null,
    last_name: null,
  }
})

export default store;
