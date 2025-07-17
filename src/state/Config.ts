import { Vector3 } from "three";

const SCENE = {
  cameraPosition: new Vector3(0, 1.25, 1.25),
  lightPosition: new Vector3(0.5, 1, 1),
  ambientIntensity: 0.5,
  ROTATION_SPEED: 0.25,
  DAY_ENV_INTENSITY: 1,
  NIGHT_ENV_INTENSITY: 0.25,
  DAY_SPOT_INTENSITY: 1,
  NIGHT_SPOT_INTENSITY: 30,
  DAY_SPOT_ANGLE: 1.047197,
  NIGHT_SPOT_ANGLE: 0.25,
};

export { SCENE };
