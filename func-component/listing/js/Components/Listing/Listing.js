const Listing = ({data}) => {

  const itemsList = data.map((item) => {
    return <Item key={item.listing_id} {...item}></Item>;
  });

  return (
    <div>
      {itemsList.length > 0 ?
        <div className="item-list">{itemsList}</div>:
        null
      }
    </div>
  )
};