import * as GameTest from "GameTest";

GameTest.register("DoorTests", "four_villagers_one_door", (test) => {
  const villagerActorType = "minecraft:villager_v2";
  const villagerActorSpawnType =
    "minecraft:villager_v2<minecraft:spawn_farmer>";

  test.spawn(villagerActorSpawnType, 5, 2, 4);
  test.spawn(villagerActorSpawnType, 4, 2, 5);
  test.spawn(villagerActorSpawnType, 2, 2, 5);
  test.spawn(villagerActorSpawnType, 1, 2, 4);

  test.succeedWhen(function (test) {
    test.assertActorPresent(villagerActorType, 5, 2, 2);
    test.assertActorPresent(villagerActorType, 5, 2, 1);
    test.assertActorPresent(villagerActorType, 1, 2, 2);
    test.assertActorPresent(villagerActorType, 1, 2, 1);
  });
}).batch("night") // This should be a constant at some point
  .maxTicks(600);
