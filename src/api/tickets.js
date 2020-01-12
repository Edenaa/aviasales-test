import makeRequest from './helpers/makeRequest';

function gettingTickets(id) {
  return makeRequest(`tickets?searchId=${id}`);
}

export { gettingTickets };