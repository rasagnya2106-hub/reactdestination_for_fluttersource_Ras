export const ApiService = {
  login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          resolve({ username: 'admin' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }
};