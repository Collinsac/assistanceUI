import React from "react";
import { Tabs } from "expo-router";
import CustomTab from "@/components/CustomTab";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTab {...props} />}
      />
    </GestureHandlerRootView>
  );
};

export default _layout;
