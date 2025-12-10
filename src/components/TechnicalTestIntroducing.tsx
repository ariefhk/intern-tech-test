const TODOS = [
  "Fetch users from the API using React Query",
  "Create a search input component to filter users by name, or email",
  "Create a user card component to display individual user information",
  "Create a user list component to render filtered list of users",
  "Integrate the search input and user list component and API",
  "Implement search filter logic to filter users by name, or email",
  "Add loading state handling to the user list component",
  "Add error state handling to the user list component",
];

const TodoItem = ({ todo, number }: { todo: string; number: number }) => {
  return (
    <li className="flex items-start gap-3">
      <span className="shrink-0 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[12px] font-semibold mt-0.5">
        {number}
      </span>
      <span className="text-[16px] text-gray-700">{todo}</span>
    </li>
  );
};

const TodoList = () => {
  return (
    <ul className="space-y-3 pl-1">
      {TODOS.map((todo, index) => {
        const number = index + 1;
        return <TodoItem key={number} todo={todo} number={number} />;
      })}
    </ul>
  );
};

const Todos = () => {
  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Tasks :</h2>
      <TodoList />
    </div>
  );
};

const TechnicalTestIntroducing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Intern Technical Test</h1>
      <Todos />
    </div>
  );
};

export default TechnicalTestIntroducing;
