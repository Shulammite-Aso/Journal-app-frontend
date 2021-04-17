function concat(value) { 
    return value+"-app" 
};

test('A test that would always pass', async () => {

    expect(concat("react")).toBe("react-app");

  });

