import { ContainerBuilder, YamlFileLoader } from "node-dependency-injection";
import path from "path"

const env = process.env.NODE_ENV || "dev";

const container = async () => {
  const container = new ContainerBuilder();
  const loader = new YamlFileLoader(container);
  const site = path.join(__dirname, "application.yaml")
  await loader.load(site);
  return container;
}
export default container;
