/* eslint-disable react-hooks/rules-of-hooks */
import { create } from 'zustand';
import { simplePOST } from '../../helpers/apiHelper';
import { setCurrentToken } from '../../helpers/utils';
import { useCurrentUserStore } from './currentUser';

const loadCurrentUser = (role, userId) => {
  if (role && userId) {
    useCurrentUserStore((state) => state.fetchCurrentUser(role, userId));
  }
};

export const useLoginUserStore = create((set) => ({
  loginUserObject: {
    username: '',
    password: '',
  },
  loginAction: () =>
    set((state) => ({
      loginUserObject: {
        ...state,
      },
    })),
  fetchLoginUser: async (data) => {
    const response = await simplePOST('api/auth/login/', data);
    if (response?.code === 200 && response?.message === 'success') {
      setCurrentToken(response?.data?.accessToken);
      loadCurrentUser(response?.roles[0], response?.data?.id);
    }
  },
}));
