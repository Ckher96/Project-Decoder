// Write your tests here!
const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;

describe("substitution", () => {
  describe("Edge cases", () => {
    it('Should return false if alphabet is missing', () => 
    {
      const output = substitution("You Are An Excellent Spy")
      expect(output).to.be.false
    })
    it("Substitute alphabet should have 26 characters, if not, then return false", () => {
      const actual = substitution("You Are An Excellent Spy", "xoyqmcgrukswaflnthdj");
      expect(actual).to.be.false;
    });

    it("All characters in substitute alphabet should be unique, if not, return false", () => {
      const actual = substitution("You Are An Excellent Spy", "xxxxxxxxxxxxxxxxxxxxxxxyyy");
      expect(actual).to.be.false;
    });
  });
  describe("Encoding", () => {
    it("Should encode", () => {
      const expected = "jrufscpw";
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });

    it("Should leave spaces alone", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });

    it("Should ignore capital letters", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution("You Are An Excellent Spy", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
  });
  describe('Decoding', () => 
  {
      it("Should decode", () => {
    const expected = "thinkful";
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.equal(expected);
  });

  it("Should leave spaces alone", () => {
    const expected = "you are an excellent spy";
    const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });

  it("Should ignore capital letters", () => {
    const expected = "you are an excellent spy";
    const actual = substitution("Elp Xhm Xf Mbymwwmfj Dne", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });
});
  })

  