const List: React.FC = ({children}) => {
  return (
    <ul className="divide-y divide-slate-200">
      {children}
    </ul>
  );
};

export default List;
