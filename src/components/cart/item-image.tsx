type ItemImage = {
  productNumber: number;
  label: string;
};

function ItemImage({ productNumber, label }: ItemImage) {
  return (
    <figure>
      <img src={`/cart/ProductImage-${productNumber}.webp`} alt="" width={110} height={110} />
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

export default ItemImage;
