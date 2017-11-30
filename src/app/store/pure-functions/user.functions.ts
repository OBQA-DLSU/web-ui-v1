import { tassign } from 'tassign';
export const userCreateAttempt = (state, action) => {
  return tassign(state, {
    ...state,
    loader: true
  });
};

export const userCreateFulfilled = (state, action) => {
  return tassign(state, {
    id: action.id,
    idNumber: action.idNumber,
    role: action.role,
    program: action.program,
    fname: action.fname,
    lname: action.lname,
    email: action.email,
    toggleSignup: false,
    loader: false
  });
};

export const userCreateFailed = (state, action) => {
  return tassign(state, {
    ...state,
    toggleSignup: true,
    loader: false
  });
};