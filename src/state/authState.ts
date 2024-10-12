import { observable } from "@legendapp/state";
import { User } from "../models/User";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { syncObservable } from "@legendapp/state/sync";

interface AuthState {
  user: User;
}

export const authState = observable<AuthState>();

syncObservable(authState, {
  persist: {
    name: "authState",
    plugin: ObservablePersistLocalStorage,
  },
});

export const useUser = () => authState.user.get();
