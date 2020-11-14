import pluginPkg from "../../package.json";
import Wysiwyg from "./components/Wysiwyg";

export default (strapi) => {
  const { name, description, strapi: meta } = pluginPkg;
  const { icon, required } = meta;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: meta.description || description,
    icon,
    id: name.replace(/^strapi-plugin-/i, ""),
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    isRequired: required || false,
    mainComponent: null,
    name: meta.name,
    preventComponentRendering: false,
    settings: null,
    trads: {},
  };

  strapi.registerField({ type: "wysiwyg", Component: Wysiwyg });

  return strapi.registerPlugin(plugin);
};
