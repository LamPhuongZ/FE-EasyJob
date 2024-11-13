import { toast } from "react-toastify";
import { httpClient } from "../../utils/config";
import { DispatchType } from "../configStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProfileType {
  email: string;
  phone: string;
  fullname: string;
  dob: string; // day of birth
  avatar: [] | any;
  createdDate: string | null;
  address: string;
  provinceId: number;
  districtId: number;
  jobSkills?: number[] | null;
  imgFrontOfCard: [] | any;
  imgBackOfCard: [] | any;
}

export interface ChangePasswordType {
  oldPassword?: string | null;
  newPassword?: string | null;
}

export interface UserState {
  userProfile: UserProfileType | null;
  changePassword: ChangePasswordType | null;
  isLoading: boolean;
}

const initialState: UserState = {
  userProfile: null,
  changePassword: null,
  isLoading: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setProfileAction: (
      state: UserState,
      action: PayloadAction<UserProfileType | null>
    ) => {
      state.userProfile = action.payload;
      state.isLoading = false;
    },
    setUpdateProfileUser: (
      state: UserState,
      action: PayloadAction<UserProfileType | null>
    ) => {
      state.userProfile = action.payload;
      state.isLoading = false;
    },
    setChangePasswordAction: (
      state: UserState,
      action: PayloadAction<ChangePasswordType | null>
    ) => {
      state.changePassword = action.payload;
      state.isLoading = false;
    },
    setLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setProfileAction,
  setUpdateProfileUser,
  setChangePasswordAction,
  setLoading,
} = userReducer.actions;
export default userReducer.reducer;

export const getProfileAPI = () => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));
    try {
      const response = await httpClient.get("/api/v1/self");

      const action: PayloadAction<UserProfileType | null> = setProfileAction(
        response.data.data
      );
      dispatch(action);
    } catch (error) {
      toast.error("Lấy thông tin thất bại!!");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const changePasswordAPI = (changePassword: ChangePasswordType) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const response = await httpClient.post(
        "api/v1/self/change-password",
        changePassword
      );

      const action: PayloadAction<ChangePasswordType | null> =
        setChangePasswordAction(response.data);
      dispatch(action);
    } catch (error) {
      toast.error("Xử lý thất bại!!");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateProfileUserAPI = (userProfile: UserProfileType) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const formData = new FormData();

      for (const key in userProfile) {
        const value = userProfile[key as keyof UserProfileType];

        // Kiểm tra và thêm file
        if (value) {
          if (key === "avatar" && value instanceof File) {
            formData.append("avatar", value);
          } else if (key === "imgFrontOfCard" && value instanceof File) {
            formData.append("imgFrontOfCard", value);
          } else if (key === "imgBackOfCard" && value instanceof File) {
            formData.append("imgBackOfCard", value);
          } else if (value instanceof File) {
            formData.append(key, value); // Thêm tệp trực tiếp
          } else if (typeof value === "number" || typeof value === "string") {
            formData.append(key, value.toString());
          }

          // if (key === "jobSkills" && Array.isArray(value)) {
          //   // Thay đổi ở đây để truyền danh sách ID vào formData
          //   value.forEach((skillId: number) => {
          //     formData.append("jobSkills[]", skillId.toString());
          //   });
          // }
        }
      }

      const response = await httpClient.patch("/api/v1/self", formData);

      const action: PayloadAction<UserProfileType | null> =
        setUpdateProfileUser(response.data.data);
      dispatch(action);
    } catch (error) {
      toast.error("Xử lý thất bại!!");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
