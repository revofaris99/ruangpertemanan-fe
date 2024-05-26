import "../../css/loader.css";
// import "../../css/LoaderSpinner.css";
const Loader = () => {
  return (
    <div className="">
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="grid grid-cols-1">
          <div className="water">
            <div className="flex justify-center">
              <h1 className="flex justify-center mt-24 font-semibold text-lg">
                Ruang Pertemanan
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="spinner-sectior spinner-sector-red"></div>
      <div className="spinner-sectior spinner-sector-green"></div>
      <div className="spinner-sectior spinner-sector-blue"></div> */}
    </div>
  );
};

export default Loader;
