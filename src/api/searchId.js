import makeRequest from './helpers/makeRequest';

function gettingSearchId() {
  let url = 'search';

  return makeRequest(url);
}

export { gettingSearchId };