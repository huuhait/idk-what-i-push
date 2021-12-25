import axios from "axios";
import GettersSetters from "./getters_setters";
import store from "./store";

class Controllers extends GettersSetters {
  store = store;

  async GetLogged(n_axios: any = axios) {
    try {
      const { data } = await n_axios.get("http://localhost:3000/api/v2/resource/users/me");
      this.user.uid = data.uid;
      this.user.email = data.email;
      this.user.first_name = data.first_name;
      this.user.last_name = data.last_name;
      this.user.bio = data.bio;
      this.user.state = data.state;
      this.user.role = data.role;
      this.user.alone = {
        fake: true
      }
    } catch (error) {
      return error;
    }
  }

  async Login(email: string, password: string) {
    try {
      const { data } = await axios.post("http://localhost:3000/api/v2/identity/session", {
        email,
        password
      })

      this.user.uid = data.uid;
      this.user.email = data.email;
      this.user.first_name = data.first_name;
      this.user.last_name = data.last_name;
      this.user.bio = data.bio;
      this.user.state = data.state;
      this.user.role = data.role;
    } catch (error) {
      return error;
    }
  }
}

export default new Controllers();
