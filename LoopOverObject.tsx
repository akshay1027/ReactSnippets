  const data = response.data;
  
  // Easiest and Cleanest method to loop over an object ( having different key value pairs ) to change the values conditionally
  Object.keys(data).forEach(key => {
      if (data[key] === 0 || data[key].length === 0) {
          data[key] = '-';
      }
  });
  
  setIncomingRequestData(data);
