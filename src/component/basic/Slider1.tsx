import React from "react";

const Slider1 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-2 flex-wrap">
        <div className="h-96 bg-blue-200 ml-2">
          <div className="m-1">96</div>
        </div>
        <div className="h-80 bg-blue-200 ml-2">
          <div className="m-1">80</div>
        </div>
        <div className="h-64 bg-blue-200 ml-2">
          <div className="m-1">64</div>
        </div>
        <div className="h-48 bg-blue-200 ml-2">
          <div className="m-1">48</div>
        </div>
        <div className="h-40 bg-blue-200 ml-2">
          <div className="m-1">40</div>
        </div>
        <div className="h-32 bg-blue-200 ml-2">
          <div className="m-1">32</div>
        </div>
        <div className="h-24 bg-blue-200 ml-2">
          <div className="m-1">24</div>
        </div>
      </div>
      <br />
      <div className="flex flex-row mt-2">
        <div className="w-32 h-20 bg-gray-200 ml-2 text-center">w-32</div>
        <div className="w-36 h-20 bg-gray-200 ml-2 text-center">w-36</div>
        <div className="w-40 h-20 bg-gray-200 ml-2 text-center">w-40</div>
        <div className="w-44 h-20 bg-gray-200 ml-2 text-center">w-44</div>
        <div className="w-48 h-20 bg-gray-200 ml-2 text-center">w-48</div>
        <div className="w-52 h-20 bg-gray-200 ml-2 text-center">w-52</div>
        <div className="w-56 h-20 bg-gray-200 ml-2 text-center">w-56</div>
        <div className="w-60 h-20 bg-gray-200 ml-2 text-center">w-60</div>
        <div className="w-64 h-20 bg-gray-200 ml-2 text-center">w-64</div>
        <div className="w-72 h-20 bg-gray-200 ml-2 text-center">w-72</div>
        <div className="w-80 h-20 bg-gray-200 ml-2 text-center">w-80</div>
        <div className="w-96 h-20 bg-gray-200 ml-2 text-center">w-96</div>
      </div>
      <br />
      <div className="grid grid-cols-2 m-2 gap-4">
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          One
        </div>
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          Two
        </div>
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          Three
        </div>
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          Four
        </div>
      </div>
      <br />
      <div className="grid grid-flow-col-dense gap-4 m-2">
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          One
        </div>
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          Two
        </div>
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          Three
        </div>
        <div className="flex-1 h-40 bg-purple-200 text-center content-center">
          Four
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 m-2">
        <div className="flex-[0.3] h-64 bg-purple-200 text-center content-center">
          One
        </div>
        <div className="flex-[0.3] h-64 bg-purple-200 text-center content-center">
          Two
        </div>
        <div className="flex-[0.3] h-64 bg-purple-200 text-center content-center">
          Three
        </div>
        <div className="flex-[0.3] h-64 bg-purple-200 text-center content-center">
          Four
        </div>
      </div>
    </div>
  );
};

export default Slider1;
