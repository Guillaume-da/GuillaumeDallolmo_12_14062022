import axios from "axios";

const apiBaseUrl = axios.create({
	baseURL: "http://localhost:3000/user",
}); 

export const getUserInfo = async (id) => {
    try {
      const response = await apiBaseUrl.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
};

export const getUserActivity = async (id) => {
  try {
    const response = await apiBaseUrl.get(`/${id}/activity`);
    console.log('activity',response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getUserPerformance = async (id) => {
  try {
    const response = await apiBaseUrl.get(`/${id}/performance`);
    console.log('performance',response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
} 

export const getUserAverageSessions = async (id) => {
  try {
    const response = await apiBaseUrl.get(`/${id}/average-sessions`);
    console.log('Average Sessions',response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}