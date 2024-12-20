export default function Timecard() {
  return (
    <div className="flex p-[0.1em] whitespace-normal border-solid border rounded-2xl bg-card flex-col h-full">
      <div className="p-[0.1em] rounded-[0.3em] whitespace-normal pt-2.5 px-4">
        <h2 className="p-[0.1em] rounded-[0.3em] whitespace-normal font-semibold m-0">
          Timesheet
        </h2>
      </div>
      {/* Body */}
      <div className="rounded-[0.3em] whitespace-normal p-4">
        {/* Progress */}
        <div className="flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal sm:py-2 py-1.5 gap-x-3 justify-between">
          <span className="p-[0.1em] rounded-[0.3em] whitespace-normal font-semibold text-sm leading-5">
            Sep 4 - Sep 9
          </span>
          <span className="p-[0.1em] rounded-[0.3em] whitespace-normal font-semibold text-sm leading-5">
            Total hours
          </span>
        </div>
        {/* End Progress */}
        {/* Progress */}
        <div className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal md:gap-x-3 sm:py-2 py-1.5 grid-cols-12 grid">
          {/* Date */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-1 col-span-6">
            <h3 className="p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 m-0">
              Mon, 4/9
            </h3>
          </div>
          {/* End Date */}
          {/* Time */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-3 text-end col-span-6">
            <div className="md: p-[0.1em] rounded-[0.3em] whitespace-normal inline-block">
              <span className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 gap-x-1 inline-flex">
                8:27
                <span className="p-[0.1em] whitespace-normal border-solid md:hidden text-gray-500 text-xs leading-4 py-0.5 px-2 border rounded-full">
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -33m
                  </span>{" "}
                  under
                </span>
                <svg
                  className="hidden p-[0.1em] rounded-[0.3em] whitespace-normal md:block text-gray-400 shrink-0 size-3.5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={10}
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></circle>
                  <path
                    d="M12 16v-4"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                  <path
                    d="M12 8h.01"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                </svg>
                <span
                  className="opacity-0 absolute p-[0.1em] whitespace-normal border-solid [transition-property:opacity] ease-in-out duration-150 font-medium text-xs leading-4 py-1 px-2 border rounded-full inline-block z-10 invisible"
                  role="tooltip"
                  data-popper-placement="right"
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate(903px, 424px)",
                  }}
                >
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -33m
                  </span>{" "}
                  under limit
                </span>
              </span>
            </div>
          </div>
          {/* End Time */}
          {/* Step Progress */}
          <div className="w-full flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal lg:justify-center lg:col-span-6 lg:order-2 md:mt-0 gap-x-1.5 mt-1 col-span-12">
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {/* End Step Progress */}
        </div>
        {/* End Progress */}
        {/* Progress */}
        <div className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal md:gap-x-3 sm:py-2 py-1.5 grid-cols-12 grid">
          {/* Date */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-1 col-span-6">
            <h3 className="p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 m-0">
              Tue, 5/9
            </h3>
          </div>
          {/* End Date */}
          {/* Time */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-3 text-end col-span-6">
            <div className="md: p-[0.1em] rounded-[0.3em] whitespace-normal inline-block">
              <span className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 gap-x-1 inline-flex">
                4:50
                <span className="p-[0.1em] whitespace-normal border-solid md:hidden text-gray-500 text-xs leading-4 py-0.5 px-2 border rounded-full">
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -4h 10m
                  </span>{" "}
                  under
                </span>
                <svg
                  className="hidden p-[0.1em] rounded-[0.3em] whitespace-normal md:block text-gray-400 shrink-0 size-3.5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={10}
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></circle>
                  <path
                    d="M12 16v-4"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                  <path
                    d="M12 8h.01"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                </svg>
                <span
                  className="opacity-0 absolute p-[0.1em] whitespace-normal border-solid [transition-property:opacity] ease-in-out duration-150 font-medium text-xs leading-4 py-1 px-2 border rounded-full inline-block z-10 invisible"
                  role="tooltip"
                  data-popper-placement="right"
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate(903px, 464px)",
                  }}
                >
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -4h 10m
                  </span>{" "}
                  under limit
                </span>
              </span>
            </div>
          </div>
          {/* End Time */}
          {/* Step Progress */}
          <div className="w-full flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal lg:justify-center lg:col-span-6 lg:order-2 md:mt-0 gap-x-1.5 mt-1 col-span-12">
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {/* End Step Progress */}
        </div>
        {/* End Progress */}
        {/* Progress */}
        <div className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal md:gap-x-3 sm:py-2 py-1.5 grid-cols-12 grid">
          {/* Date */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-1 col-span-6">
            <h3 className="p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 m-0">
              Wed, 6/9
            </h3>
          </div>
          {/* End Date */}
          {/* Time */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-3 text-end col-span-6">
            <div className="md: p-[0.1em] rounded-[0.3em] whitespace-normal inline-block">
              <span className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 gap-x-1 inline-flex">
                7:43
                <span className="p-[0.1em] whitespace-normal border-solid md:hidden text-gray-500 text-xs leading-4 py-0.5 px-2 border rounded-full">
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -1h 17m
                  </span>{" "}
                  under
                </span>
                <svg
                  className="hidden p-[0.1em] rounded-[0.3em] whitespace-normal md:block text-gray-400 shrink-0 size-3.5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={10}
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></circle>
                  <path
                    d="M12 16v-4"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                  <path
                    d="M12 8h.01"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                </svg>
                <span
                  className="opacity-0 absolute p-[0.1em] whitespace-normal border-solid [transition-property:opacity] ease-in-out duration-150 font-medium text-xs leading-4 py-1 px-2 border rounded-full inline-block z-10 invisible"
                  role="tooltip"
                  data-popper-placement="right"
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate(903px, 504px)",
                  }}
                >
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -1h 17m
                  </span>{" "}
                  under limit
                </span>
              </span>
            </div>
          </div>
          {/* End Time */}
          {/* Step Progress */}
          <div className="w-full flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal lg:justify-center lg:col-span-6 lg:order-2 md:mt-0 gap-x-1.5 mt-1 col-span-12">
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {/* End Step Progress */}
        </div>
        {/* End Progress */}
        {/* Progress */}
        <div className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal md:gap-x-3 sm:py-2 py-1.5 grid-cols-12 grid">
          {/* Date */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-1 col-span-6">
            <h3 className="p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 m-0">
              Thu, 7/9
            </h3>
          </div>
          {/* End Date */}
          {/* Time */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-3 text-end col-span-6">
            <div className="md: p-[0.1em] rounded-[0.3em] whitespace-normal inline-block">
              <span className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 gap-x-1 inline-flex">
                9:09
                <span className="p-[0.1em] whitespace-normal border-solid md:hidden text-gray-500 text-xs leading-4 py-0.5 px-2 border rounded-full">
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-teal-500">
                    +9m
                  </span>{" "}
                  over
                </span>
                <svg
                  className="hidden p-[0.1em] rounded-[0.3em] whitespace-normal md:block text-gray-400 shrink-0 size-3.5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={10}
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></circle>
                  <path
                    d="M12 16v-4"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                  <path
                    d="M12 8h.01"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                </svg>
                <span
                  className="opacity-0 absolute p-[0.1em] whitespace-normal border-solid [transition-property:opacity] ease-in-out duration-150 font-medium text-xs leading-4 py-1 px-2 border rounded-full inline-block z-10 invisible"
                  role="tooltip"
                  data-popper-placement="right"
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate(903px, 544px)",
                  }}
                >
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-teal-500">
                    +9m
                  </span>{" "}
                  over limit
                </span>
              </span>
            </div>
          </div>
          {/* End Time */}
          {/* Step Progress */}
          <div className="w-full flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal lg:justify-center lg:col-span-6 lg:order-2 md:mt-0 gap-x-1.5 mt-1 col-span-12">
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {/* End Step Progress */}
        </div>
        {/* End Progress */}
        {/* Progress */}
        <div className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal md:gap-x-3 sm:py-2 py-1.5 grid-cols-12 grid">
          {/* Date */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-1 col-span-6">
            <h3 className="p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 m-0">
              Fri, 8/9
            </h3>
          </div>
          {/* End Date */}
          {/* Time */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-3 text-end col-span-6">
            <div className="md: p-[0.1em] rounded-[0.3em] whitespace-normal inline-block">
              <span className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 gap-x-1 inline-flex">
                9:02
                <span className="p-[0.1em] whitespace-normal border-solid md:hidden text-gray-500 text-xs leading-4 py-0.5 px-2 border rounded-full">
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-teal-500">
                    +2m
                  </span>{" "}
                  over
                </span>
                <svg
                  className="hidden p-[0.1em] rounded-[0.3em] whitespace-normal md:block text-gray-400 shrink-0 size-3.5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={10}
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></circle>
                  <path
                    d="M12 16v-4"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                  <path
                    d="M12 8h.01"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                </svg>
                <span
                  className="opacity-0 absolute p-[0.1em] whitespace-normal border-solid [transition-property:opacity] ease-in-out duration-150 font-medium text-xs leading-4 py-1 px-2 border rounded-full inline-block z-10 invisible"
                  role="tooltip"
                  data-popper-placement="right"
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate(903px, 584px)",
                  }}
                >
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-teal-500">
                    +2m
                  </span>{" "}
                  over limit
                </span>
              </span>
            </div>
          </div>
          {/* End Time */}
          {/* Step Progress */}
          <div className="w-full flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal lg:justify-center lg:col-span-6 lg:order-2 md:mt-0 gap-x-1.5 mt-1 col-span-12">
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-teal-500 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {/* End Step Progress */}
        </div>
        {/* End Progress */}
        {/* Progress */}
        <div className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal md:gap-x-3 sm:py-2 py-1.5 grid-cols-12 grid">
          {/* Date */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-1 col-span-6">
            <h3 className="p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 m-0">
              Sat, 9/9
            </h3>
          </div>
          {/* End Date */}
          {/* Time */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-3 text-end col-span-6">
            <div className="md: p-[0.1em] rounded-[0.3em] whitespace-normal inline-block">
              <span className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 gap-x-1 inline-flex">
                0:00
                <svg
                  className="hidden p-[0.1em] rounded-[0.3em] whitespace-normal md:block text-gray-400 shrink-0 size-3.5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={10}
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></circle>
                  <path
                    d="M12 16v-4"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                  <path
                    d="M12 8h.01"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                </svg>
                <span
                  className="opacity-0 absolute p-[0.1em] whitespace-normal border-solid [transition-property:opacity] ease-in-out duration-150 font-medium text-xs leading-4 py-1 px-2 border rounded-full inline-block z-10 invisible"
                  role="tooltip"
                  data-popper-placement="right"
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate(903px, 624px)",
                  }}
                >
                  0s
                </span>
              </span>
            </div>
          </div>
          {/* End Time */}
          {/* Step Progress */}
          <div className="w-full flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal lg:justify-center lg:col-span-6 lg:order-2 md:mt-0 gap-x-1.5 mt-1 col-span-12">
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {/* End Step Progress */}
        </div>
        {/* End Progress */}
        {/* Progress */}
        <div className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal md:gap-x-3 sm:py-2 py-1.5 grid-cols-12 grid">
          {/* Date */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-1 col-span-6">
            <h3 className="p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 m-0">
              Sun, 10/9
            </h3>
          </div>
          {/* End Date */}
          {/* Time */}
          <div className="p-[0.1em] rounded-[0.3em] whitespace-normal lg:col-span-3 lg:order-3 text-end col-span-6">
            <div className="md: p-[0.1em] rounded-[0.3em] whitespace-normal inline-block">
              <span className="items-center p-[0.1em] rounded-[0.3em] whitespace-normal text-sm leading-5 gap-x-1 inline-flex">
                2:35
                <span className="p-[0.1em] whitespace-normal border-solid md:hidden text-gray-500 text-xs leading-4 py-0.5 px-2 border rounded-full">
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -6h 25m
                  </span>
                </span>
                <svg
                  className="hidden p-[0.1em] rounded-[0.3em] whitespace-normal md:block text-gray-400 shrink-0 size-3.5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={10}
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></circle>
                  <path
                    d="M12 16v-4"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                  <path
                    d="M12 8h.01"
                    className="p-[0.1em] rounded-[0.3em] whitespace-normal"
                  ></path>
                </svg>
                <span
                  className="opacity-0 absolute p-[0.1em] whitespace-normal border-solid [transition-property:opacity] ease-in-out duration-150 font-medium text-xs leading-4 py-1 px-2 border rounded-full inline-block z-10 invisible"
                  role="tooltip"
                  data-popper-placement="right"
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate(903px, 664px)",
                  }}
                >
                  <span className="p-[0.1em] rounded-[0.3em] whitespace-normal text-red-500">
                    -6h 25m
                  </span>{" "}
                  under limit
                </span>
              </span>
            </div>
          </div>
          {/* End Time */}
          {/* Step Progress */}
          <div className="w-full flex items-center p-[0.1em] rounded-[0.3em] whitespace-normal lg:justify-center lg:col-span-6 lg:order-2 md:mt-0 gap-x-1.5 mt-1 col-span-12">
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-600 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
            <div
              className="flex p-[0.1em] duration-500 [transition-property:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter,_-webkit-backdrop-filter] ease-in-out text-white text-xs leading-4 text-center bg-gray-200 rounded-full whitespace-nowrap overflow-hidden justify-center flex-col shrink-0 size-2.5"
              role="progressbar"
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {/* End Step Progress */}
        </div>
        {/* End Progress */}
      </div>
      {/* End Body */}
    </div>
  )
}
