export const convertArrayOfObjectsToObject = (arrayOfObjects) => {
  const resObj = {};

  // The objects being passed must have an id property
  arrayOfObjects.forEach((obj) => {
    resObj[obj.id] = obj;
  });

  return resObj;
};
