import { create } from 'zustand';

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
  fetchRegisterUser: () => {},
}));
