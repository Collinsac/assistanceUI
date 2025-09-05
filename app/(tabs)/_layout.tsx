import React from "react";
import { Tabs } from "expo-router";
import CustomTab from "@/components/CustomTab";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTab {...props} />}
    />
  );
};

export default _layout;
