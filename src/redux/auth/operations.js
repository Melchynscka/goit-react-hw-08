import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

// POST
//user/signup
// Create a new user

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", newUser);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
}
);

// POST
// / users/login
// body:{email, password}
// Login user
export const logIn = createAsyncThunk("auth/login", async (creds, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", creds);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
})

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
})
/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
// refreshUser
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const token = reduxState.auth.token;
    setAuthHeader(token);
    try {
        const response = await axios.get("/users/current");
    return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
},
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        },
    }
);