import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockedDatas.js';
import axios from 'axios';

const apiBaseUrl = axios.create({
  baseURL: 'http://localhost:3000/user',
  method: 'GET',
});

let mockedDatas = null;

/**
 * Allows to get first name, last name, age, today score, calories count, protein count, carbohydrate count and lipid count.
 * First function called in Dashboard page when all components are mounted
 * This function allows to know if API is working. If the API is working, mockedDatas is set to false.
 *
 * @param {number} id - number ID of the user
 *
 * @return {promise} - data response if API available or data from mock if API unavailable
 * @author Guillaume
 * @version 1.0
 * 
 */
export const getUserInfo = async (id) => {
  try {
    const response = await apiBaseUrl.get(`/${id}`);
    if (response.status === 200) {
      console.log('API working');
      mockedDatas = false;
      return response.data;
    } else {
      mockedDatas = true;
    }
  } catch (error) {
    console.log('API unavailable. Datas coming from mock.');
    mockedDatas = true;
    const mockedResponse = await USER_MAIN_DATA.filter((x) => x.id === +id);
    return {
      data: mockedResponse[0],
    };
  }
};

/**
 * Allows to get activity sessions of the user. Needs getUserInfo()
 *
 * @param {number} id - number ID of the user
 *
 * @return {promise} - data response if API available or data from mock if API unavailable
 * @author Guillaume
 * @version 1.0
 * 
 */
export const getUserActivity = async (id) => {
  try {
    if (mockedDatas) {
      const response = await USER_ACTIVITY.filter((x) => x.userId === +id);
      return {
        data: response[0],
      };
    } else {
      const response = await apiBaseUrl.get(`/${id}/activity`);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Allows to get performance values of the user: cardio, energy, endurance, strength, speed, intensity.
 *
 * @param {number} id - number ID of the user
 *
 * @return {promise} - data response if API available or data from mock if API unavailable
 * @author Guillaume
 * @version 1.0
 * 
 */
export const getUserPerformance = async (id) => {
  try {
    if (mockedDatas) {
      const response = await USER_PERFORMANCE.filter((x) => x.userId === +id);
      return {
        data: response[0],
      };
    } else {
      const response = await apiBaseUrl.get(`/${id}/performance`);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Allows to get average sessions of the user
 *
 * @param {number} id - number ID of the user
 *
 * @return {promise} - data response if API available or data from mock if API unavailable
 * @author Guillaume
 * @version 1.0
 * 
 */
export const getUserAverageSessions = async (id) => {
  try {
    if (mockedDatas) {
      const response = await USER_AVERAGE_SESSIONS.filter(
        (x) => x.userId === +id
      );
      return {
        data: response[0],
      };
    } else {
      const response = await apiBaseUrl.get(`/${id}/average-sessions`);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
