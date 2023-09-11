import { defineStore } from "pinia";
import { IUser } from "~/utils/api";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: <IUser>{},
    };
  },
});
