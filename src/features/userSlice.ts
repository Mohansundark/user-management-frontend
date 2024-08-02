import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  bio: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  bio: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.bio = action.payload.bio;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.bio = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
