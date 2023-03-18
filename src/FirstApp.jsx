// import { Fragment } from "react";

const array = [1, 2, 3, 4, 5, 6];
// const newMessage = {
//   message: "Hello world",
//   title: "Sebastian",
// };

const getResult = (a, b) => a + b;

export const FirstApp = () => {
  return (
    // <Fragment>
    //  ......<any/>
    // </Fragment>
    <>
      <h1>Hello world</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1>{getResult(15, 10)}</h1>
      <p>{array}</p>
    </>
  );
};
