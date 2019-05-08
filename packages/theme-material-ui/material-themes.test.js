import lightGrayHighTheme from "./build/mui/lightGrayHighDensityTheme";
import webLightMediumTheme from "./build/mui/webLightMediumDensityTheme";
import darkBlueHighTheme from "./build/mui/darkBlueHighDensityTheme";
import darkBlueMediumTheme from "./build/mui/darkBlueMediumDensityTheme";
import darkGrayHighTheme from "./build/mui/darkGrayHighDensityTheme";
import darkGrayMediumTheme from "./build/mui/darkGrayMediumDensityTheme";
import webLightHighTheme from "./build/mui/webLightHighDensityTheme";
import lightGrayMediumTheme from "./build/mui/lightGrayMediumDensityTheme";

const themes = [
  lightGrayHighTheme,
  webLightMediumTheme,
  darkBlueHighTheme,
  darkBlueMediumTheme,
  darkGrayHighTheme,
  darkGrayMediumTheme,
  webLightHighTheme,
  lightGrayMediumTheme
];

describe("Material UI Theme", () => {
  themes.forEach(theme => {
    describe(`theme: ${theme.metadata.id}`, () => {
      it("has these keys", () => {
        expect(theme).toHaveProperty("metadata");
        expect(theme).toHaveProperty("resolvedRoles");
        expect(theme).toHaveProperty("props");
        expect(theme).toHaveProperty("typography");
        expect(theme).toHaveProperty("palette");
        expect(theme).toHaveProperty("overrides");
      });
      it(`${theme.metadata.id} has the right density values`, () => {
        if (theme.metadata.id === "hig-dark-blue-high-density") {
          expect(theme.overrides.MuiButton.root.padding).toEqual(
            "4px 12px!important"
          );
        }
        if (theme.metadata.id === "hig-dark-blue-medium-density") {
          expect(theme.overrides.MuiButton.root.padding).toEqual(
            "8px 16px!important"
          );
        }
        if (theme.metadata.id === "hig-dark-gray-high-density") {
          expect(theme.overrides.MuiButton.root.padding).toEqual(
            "4px 12px!important"
          );
        }
        if (theme.metadata.id === "hig-dark-gray-medium-density") {
          expect(theme.overrides.MuiButton.root.padding).toEqual(
            "8px 16px!important"
          );
        }
        if (theme.metadata.id === "hig-light-gray-high-density") {
          expect(theme.overrides.MuiButton.root.padding).toEqual(
            "4px 12px!important"
          );
        }
        if (theme.metadata.id === "hig-light-gray-medium-density") {
          expect(theme.overrides.MuiButton.root.padding).toEqual(
            "8px 16px!important"
          );
        }
      });
    });
  });
});
