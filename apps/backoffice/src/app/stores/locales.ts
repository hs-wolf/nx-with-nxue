import { acceptHMRUpdate, defineStore } from 'pinia';
import { LOCALES_STORE } from '@src/constants';

interface IState {
  savedLocale: string;
  currentDirection: string;
}

export const useLocalesStore = defineStore(LOCALES_STORE, {
  state: (): IState => ({
    savedLocale: 'en',
    currentDirection: 'lfr',
  }),
  getters: {},
  actions: {
    /**
     * Change the content direction for the whole app.
     * @param dir
     */
    changeAppDirection(dir: string): void {
      try {
        this.currentDirection = dir;
      } catch (error) {
        console.error('Could not change the app direction.');
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocalesStore, import.meta.hot));
}
