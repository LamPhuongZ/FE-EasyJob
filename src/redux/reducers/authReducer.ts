import { toast } from "react-toastify";
import { DispatchType } from "../configStore";
import { UserLoginType } from "../../pages/AuthPage/Login/Login";
import { delCookie, getCookie, setCookie } from "../../utils/utilMethod";
import { ACCESS_TOKEN, httpClient, USER_LOGIN } from "../../utils/config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRegisterType } from "../../pages/AuthPage/Register/Register";

export interface LoginState {
  username?: string;
  accessToken?: string;
}

export interface RegisterState {
  fullname: string;
  email: string;
  password: string;
  role: string;
}

export interface AuthState {
  userLogin: LoginState | null;
  userRegister: RegisterState | null;
  isLogin: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  userLogin: getCookie(USER_LOGIN) ? JSON.parse(getCookie(USER_LOGIN)!) : null,
  userRegister: null,
  isLogin: !!getCookie(USER_LOGIN),
  isLoading: false,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setLoginAction: (state: AuthState, action: PayloadAction<LoginState>) => {
      state.userLogin = action.payload;
      state.isLoading = false;
    },
    setRegisterAction: (
      state: AuthState,
      action: PayloadAction<RegisterState>
    ) => {
      state.userRegister = action.payload;
      state.isLoading = false;
    },
    setIsLoginAction: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setLoading: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setLoginAction,
  setRegisterAction,
  setIsLoginAction,
  setLoading,
} = authReducer.actions;
export default authReducer.reducer;

export const loginAPI = (userLogin: UserLoginType) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    if (!initialState.isLogin) {
      delCookie("access_token");
      delCookie("userLogin");
      delCookie("username");
      delCookie("password");
    }

    try {
      const response = await httpClient.post("/api/v1/auth/sign-in", userLogin);
      setCookie(USER_LOGIN, JSON.stringify(response.data), 30);
      setCookie(ACCESS_TOKEN, response.data.data["access-token"], 30);
      const action: PayloadAction<LoginState> = setLoginAction(response.data);
      dispatch(action);
      dispatch(setLoginAction(response.data));
      dispatch(setIsLoginAction(true));
      toast.success("Đăng nhập thành công!!", { position: "bottom-right" });
    } catch (error) {
      toast.error("Đăng nhập thất bại!!");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const registerAPI = (userRegister: UserRegisterType) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const response = await httpClient.post(
        "/api/v1/auth/sign-up",
        userRegister
      );
      dispatch(setRegisterAction(response.data));
      setCookie(USER_LOGIN, JSON.stringify(response.data), 30);
      setCookie(ACCESS_TOKEN, response.data.data["access-token"], 30);
      const action: PayloadAction<LoginState> = setLoginAction(response.data);
      dispatch(action);
      dispatch(setLoginAction(response.data));
      dispatch(setIsLoginAction(true));
      toast.success("Đăng ký thành công!!", { position: "bottom-right" });
    } catch (error) {
      toast.error("Đăng ký thất bại!!");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const logOutAPI = () => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));
    try {
      await httpClient.post("/api/v1/auth/sign-out");
      delCookie("access_token");
      delCookie("userLogin");
      delCookie("username");
      delCookie("password");
      localStorage.removeItem("role");
      dispatch(setIsLoginAction(false));
      toast.success("Đăng xuất thành công!!");
    } catch (error) {
      toast.error("Bạn chưa đăng nhập!!");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
