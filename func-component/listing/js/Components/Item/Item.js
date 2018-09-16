const Item = ({url, MainImage, title, currency_code, price, quantity}) => {
  const preparedTitle = sliceText(title, 50);

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{preparedTitle}</p>
        <ItemPrice price={price} currency_code = {currency_code}/>
        <ItemQuantity quantity={quantity}/>
      </div>
    </div>
  )
};