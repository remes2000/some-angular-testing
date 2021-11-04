import { Color } from "../enum/color";
import { Shape } from "../enum/shape";

export interface RenderRequest {
  shape: Shape;
  color: Color;
}