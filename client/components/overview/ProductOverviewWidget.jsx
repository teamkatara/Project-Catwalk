// eslint-disable-next-line no-use-before-define
import React from 'react';
// import axios from 'axios';

class ProductOverviewWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: null,
    };
  }

  componentDidMount() {
    // axios.get('/product/rating/40355')
    //   .then((response) => {
    //     this.setState({
    //       rating: response.data.toFixed(2),
    //     });
    //   });
  }

  render() {
    return (
      <div>{this.state.rating}</div>
    );
  }
}

export default ProductOverviewWidget;
