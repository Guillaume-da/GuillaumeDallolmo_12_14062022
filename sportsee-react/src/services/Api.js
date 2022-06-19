import axios from "axios";

const apiBaseUrl = axios.create({
	baseURL: "http://localhost:3000/user",
});
  

export const getUserInfo = async (id) => {
    try {
      const response = await apiBaseUrl.get(`/${id}`);
      console.log(response.data)
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

  