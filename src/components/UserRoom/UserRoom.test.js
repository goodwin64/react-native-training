import * as React from "react";
import renderer from "react-test-renderer";

import UserRoom from "./UserRoom";

it('"Weather" Button onPress()', () => {
  const onWeatherClick = jest.fn();
  const testRenderer = renderer.create(
    <UserRoom
      navigation={{
        navigate: onWeatherClick,
        state: {
          params: {}
        }
      }}
    />
  );
  const testInstance = testRenderer.root.findByProps({ title: "Weather" });
  testInstance.props.onPress();
  expect(onWeatherClick).toHaveBeenCalled();
});
