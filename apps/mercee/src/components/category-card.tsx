import React, { ReactElement } from 'react';
import Image from 'next/image';
import { useCategory } from 'contexts/category/category.provider';

interface Props {
  imageUrl: string;
  name: string;
  id: string;
}

export default function CategoryCard({
  imageUrl,
  name,
  id,
}: Props): ReactElement {
  const { category, setCategory } = useCategory();
  function handleCategoryClick() {
    if (category !== id) {
      setCategory(id);
    } else {
      setCategory('');
    }
  }
  return (
    <div
      className={`p-4 flex flex-col border rounded-md text-center ${
        category === id ? 'border-gray-900' : ' border-gray-300'
      }`}
      tabIndex={-1}
      onKeyDown={handleCategoryClick}
      onClick={handleCategoryClick}
      role="button"
    >
      <Image src={imageUrl} alt={name} width={120} height={120} unoptimized />
      <p className="font-semibold text-gray-900 truncate">{name}</p>
    </div>
  );
}
