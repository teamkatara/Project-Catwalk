// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RelatedCard from './CardDetails/RelatedCard';
import OutfitCard from './CardDetails/OutfitCard';
import RelatedCarousel from './CardDetails/RelatedCarousel';
import OutfitCarousel from './CardDetails/OutfitCarousel';
import './RP.css';
import currentProduct from '../../mock-data/sample-product.json';

const RelatedProductsWidget = ({ updateProductId, rel, currentId }) => {
  const [list] = useState(rel);
  const [current] = useState(currentProduct);
  const [outfitList, setOutfit] = useState([]);

  console.log(rel);
  console.log(outfitList);

  const products = list.map((product) => (
    <RelatedCard
      updateProductId={updateProductId}
      id={product}
      key={product}
    />
  ));

  const click = (e) => {
    e.preventDefault();
    console.log(currentId);
    if (outfitList.indexOf(currentId) === -1) {
      setOutfit(outfitList.concat(currentId));
    }
  };

  const removed = (number) => {
    console.log(number);
    setOutfit(outfitList.filter((outfit) => outfit !== number));
  };

  let outfits;
  if (outfitList.length === 0) {
    outfits = [''];
  } else {
    outfits = outfitList.map((outfit) => (
      <OutfitCard
        updateProductId={updateProductId}
        id={outfit}
        key={outfit}
        removeFunction={removed}
      />
    ));
  }

  console.log(outfits);
  console.log(currentId);

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <RelatedCarousel related={products} />
      <OutfitCarousel
        outfit={outfits}
        currentP={current}
        click={click}
      />
    </div>
  );
};

RelatedProductsWidget.propTypes = {
  updateProductId: PropTypes.func.isRequired,
  rel: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentId: PropTypes.number.isRequired,
};

export default RelatedProductsWidget;
