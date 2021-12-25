import { Context } from "@nuxt/types";
import controllers from "@/controllers";

export default async function(context: Context) {

  await controllers.GetLogged(context.$axios);
}
