import { create } from 'zustand';
import { Navigate } from 'react-router-dom';
import { notificationError, notificationSuccess } from '../../helpers/notificationHelper';
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
      const response = await simplePOST('/api/auth/register/', JSON.stringify(data));
      if (response?.message === 'success') {
        set({
          loading: false,
          message: response?.message,
        });
        notificationSuccess(response?.message);
        <Navigate replace to="/login" />;
      }
    } catch (error) {
      set({ error });
      notificationError(error);
    }
  },
}));
