import store from "./store";

export default class GettersSetters {
  store!: typeof store;

  get first_route() {
    return this.store.value.first_route
  }

  set first_route(first_route) {
    this.store.value.first_route = first_route;
  }

  get user() {
    return this.store.value.user
  }

  set user(user) {
    this.store.value.user = user;
  }
}
