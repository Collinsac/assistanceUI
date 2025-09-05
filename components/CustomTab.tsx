import { View, Text } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const CustomTab = (props: BottomTabBarProps) => {
  return (
    <View className="relative">
      <View className="absolute h-56 w-56 bg-white/70 bottom-full translate-y-1/4 rounded-full left-1/2 -translate-x-1/2">
      
      </View>
    </View>
  );
};

export default CustomTab;
