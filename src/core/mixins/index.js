export default {
  methods: {
    $inactivityTime(callback) {
      let time;
      document.onmousemove = resetTimer;
      document.onkeydown = resetTimer;

      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(() => {
          callback();
          resetTimer();
        }, 2 * 60 * 1000);
      }
    }
  }
};
