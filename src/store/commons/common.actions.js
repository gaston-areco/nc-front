export default {
  openSnackbar({commit}, data) {
    commit('OPEN_SNACKBAR', data);
  },
  closeSnackbar({commit}) {
    commit('CLOSE_SNACKBAR');
  },
};
