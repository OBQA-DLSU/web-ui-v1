import { tassign } from 'tassign';
export const sessionCreateAttempt = (state, action) => {
  return tassign(state, {
    user: state.user,
    token: state.token,
    loader: true
  });
};

export const sessionCreate = (state, action) => {
  return tassign( state, {
    user: action.user,
    token: action.token,
    loader: false
  });
};

export const sessionCreateFailed = (state, action) => {
  return tassign( state, {
    user: state.user,
    token: state.token,
    loader: false
  });
};

export const sessionCheckAttempt = (state, action) => {
  return tassign(state, {
    user: state.user,
    token: state.token,
    loader: true
  });
};

export const sessionCheckFulfilled = (state, action) => {
  return tassign(state, {
    user: action.user,
    token: action.token,
    loader: false
  });
};

export const sessionCheckFailed = (state, action) => {
  return tassign(state, {
    user: state.user,
    token: state.token,
    loader: true
  });
};

export const sessionDestroy = (state, action) => {
  return tassign(state, {
    user: null,
    token: '',
    loader: false
  });
};
