export default {
  OPEN_SNACKBAR(state, object) {
    state.snackbar = object;
  },
  CLOSE_SNACKBAR(state) {
    state.snackbar = null;
  },
};
