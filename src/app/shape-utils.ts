import { Color } from "./enum/color";
import { Shape } from "./enum/shape";
import { RenderRequest } from "./interface/render-request";

export class ShapeUtils {
  private static validColors = Object.values(Color);
  private static validShapes = Object.values(Shape);

  public static isValidRenderRequestString(renderRequestString: string): boolean {
    const regex = new RegExp(`^(${this.validColors.join('|')}) (${this.validShapes.join('|')})$`);
    return regex.test(renderRequestString);
  }

  public static getRenderRequestFromString(renderRequestString: string): RenderRequest {
    return {
      shape: ShapeUtils.getShapeFromRenderRequestString(renderRequestString),
      color: ShapeUtils.getColorFromRenderRequestString(renderRequestString)
    }
  }

  public static getShapeFromRenderRequestString(renderRequestString: string): Shape {
    const parts = renderRequestString.split(' ');
    return parts[1] as Shape;
  }

  public static getColorFromRenderRequestString(renderRequestString: string): Color {
    const parts = renderRequestString.split(' ');
    return parts[0] as Color;
  }
}