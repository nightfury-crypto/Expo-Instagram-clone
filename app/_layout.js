import { Stack } from "expo-router";
import StoryPage from "./story/[StoryId]";

export default function HomeLayout() {

  return (
    <Stack>
      <Stack.Screen
        name="bottomtabs"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
