const INITIAL_STATE = {
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return state;
    default:
      return state;
  }
}
