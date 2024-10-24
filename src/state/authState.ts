import { observable } from "@legendapp/state";
import { User } from "../models/User";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { syncObservable } from "@legendapp/state/sync";
import { navigateTo } from "@/lib/navigation/navigationHelpers";
import supabase from "@/services/supabase";

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

export const useIsAuthenticated = () => authState.user.peek() !== undefined;

export const signOut = async () => {
  authState.user.set(undefined);
  await supabase.auth.signOut();
  navigateTo("/auth/home");
  window.close();
};
