import { Frame, Layout } from "@shopify/polaris";

const AppLayout = ({ children }) => {
  return (
    <Frame>
      <Layout>{children}</Layout>
    </Frame>
  );
};

export default AppLayout;
