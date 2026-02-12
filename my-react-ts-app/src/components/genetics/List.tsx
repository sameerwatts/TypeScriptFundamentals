type ListPropsType = {
  items: string[] | number[];
  handleListItemClick: (value: string | number) => void;
};
const List = ({ items, handleListItemClick }: ListPropsType) => {
  return (
    <>
      <h2>list of items</h2>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index} onClick={() => handleListItemClick(item)}>
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
