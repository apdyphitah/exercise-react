function TodosApp() {
  return (
    <div className="min-h-screen bg-[#ededff] flex flex-col items-center py-10">
      {/* Tabs */}
      <div className="flex gap-8 mb-6">
        <button className="bg-purple-100 text-purple-600 font-semibold px-5 py-2 rounded-lg">
          Todo App
        </button>
        <button className="text-gray-500 font-semibold px-5 py-2 rounded-lg">
          Study Timer
        </button>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Todo List
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a new todo..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg">
            Add
          </button>
        </div>

        {/* Todo Items */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-gray-700">hey whtsapp</span>
          </div>

          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked readOnly className="w-5 h-5" />
              <span className="text-gray-400 line-through">
                how are yu doing
              </span>
            </div>
            <button className="text-red-500 font-semibold hover:text-red-700">
              Delete
            </button>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-gray-700">This is cool right ?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosApp;