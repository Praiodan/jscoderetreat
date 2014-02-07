describe("Kata Tests", function() {

    it("should return hello world ", function () {
        expect(myFunc()).toBe("Hello World");
    });

    it("should break the test ", function () {
        expect(myFunc()).toBe("World Hello");
    });
});