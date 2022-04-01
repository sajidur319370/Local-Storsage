let db = {};

const addToDb = (item) => {
  const stored = localStorage.getItem("cheka");

  if (stored) {
    db = JSON.parse(stored);
  }

  if (item in db) {
    db[item] += 1;
  } else {
    db[item] = 1;
  }

  localStorage.setItem("cheka", JSON.stringify(db));
};

const removeItem = (item) => {
  const stored = localStorage.getItem("cheka");
  if (stored) {
    storedObj = JSON.parse(stored);
    delete storedObj[item];
    localStorage.setItem("cheka", JSON.stringify(storedObj));
  }
};
