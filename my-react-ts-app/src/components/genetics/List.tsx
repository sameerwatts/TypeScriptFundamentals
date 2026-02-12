type ListPropsType<T> = {
  items: T[];
  handleListItemClick: (value: T) => void;
  renderItem: (item: T) => React.ReactNode;
};
// const List = <T extends {}>({ items, handleListItemClick }: ListPropsType<T>) => {
// const List = <T extends string | number>({ items, handleListItemClick }: ListPropsType<T>) => {
// const List = <T extends {id: number}>({ items, handleListItemClick, renderItem }: ListPropsType<T>) => {
const List = <T extends {}>({
  items,
  handleListItemClick,
  renderItem,
}: ListPropsType<T>) => {
  return (
    <>
      <h2>list of items</h2>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index} onClick={() => handleListItemClick(item)}>
              {renderItem(item)}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
