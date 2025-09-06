import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

const CustomTab = (props: BottomTabBarProps) => {
  type Route = {
    id: number;
    iconName: any;
    bgColor: string;
    absolute: string;
  };
  const RouteData: Route[] = [
    // power icon
    {
      id: 1,
      iconName: "poweroff",
      bgColor: "bg-[#bbc2f9]",
      absolute: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    },
    // left and right icon
    {
      id: 2,
      iconName: "setting",
      bgColor: "bg-white",
      absolute: "absolute top-1/2 left-2 -translate-y-1/2 ",
    },
    {
      id: 3,
      iconName: "home",
      bgColor: "bg-black",
      absolute: "absolute top-1/2 right-2 -translate-y-1/2 ",
    },
    // top and bottom icons
    {
      id: 4,
      iconName: "notification",
      bgColor: "bg-white",
      absolute: "absolute top-2 left-1/2 -translate-x-1/2",
    },
    {
      id: 5,
      iconName: "mail",
      bgColor: "bg-white",
      absolute: "absolute bottom-2 left-1/2 -translate-x-1/2",
    },
    // top 45 deeg icon
    {
      id: 6,
      iconName: "retweet",
      bgColor: "bg-white",
      absolute:
        "absolute top-[26%] left-[26%] -translate-y-1/2 -translate-x-1/2",
    },
    {
      id: 7,
      iconName: "user",
      bgColor: "bg-white",
      absolute:
        "absolute top-[26%] right-[26%] -translate-y-1/2 translate-x-1/2",
    },
    // bottom 45 deg icon
    {
      id: 8,
      iconName: "filter",
      bgColor: "bg-white",
      absolute:
        "absolute bottom-[26%] left-[26%] translate-y-1/2 -translate-x-1/2",
    },
    {
      id: 9,
      iconName: "filter",
      bgColor: "bg-white",
      absolute:
        "absolute bottom-[26%] right-[26%] translate-y-1/2 translate-x-1/2",
    },
  ];

  const RouteContainer = ({ id, bgColor, absolute, iconName }: Route) => (
    <TouchableOpacity
      className={`${
        id === 1 ? "w-16 h-16" : "w-14 h-14"
      } items-center justify-center rounded-full ${absolute} ${bgColor}`}
    >
      <AntDesign
        name={iconName}
        size={20}
        color={id === 3 ? "white" : "black"}
      />
    </TouchableOpacity>
  );

  return (
    <View className="relative">
      <View className="absolute h-[205px] w-[205px] bg-gray-200/80 bottom-full translate-y-1/3 rounded-full left-1/2 -translate-x-1/2">
        {RouteData.map((route) => (
          <RouteContainer key={route.id} {...route} />
        ))}
      </View>
    </View>
  );
};

export default CustomTab;
