import { create } from 'zustand';
import { simplePOST } from '../../helpers/apiHelper';

export const useRegisterUserStore = create((set) => ({
  data: null,
  message: null,
  loading: false,
  error: null,
  navigateToLogin: false,
  fetchRegisterUser: async (data) => {
    try {
      if (data) {
        set({
          data,
          loading: true,
        });
      }
      const response = await simplePOST('/api/auth/register/', JSON.stringify(data));
      console.log('response', response);
      if (response?.message === 'success') {
        set({
          loading: false,
          message: 'User was registered successfully!',
          navigateToLogin: true,
        });
      }
    } catch (error) {
      set({ error });
    }
  },
}));
