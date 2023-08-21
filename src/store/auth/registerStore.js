import { create } from 'zustand';
import { simplePOST } from '../../helpers/apiHelper';

export const useRegisterUserStore = create((set) => ({
  registerUserObject: {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    roles: [],
  },
  registerUserAction: () =>
    set((state) => ({
      registerUserObject: {
        ...state,
      },
    })),
  fetchRegisterUser: async (data) => {
    await simplePOST('api/auth/register/', data);
  },
}));
