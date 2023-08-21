import { create } from 'zustand';
import { POST } from '../../helpers/apiHelper';

export const useCurrentUserStore = create((set) => ({
  user: null,
  fetchCurrentUser: async (role, userId) => {
    const response = await POST(`api/${role}/profile/${userId}`);
    if (response?.code === 200 && response?.message === 'success') {
      set({ user: response });
    }
  },
}));
