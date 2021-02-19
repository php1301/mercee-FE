import React from 'react';
import {
  FeatureBase,
  FeatureCounter,
  FeatureContent,
  FeatureTitle,
  FeatureDetails,
} from './utils/theme';

type FeatureBLockProps = {
  title: string;
  description: string;
  className?: string;
  counterBg?: string;
  counter: number;
};

const FeatureBLock: React.FC<FeatureBLockProps> = ({
  title,
  description,
  className,
  counterBg,
  counter,
}) => {
  const classNames = `${FeatureBase} ${className}`;
  return (
    <div className={classNames}>
      <span className={FeatureCounter} style={{ backgroundColor: counterBg }}>
        {counter}
      </span>
      <div className={FeatureContent}>
        <h3 className={FeatureTitle}>{title}</h3>

        <p className={FeatureDetails}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureBLock;
