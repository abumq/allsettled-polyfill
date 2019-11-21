Promise.allSettled = Promise.allSettled || ((promises) => Promise.all(promises.map(p => p.catch(e => ({
  status: 'rejected',
  reason: e,
})))));
