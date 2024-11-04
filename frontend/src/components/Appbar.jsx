export const Appbar = () => {
  return (
    <div className="flex items-center justify-between px-4 shadow h-14">
      <div className="flex flex-col justify-center h-full ml-4 text-xl font-bold text-green-600">
        PayTM App
      </div>
      <div className="flex items-center">
        <div className="flex flex-col justify-center h-full mr-4 font-semibold">
          Welcome!
        </div>
        <div className="flex justify-center w-10 h-10 mt-1 mr-2 rounded-full bg-slate-200">
          <div className="flex flex-col justify-center h-full text-xl font-semibold">
            U
          </div>
        </div>
      </div>
    </div>
  );
};
