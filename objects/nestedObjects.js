let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

const clone = JSON.parse(JSON.stringify(nestedObject))

clone.data.totalUsers = 100

function iterateObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        console.log(`${key}: {`);
        iterateObject(value); // Recursively call the function for nested objects
        console.log('}');
      } else {
        console.log(`${key}:`, value);
      }
    }
  }
}

iterateObject(clone);
