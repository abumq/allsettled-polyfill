Promise.allSettled = Promise.allSettled || ((promises) => Promise.all(promises.map(p => p
  .then(v => ({
    status: 'resolved',
    value: v,
  }))
  .catch(e => ({
    status: 'rejected',
    reason: e,
  }))
)));
