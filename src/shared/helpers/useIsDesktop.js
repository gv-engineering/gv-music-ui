import { useMediaQuery } from "@vueuse/core";

export function useIsDesktop() {
    return { isDesktop: useMediaQuery("(min-width: 768px)") };
}