import { Object3D } from "../core/Object3D.js";
import { Texture } from "../textures/Texture.js";
import { Mesh } from "../objects/Mesh.js";

import { XRHandPrimitiveModel } from "./XRHandPrimitiveModel.js";

import { XRHandOculusMeshModel } from "./XRHandOculusMeshModel.js";

export class XRHandModel extends Object3D {
  constructor(controller: Group);

  controller: Group;
  motionController: XRHandPrimitiveModel | XRHandOculusMeshModel;
  envMap: Texture;
  mesh: Mesh;
  xrInputSource: any;

  updateMatrixWorld(force: boolean): void;
}

export class XRHandModelFactory {
  constructor();
  path: string;

  setPath(path: string): XRHandModelFactory;

  createHandModel(
    controller: Group,
    profile?: string,
    options?: { [key: string]: any }
  ): XRHandModel;
}
