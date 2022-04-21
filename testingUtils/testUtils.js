import { render } from "@testing-library/react";
import I18nProvider from "next-translate/I18nProvider";

import commonEN from "../locales/en/common.json";

const Providers = ({ children }) => (
  <I18nProvider
    lang={"en"}
    namespaces={{
      common: commonEN,
    }}
  >
    {children}
  </I18nProvider>
);

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
