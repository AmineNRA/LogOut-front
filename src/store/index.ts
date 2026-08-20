import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    accessToken: string | null;
    userId: string | null;
    setTokens: (accessToken: string, userId: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            userId: null,

            setTokens: (accessToken, userId) =>
                set({
                    accessToken,
                    userId,
                }),

            logout: () =>
                set({
                    accessToken: null,
                    userId: null,
                }),
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({
                accessToken: state.accessToken,
                userId: state.userId,
            }),
        }
    )
);

export default useAuthStore;