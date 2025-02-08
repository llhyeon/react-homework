type ItemImage = {
  productNumber: number;
  label: string;
};

function ItemImage({ productNumber, label }: ItemImage) {
  return (
    <figure>
      <img src={`/cart/ProductImage-${productNumber}.webp`} alt="" />
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

export default ItemImage;
