describe("Test in <DemoComponent />", () => {
  test("This test can not fail", () => {
    //1. Init
    const message = "Hello world";

    //2. stimulate
    const message2 = message.trim();
    //3. Watch the test behavior
    expect(message).toBe(message2);
  });
});
