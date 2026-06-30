"use client";

import { createContext, useContext, useState } from "react";
import { useStore } from "zustand";
import { createEligibilityStore, type EligibilityState, type EligibilityStore } from "./store";

const EligibilityStoreContext = createContext<EligibilityStore | null>(null);

/** One store instance per mount — keeps quiz state isolated per visitor/request. */
export function EligibilityQuizProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState<EligibilityStore>(() => createEligibilityStore());
  return (
    <EligibilityStoreContext.Provider value={store}>{children}</EligibilityStoreContext.Provider>
  );
}

/** Subscribe through a selector — whole-store subscriptions fail review. */
export function useEligibilityStore<T>(selector: (state: EligibilityState) => T): T {
  const store = useContext(EligibilityStoreContext);
  if (!store) {
    throw new Error("useEligibilityStore must be used within an EligibilityQuizProvider.");
  }
  return useStore(store, selector);
}
