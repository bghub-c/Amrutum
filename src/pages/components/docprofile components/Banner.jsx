import PropTypes from "prop-types";
export default function Banner({ docId }) {
  return (
    <span id="banner" className="col-span-2  flex h-3/4 rounded-lg overflow-hidden ">
      <span className="relative w-full h-full overflow-hidden">0
        <img src="/banner1.png" alt="" />
        <div className="absolute bottom-0 bg-bg2 h-1/2 w-full z-10">
          <div className="w-28 h-28  rounded-full -translate-y-6 translate-x-6 overflow-hidden"> <img src="/banner.png" className="w-full h-full"  alt="" /> </div>
          
        </div>
      </span>
    </span>
  );
}
Banner.propTypes = {
  docId: PropTypes.number.isRequired,
};
