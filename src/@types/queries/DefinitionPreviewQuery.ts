import { DefinitionPreview } from "../definitions";

export default interface DefinitionPreviewQuery {
  allContentfulDefinition: {
    nodes: DefinitionPreview[];
  };
}
