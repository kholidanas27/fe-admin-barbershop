import { create } from 'zustand';
import { simplePOST } from '../../helpers/apiHelper';

export const useRegisterUserStore = create((set) => ({
  data: null,
  message: null,
  loading: false,
  error: null,
  fetchRegisterUser: async (data) => {
    try {
      if (data) {
        set({
          data,
          loading: true,
        });
      }
      const response = await simplePOST('/api/auth/register/', data);
    } catch (error) {
      set({ error });
    }
  },
}));
