const SampleItem = ({ title, subtitle, number }) => (
  <div className="col-span-2 shadow-lg shadow-black h-[100px] border-solid rounded-2xl ring ring-black ring-opacity-10">
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <h3 className="px-3 pt-2 text-red-900 font-bold">{title}</h3>
        <div className="col-span-1">
          <h3 className="px-3 mt-3 text-red-900 font-bold">{subtitle}</h3>
        </div>
        <div className="px-4">
          <a
            href="#"
            className="text-[10px] rounded-lg px-1 bg-white text-blue-800"
          >
            View Sample List
          </a>
        </div>{" "}
      </div>
      <div className="col-span-1">
        <div className="col-span-1 relative pl-6 py-4">
          <div className="w-[80px] h-[28px] border-[2px] border-white rounded-l-full rounded-r-full relative bg-yellow-200">
            <div className="w-[60px] h-[26px] border-l-[2px] bg-yellow-200 border-t-[2px] border-r-[2px] border-b-[2px]  absolute top-6 left-[6px] rounded-b-lg border-white"></div>
            <div className="h-[26px] w-[26px] rounded-full border-[2px] border-white absolute right-0">
              <div className="h-[16px] w-[16px] rounded-full border-[2px]  border-white absolute left-1 top-1">
                <div className="h-[5px] w-[5px] rounded-full border-[2px] bg-white border-white absolute left-1 top-1"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-10 right-8">
            <div className="w-[80px] h-[28px] border-[2px] border-white rounded-l-full rounded-r-full relative bg-pink-400">
              <div className="w-[60px] h-[26px] border-l-[2px] bg-pink-400 border-t-[2px] border-r-[2px] border-b-[2px]  absolute top-6 left-[6px] rounded-b-lg border-white"></div>
              <div className="h-[26px] w-[26px] rounded-full border-[2px] border-white absolute right-0">
                <div className="h-[16px] w-[16px] rounded-full border-[2px]  border-white absolute left-1 top-1">
                  <div className="h-[5px] w-[5px] rounded-full border-[2px] bg-white border-white absolute left-1 top-1"></div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  </div>
);
export default SampleItem;
