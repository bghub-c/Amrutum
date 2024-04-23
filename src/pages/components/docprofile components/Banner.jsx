import PropTypes from "prop-types";
export default function Banner({ docId }) {
  return (
    <div id="banner" className="col-span-2 flex ">
      <div className="relative w-full h-1/5 ">
        <img src="/Banner1.png" className="absolute  top-0" alt="" />

      </div>
    </div>
  );
}
Banner.propTypes = {
  docId: PropTypes.number.isRequired,
};
