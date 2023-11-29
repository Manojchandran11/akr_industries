import "./App.css";
import SampleItem from "./Component/Sample";

function App() {
  const samples1 = [
    { title: "SAMPLE 1", subtitle: "02-01-0002" },
    { title: "SAMPLE 2", subtitle: "02-02-0002" },
    { title: "SAMPLE 3", subtitle: "02-03-0002" },
    { title: "SAMPLE 4", subtitle: "02-04-0002" },
    { title: "SAMPLE 5", subtitle: "02-05-0002" },
  ];
  const samples2 = [
    { title: "SAMPLE 6", subtitle: "02-06-0002" },
    { title: "SAMPLE 7", subtitle: "02-07-0002" },
    { title: "SAMPLE 8", subtitle: "02-08-0002" },
    { title: "SAMPLE 9", subtitle: "02-09-0002" },
    { title: "SAMPLE 10", subtitle: "02-10-0002" },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-pink-400 via-blue-300 to-blue-300 via-yellow-100 to-green-400 via-blue-300 shadow-lg shadow-black relative">
      <div className="absolute right-0 top-[200px]">
        <div className="h-[300px] w-[60px] float-right border-black border-[1px] rounded-l-full bg-gradient-to-r from-cyan-300 to-blue-300">
          <h1 className="text-white font-semibold text-3xl -rotate-90 whitespace-nowrap mt-[200px]">
            Sample text 3
          </h1>
        </div>
      </div>
      <div className="w-[96%] h-screen bg-gradient-to-b from-pink-400 via-blue-300 to-blue-300 via-yellow-100 to-green-400 via-blue-300 shadow-lg shadow-black  relative">
        <div className="absolute right-0 top-[200px]">
          <div className="h-[300px] w-[80px] float-right border-black border-[1px] rounded-l-full bg-gradient-to-r from-blue-400 to-blue-400">
            <h1 className="text-white font-semibold text-3xl -rotate-90 whitespace-nowrap mt-[190px]">
              Sample text 2
            </h1>
          </div>
        </div>
        <div className="w-[96%] h-screen  bg-gradient-to-b from-pink-400 via-blue-300 to-blue-300 via-yellow-100 to-green-400 via-blue-300 shadow-lg shadow-black  relative">
          <div className="absolute right-0 top-[200px]">
            <div className="h-[300px] w-[60px] float-right border-black border-[1px] rounded-l-full bg-gradient-to-r from-pink-300 to-pink-400">
              <h1 className="text-white font-semibold text-3xl -rotate-90 whitespace-nowrap mt-[190px]">
                Sample text 1
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-2">
              <div className="h-[55px] w-[80px] rounded-r-full shadow-lg shadow-black backdrop-blur-md mt-2">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="bg-white ml-2 mt-2 h-[15px] w-[15px] "></div>
                  </div>
                  <div className="col-span-1">
                    <div className="bg-white  mt-2 h-[15px] w-[15px] rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="bg-white ml-2 mt-2 h-[15px] w-[15px] rounded-full"></div>
                  </div>
                  <div className="col-span-1">
                    <div className="bg-white  mt-2 h-[15px] w-[15px] "></div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-1"></div>
            <div className="col-span-3 pr-[80px]">
              <div className="bg-white border rounded-full mt-2">
                <div class="relative text-gray-600 focus-within:text-gray-400">
                  <span class="absolute inset-y-0 left-0 top-0 bottom-0 flex items-center pl-2">
                    <button
                      type="submit"
                      class="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-5 h-5 text-gray-400"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search for anything..."
                    name="q"
                    class="py-2 text-sm text-white bg-white pl-10 focus:outline-none focus:bg-white focus:text-gray-900 rounded-full w-auto h-[45px]"
                    placeholder="Search..."
                    autocomplete="off"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="px-[80px] pt-[20px]">
            <div className="grid grid-cols-10 gap-4">
              {samples1.map((sample, index) => (
                <SampleItem key={index} {...sample} />
              ))}
            </div>
          </div>
          <div className="px-[80px] pt-[20px] pb-[50px]">
            <div className="grid grid-cols-10 gap-4">
              {samples2.map((sample, index) => (
                <SampleItem key={index + samples2.length} {...sample} />
              ))}
            </div>
          </div>
          <div className="px-[80px]">
            <div className="h-[350px] border-[1px] border-black shadow-lg shadow-black rounded-[80px]">
              <div className="grid grid-cols-10">
                <div className="col-span-1">
                  <h2 className="font-bold pl-10 pt-10">SAMPLE</h2>
                  <h2 className="font-bold pl-10">DATE</h2>
                </div>
                <div className="col-span-1 pt-10">
                  <div className="rounded-full h-[40px] w-[40px] bg-black relative">
                    <div className="border-t-2 border-black absolute top-5 left-9 w-[139px]"></div>
                    <div class="h-[255px] border-l-2 border-black absolute left-5 top-4"></div>
                  </div>
                </div>
                <div className="col-span-2 pt-8">
                  <div className="bg-white text-black h-[50px] rounded-3xl px-4 font-semibold w-[80%] float-right">
                    <h3>Lorem ipsum dolor sit</h3>
                    <h3>amit</h3>
                  </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2"></div>
                <div className="col-span-2">
                  <h1 className="text-white pt-5 text-3xl font-bold">Sample 1</h1>
                </div>
              </div>
              <div className="grid grid-cols-10 pt-3 ">
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-2 pl-20">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <h2 className="font-semibold pt-4">02-02-0002</h2>
                    </div>
                    <div className="col-span-1 pt-3">
                      <div className="rounded-full h-[30px] w-[30px] bg-white relative">
                        <div class="h-[30px] border-l-2 border-black absolute left-[15px] bottom-[30px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="bg-white text-black h-[50px] rounded-3xl px-4 font-semibold w-[80%] float-left">
                    <h3>Lorem ipsum dolor sit</h3>
                    <h3>amit</h3>
                  </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2"></div>
              </div>{" "}
              <div className="grid grid-cols-10 pt-3">
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-2">
                  <h2 className="font-semibold pt-4 float-right pr-5">
                    10-02-0002
                  </h2>
                </div>
                <div className="col-span-2 ">
                  <div className="grid grid-cols-10">
                    <div className="col-span-2 pt-3">
                      <div className="rounded-full h-[30px] w-[30px] bg-white relative">
                        <div class="h-[24px] border-l-2 border-black absolute left-[15px] bottom-[30px]"></div>
                      </div>
                    </div>
                    <div className="col-span-8 relative">
                      <div className="bg-white text-black h-[50px] rounded-3xl px-4 font-semibold w-full ">
                        <h3>Lorem ipsum dolor sit</h3>
                        <h3>amit</h3>
                      </div>
                      <div className="absolute bottom-[100px] left-[300px]">
                        <div className="relative">
                          <div className="w-[80px] h-[28px] border-[2px] border-white rounded-l-full rounded-r-full relative bg-yellow-200">
                            <div className="w-[60px] h-[26px] border-l-[2px] bg-yellow-200 border-t-[2px] border-r-[2px] border-b-[2px]  absolute top-6 left-[6px] rounded-b-lg border-white"></div>
                            <div className="h-[26px] w-[26px] rounded-full border-[2px] border-white absolute right-0">
                              <div className="h-[16px] w-[16px] rounded-full border-[2px]  border-white absolute left-1 top-1">
                                <div className="h-[5px] w-[5px] rounded-full border-[2px] bg-white border-white absolute left-1 top-1"></div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-7 right-6">
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
                </div>
                <div className="col-span-3"></div>
              </div>{" "}
              <div className="grid grid-cols-10 pt-3">
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-2"></div>
                <div className="col-span-3  pl-[200px]">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <h2 className="font-semibold pt-4">13-02-0002</h2>
                    </div>
                    <div className="col-span-1 pt-3">
                      <div className="rounded-full h-[30px] w-[30px] bg-white relative">
                        <div class="h-[24px] border-l-2 border-black absolute left-[15px] bottom-[30px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="bg-white text-black h-[50px] rounded-3xl px-4 font-semibold w-[80%] float-left">
                    <h3>Lorem ipsum dolor sit</h3>
                    <h3>amit</h3>
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid grid-cols-10 pt-3">
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-2"></div>
                <div className="col-span-2"></div>
                <div className="col-span-2"></div>
                <div className="col-span-2 px-4 pt-1">
                  <div className="rounded-full h-[40px] w-[40px] bg-black relative">
                    <div className="border-t-2 border-black absolute top-5 right-9 w-[877px]"></div>
                    <div class="h-[40px] border-l-2 border-black absolute left-5 bottom-4"></div>
                    <h2 className="font-bold pl-20 ">SAMPLE</h2>
                    <h2 className="font-bold pl-20">DATE</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
