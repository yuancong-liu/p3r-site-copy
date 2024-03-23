import { ChangeEvent, useState } from 'react';

import styles from './index.module.scss';

type ProductType = 'package' | 'digital';

export const Product = () => {
  const [productType, setProductType] = useState<ProductType>('package');

  const handleProductTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductType(e.target.value as ProductType);
  };

  return (
    <div className={styles['product-wrapper']}>
      <h2 className={styles['title']}>BUY NOW!</h2>
      <div className={styles['type-tabs']}>
        <label htmlFor="product-type-package" className={styles['tab']}>
          <input
            type="radio"
            name="product-type"
            id="product-type-package"
            value="package"
            checked={productType === 'package'}
            onChange={handleProductTypeChange}
          />
          PACKAGE
        </label>
        <label htmlFor="product-type-digital" className={styles['tab']}>
          <input
            type="radio"
            name="product-type"
            id="product-type-digital"
            value="digital"
            checked={productType === 'digital'}
            onChange={handleProductTypeChange}
          />
          DIGITAL
        </label>
      </div>
      {productType === 'package' ? <PackageContent /> : <DigitalContent />}
      <div className={styles['common-part']}>
        <h3 className={styles['title']}>PRE-ORDER GIFT - DLC: P4G BGM SET</h3>
      </div>
    </div>
  );
};

const PackageContent = () => {
  return <div className={styles['tab-content']}>Package Content</div>;
};

const DigitalContent = () => {
  return <div className={styles['tab-content']}>Digital Content</div>;
};
