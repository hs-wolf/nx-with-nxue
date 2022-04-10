import { acceptHMRUpdate, defineStore } from 'pinia';
import { LOCALES_STORE } from '@src/constants';
import i18n from '@src/app/modules/i18n';

const { locale } = i18n.global;

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
    changeLocale(loc: string): void {
      try {
        locale.value = loc;
        if (loc === 'he') {
          this.changeDirection('rtl');
          return;
        }
        this.changeDirection('ltr');
      } catch (error) {
        console.error('Could not change the location.');
      }
    },
    changeDirection(dir: string): void {
      try {
        this.currentDirection = dir;
      } catch (error) {
        console.error('Could not change the direction.');
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocalesStore, import.meta.hot));
}
