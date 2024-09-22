import { createAsyncThunk } from '@reduxjs/toolkit';
import config from 'Views/Config';
import { postLoginService } from 'Services';

export const authSignOut = createAsyncThunk(
  'auth/signOut',
  async ({ accessToken }, { rejectWithValue }) => {
    try {
      const url = config.SIGNOUT;
      const response = await postLoginService.post(url, { accessToken });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : { message: 'Unknown error' });
    }
  }
);
