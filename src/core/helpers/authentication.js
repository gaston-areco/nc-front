export function getToken() {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.VUE_APP_BASE_URL}/auth`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: process.env.VUE_APP_AUTH_USERNAME, password: process.env.VUE_APP_AUTH_PASSWORD }),
    }).then(res => {
      return res.json();
    }).then(async data => {
      if (data?.token) {
        localStorage.setItem('access_token', JSON.stringify(data.token));
        setTimeout(() => getToken(), data.exp);
        resolve(data);
      } else {
        reject(data);
      }
    }).catch(reject);
  });
}
