import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockedDatas.js"
import axios from "axios";

const apiBaseUrl = axios.create({
	baseURL: "http://localhost:3000/user",
  method: "GET",
}); 

let mockedDatas = null

// Add a response interceptor
apiBaseUrl.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log(response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if(error.code === "ERR_NETWORK") {
    console.log('erreur network')
    
  }
  
  return Promise.reject(error);
});

export const getUserInfo = async (id) => {
    try {
      const response = await apiBaseUrl.get(`/${id}`);
      if(response.status === 200) {
        console.log('API working');
        mockedDatas = false
        return response.data;
      } else {
        mockedDatas = true
      }
    } catch (error) {
      console.log('API unavailable');
      mockedDatas = true
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