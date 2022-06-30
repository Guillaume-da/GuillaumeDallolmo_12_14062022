import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockedDatas.js"
import axios from "axios";

const apiBaseUrl = axios.create({
	baseURL: "http://localhost:3000/user",
}); 

const mockedDatas = true

export const getUserInfo = async (id) => {
    try {
      const response = await apiBaseUrl.get(`/${id}`);
      
      // console.log("status",response.status)
      if(response.status === 200) {
        console.log('API working');
        return response.data;
      }
      
      // if(mockedDatas) {
      //   const response = await USER_MAIN_DATA.filter(x => x.id === +id);
      //   return {
			// 			data: response[0],
			//   }
      // } else {
      //   const response = await apiBaseUrl.get(`/${id}`);
      //   console.log("status",response.status)
      //   return response.data;
      // }
    } catch (error) {
      console.log('API unavailable');
      const mockedResponse = await USER_MAIN_DATA.filter(x => x.id === +id);
         return {
			 			data: mockedResponse[0],
			   }
    }
};

export const getUserActivity = async (id) => {
  try {
    if(mockedDatas) {
      const response = await USER_ACTIVITY.filter(x => x.userId === +id);
      return {
          data: response[0],
      }
    } else {
      const response = await apiBaseUrl.get(`/${id}/activity`);
      return response.data;
    }
    
  } catch (error) {
    console.log(error);
  }
}

export const getUserPerformance = async (id) => {
  try {
    if(mockedDatas) {
      const response = await USER_PERFORMANCE.filter(x => x.userId === +id);
      return {
          data: response[0],
      }
    } else {
      const response = await apiBaseUrl.get(`/${id}/performance`);
      return response.data;
    }
    
  } catch (error) {
    console.log(error);
  }
} 

export const getUserAverageSessions = async (id) => {
  try {
    if(mockedDatas) {
      const response = await USER_AVERAGE_SESSIONS.filter(x => x.userId === +id);
      return {
          data: response[0],
      }
    } else {
      const response = await apiBaseUrl.get(`/${id}/average-sessions`);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}