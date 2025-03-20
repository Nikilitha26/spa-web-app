import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    // State for spot prices
    spotPrices: [],

    // State for workshops
    workshops: [],
  },

  getters: {
    // Existing getter for grouped spot prices
    groupedPrices: (state) => {
      if (!Array.isArray(state.spotPrices)) {
        return [];
      }

      const groupedByCategory = state.spotPrices.reduce((acc, item) => {
        if (!acc[item.categoryName]) {
          acc[item.categoryName] = [];
        }
        acc[item.categoryName].push(item);
        return acc;
      }, {});

      const latestPrices = Object.values(groupedByCategory).map((items) => {
        const sortedItems = items.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        return sortedItems.slice(0, 5); 
      });

      return latestPrices.flat(); 
    },

    // Getter for filtered workshops
    filteredWorkshops: (state) => (showAvailableOnly) => {
      if (showAvailableOnly) {
        return state.workshops.map((workshop) => ({
          ...workshop,
          dates: workshop.dates.filter((date) => date.seatsAvailable > 0),
        }));
      }
      return state.workshops;
    },
  },

  mutations: {
    // Existing mutation for spot prices
    SET_SPOT_PRICES(state, spots) {
      state.spotPrices = spots;
    },

    // Mutation to set workshops
    SET_WORKSHOPS(state, workshops) {
      state.workshops = workshops;
    },
  },

  actions: {
    // Action to fetch spot prices
    async fetchSpotPrices({ commit }) {
      try {
        const response = await axios.get('https://api.sharenet.co.za/api/v1/px2/spots');
        commit('SET_SPOT_PRICES', response.data.spots || []); 
      } catch (error) {
        console.error('Error fetching spot prices:', error);
      }
    },

    // Action to fetch workshops
    async fetchWorkshops({ commit }) {
      try {
        const response = await axios.get('https://spa-web-app.onrender.com/');
        commit('SET_WORKSHOPS', response.data || []); 
      } catch (error) {
        console.error('Error fetching workshops:', error);
        alert('Failed to fetch workshops. Please try again later.');
      }
    },

    // Action to book a workshop
    async bookWorkshop({ dispatch }, dateId) {
      try {
        console.log('Attempting to book with dateId:', dateId);

        const response = await axios.post('https://spa-web-app.onrender.com/book', {
          dateId,
        });

        console.log('Response from backend:', response.data);

        if (response.data.success) {
          await dispatch('fetchWorkshops'); 
          return Promise.resolve('Booking successful!'); 
        } else {
          return Promise.reject('Booking failed. No seats available or invalid date.');
        }
      } catch (error) {
        console.error('Error booking workshop:', error.response?.data || error.message);
        return Promise.reject('An error occurred during booking. Please try again later.');
      }
    },
  },

  modules: {},
});
