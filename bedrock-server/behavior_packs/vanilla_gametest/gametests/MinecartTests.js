import * as GameTest from "GameTest";

GameTest.register("MinecartTests", "turn", (test) => {
  const minecartActorType = "minecart";

  test.assertActorPresent(minecartActorType, 1, 2, 0);
  test.assertActorNotPresent(minecartActorType, 1, 2, 2);

  test.pressButton(0, 3, 0);

  test.succeedWhenActorPresent(minecartActorType, 1, 2, 2);
});
