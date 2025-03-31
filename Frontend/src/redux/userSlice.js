import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: "",
  user : {
    firstName: '',
    surname: '',
    cityState: '',
    postalCode: '',
    country: '',
    phone: '',
    email: '',
  },
  experience : {
    job : '',
    employer : '',
    start : '',
    end : '',
    city : '',
    country : '',
  },
  education : {
    school : '',
    location : '',
    field : '',
    qualification : '',
    start : '',
    graduation : ''
  },
  skills : [],
  summary : [],
  last : {
    languages : '',
    certifications : '',
    hobbies : '',
    projects : '',
    accomplishments : '',
    career : '',
    social : '',
    name : '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateUser : (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
    updateExperience : (state, action) => {
      state.experience = { ...state.experience, ...action.payload}
    },
    updateEducation : (state, action) => {
      state.education = {...state.education, ...action.payload}
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    addSummary : (state, action) => {
      state.summary.push(action.payload)
    },
    updateLast : (state, action) => {
      state.last = {...state.last, ...action.payload}
    },
    updateCurrentPage : (state, action) => {
      state.currentPage = action.payload
    }
  },
});

console.log(formSlice);


export const { updateUser, updateExperience, updateEducation, addSkill, addSummary, updateLast, updateCurrentPage } = formSlice.actions;
export default formSlice.reducer;

