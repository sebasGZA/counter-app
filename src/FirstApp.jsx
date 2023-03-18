import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>

      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  subTitle: PropTypes.number,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "Sebastian Gomez",
  subTitle: 123,
  title: "No title",
};
