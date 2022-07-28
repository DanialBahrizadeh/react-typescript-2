export interface ListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}

const List = <T extends { id: number; value: string }>(props: ListProps<T>) => {
  const itemsElements = props.items.map((item, index) => {
    return (
      <div
        key={item.id}
        onClick={() => props.onClick(item)}
        className="bg-blue-500 px-3 py-1 ml-5 my-5 font-bold w-fit cursor-pointer"
      >
        {item.value}
      </div>
    );
  });
  return (
    <div>
      <h2>List of items</h2>
      {itemsElements}
    </div>
  );
};

export default List;
