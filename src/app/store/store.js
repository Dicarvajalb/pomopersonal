import { create } from 'zustand'

export const useTimerStore = create((set) => ({
  connected: false,
  switchConection: (connected) => set(() => ({ connected: connected })),
}))

export const useTaskStore = create((set) => ({
  task: '',
  taskTime: 25,
  setTask: (task) => set(() => ({ task: task })),
  setTaskTime: (taskTime) => set(() => ({ taskTime: taskTime })),
}))
