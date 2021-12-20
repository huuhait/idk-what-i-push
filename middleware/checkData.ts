import store from "@/controllers";

export default function() {
  if (!store.value.first_route) return;

  store.value.first_route = false;

  store.value.user = {
    state: "active",
    first_name: "JJJ",
    last_name: "LKLL"
  };
}
