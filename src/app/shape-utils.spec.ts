import { Color } from "./enum/color";
import { Shape } from "./enum/shape";
import { ShapeUtils } from "./shape-utils";

interface ShapeUtilsTestCase {
  renderRequestString: string;
  isValidRenderRequestString: boolean;
  shape: Shape,
  color: Color
}

const generateAllValidRenderRequestStrings = (): ShapeUtilsTestCase[] => {
  const results: ShapeUtilsTestCase[] = [];
  Object.values(Color).forEach((color) => {
    Object.values(Shape).forEach((shape) => {
      results.push({
        renderRequestString: `${color} ${shape}`,
        isValidRenderRequestString: true,
        shape,
        color
      });
    });
  });
  return results;
};

const testCases: ShapeUtilsTestCase[] = [
  ...generateAllValidRenderRequestStrings(),
  {
    renderRequestString: 'bluesky oval',
    isValidRenderRequestString: false,
    shape: undefined,
    color: undefined
  },
  {
    renderRequestString: 'red square red square',
    isValidRenderRequestString: false,
    shape: undefined,
    color: undefined
  },
  {
    renderRequestString: 'depp blue circle',
    isValidRenderRequestString: false,
    shape: undefined,
    color: undefined
  },
  {
    renderRequestString: '',
    isValidRenderRequestString: false,
    shape: undefined,
    color: undefined
  },
  {
    renderRequestString: ' ',
    isValidRenderRequestString: false,
    shape: undefined,
    color: undefined
  }
];


describe('ShapeUtils', () => {
  describe(`isValidRenderRequestString`, () => {
    testCases.forEach((testCase) => {
      it(`"${testCase.renderRequestString}" should be ${testCase.isValidRenderRequestString ? 'valid' : 'invalid'} render request string`, () => {
        expect(ShapeUtils.isValidRenderRequestString(testCase.renderRequestString)).toBe(testCase.isValidRenderRequestString);
      });  
    });
  });

  describe(`getShapeFromRenderRequestString`, () => {
    testCases.filter(testCase => testCase.isValidRenderRequestString).forEach((testCase) => {
      it(`should return ${testCase.shape} for ${testCase.renderRequestString}`, () => {
        expect(ShapeUtils.getShapeFromRenderRequestString(testCase.renderRequestString)).toBe(testCase.shape);
      });
    });
  });

  describe(`getColorFromRenderRequestString`, () => {
    testCases.filter(testCase => testCase.isValidRenderRequestString).forEach((testCase) => {
      it(`should return ${testCase.color} for ${testCase.renderRequestString}`, () => {
        expect(ShapeUtils.getColorFromRenderRequestString(testCase.renderRequestString)).toBe(testCase.color);
      });
    });
  });

  describe(`getRenderRequestFromString`, () => {
    testCases.filter(testCase => testCase.isValidRenderRequestString).forEach((testCase) => {
      it(`should return correct render request for ${testCase.renderRequestString}`, () => {
        const renderRequest = ShapeUtils.getRenderRequestFromString(testCase.renderRequestString);
        expect(renderRequest).toEqual({
          shape: testCase.shape,
          color: testCase.color
        })
      });
    });
  });
});
