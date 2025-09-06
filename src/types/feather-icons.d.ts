declare module "feather-icons" {
  export type FeatherIconAttrs = Record<string, string | number | undefined>;

  export interface FeatherIconDefinition {
    name: string;
    contents: string;
    tags: string[];
    attrs: Record<string, string | number>;
    toSvg: (attrs?: FeatherIconAttrs) => string;
  }

  export interface FeatherIcons {
    icons: Record<string, FeatherIconDefinition>;
    replace: (attrs?: FeatherIconAttrs) => void;
    toSvg: (name: string, attrs?: FeatherIconAttrs) => string;
  }

  const feather: FeatherIcons;
  export default feather;
}
