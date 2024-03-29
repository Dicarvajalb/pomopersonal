import { create } from 'zustand'

export const useTimerStore = create((set) => ({
  connected: false,
  switchConection: (connected) => set(() => ({ connected: connected })),
}))
