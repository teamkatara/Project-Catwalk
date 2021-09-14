// eslint-disable-next-line no-use-before-define
import React from 'react';

const Search = () => (
  <div className="qa-search">
    <form>
      <input id="qa-search-text" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <input id="qa-search-btn" type="button" value="Search" />
    </form>
  </div>
);

export default Search;
