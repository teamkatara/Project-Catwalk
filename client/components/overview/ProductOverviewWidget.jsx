// eslint-disable-next-line no-use-before-define
import React from 'react';
import axios from 'axios';

class ProductOverviewWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: null,
    };
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?sort=newest&product_id=40344&count=100', {
      headers: { Authorization: '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' },
    })
      .then((response) => {
        this.setState({
          rating: response.data.results
            .map((review) => review.rating)
            .reduce((previous, current) => previous + current, 0) / response.data.results.length,
        });
      });
  }

  render() {
    return (
      <div>{this.state.rating}</div>
    );
  }
}

export default ProductOverviewWidget;
