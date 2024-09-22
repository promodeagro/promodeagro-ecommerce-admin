import { createSlice } from '@reduxjs/toolkit';
import { authSignOut } from './signoutThunk'; // Import your thunk

// Function to get initial state from local storage
const getInitialState = () => {
  const userData = localStorage.getItem("user");
  if (userData) {
    return {
      user: JSON.parse(userData), // Parse the user data from local storage
      isAuthenticated: true,
      error: null,
    };
  }
  return {
    user: null,
    isAuthenticated: false,
    error: null,
  };
};

const authStatusSlice = createSlice({
  name: 'authStatus',
  initialState: getInitialState(), // Call the function to set the initial state
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user data in local storage
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // Clear user data from local storage
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authSignOut.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("user"); // Clear user data on sign out
      })
      .addCase(authSignOut.rejected, (state, action) => {
        state.error = action.payload; // Handle error if needed
      });
  },
});

// Export actions
export const { login, logout, setError } = authStatusSlice.actions;

// Export the reducer to be used in the store
export default authStatusSlice.reducer;
