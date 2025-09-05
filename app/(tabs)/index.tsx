import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import "../../global.css";
import Profile from "../../assets/images/pro.jpg";
import Arc from "@/components/Arc";
import { Link } from "expo-router";

const index = () => {
  return (
    <ScrollView className="flex-1 bg-[#e8ede9]">
      <View className=" flex-1">
        <View
          className="bg-[#d7dee8] rounded-b-3xl pt-14 pb-8"
          style={{ paddingHorizontal: 20 }}
        >
          <View className="flex-row justify-between items-center mb-10">
            <Ionicons name="grid-outline" size={24} color="black" />
            <Text className="font-semibold text-lg">Climate Control</Text>
            <AntDesign name="close" size={20} />
          </View>

          {/* graphics container */}

          <Arc />

          <View className="mt-20 flex-row justify-between items-center">
            <Text className="w-8/12">
              All suggests you to turn on the automatic climate control
            </Text>
            <View className="bg-gray-200 w-[100px] h-[50px] rounded-full">
              <View className="bg-[#bbc2f9] w-[50px] h-[50px] rounded-full justify-center items-center translate-x-[50px]">
                <Text>On</Text>
              </View>
            </View>
          </View>
        </View>

        <Text className="text-center my-4 font-semibold text-base">
          Your Feed
        </Text>

        <View className="px-3">
          <View className="p-5 bg-[#ccddca] rounded-3xl">
            <View className="flex-row items-center gap-1 border-b pb-2">
              <Text className="font-semibold text-lg">Messages</Text>
              <Text className="ml-auto font-semibold text-xs">View all</Text>
              {/*  */}
              <AntDesign name="right" size={10} />
            </View>

            <View className="my-4 flex-row items-center gap-3">
              <Image source={Profile} className="w-12 h-12 rounded-full" />
              <View>
                <Text className="font-semibold text-base ">Agu Collins</Text>
                <Text>vino_costa</Text>
              </View>
              <Text className="ml-auto self-start font-light">Monday</Text>
            </View>

            <Text className="leading-5 font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              recusandae cum odio impedit vitae suscipit ut dolorum! Dolorum
              excepturi est culpa provident quaerat veritatis,
            </Text>

            <View className="flex-row items-center justify-between mt-4">
              <View className="flex-row items-center gap-1">
                <View className="h-2 w-2 rounded-full border bg-black" />
                <View className="h-2 w-2 rounded-full border" />
                <View className="h-2 w-2 rounded-full border" />
              </View>

              <Text>1/3</Text>
            </View>
          </View>
          {/*  */}
          <View className="p-5 bg-[#d7dee8] mt-4 rounded-3xl">
            <View className="flex-row items-center gap-1 border-b pb-2">
              <Text className="font-semibold text-lg">Security</Text>
              <Text className="ml-auto font-semibold text-xs">View all</Text>
              {/*  */}
              <AntDesign name="right" size={10} />
            </View>

            <View className="my-4 flex-row items-center gap-3">
              <Image source={Profile} className="w-12 h-12 rounded-full" />
              <View>
                <Text className="font-semibold text-base ">Agu Collins</Text>
                <Text>vino_costa</Text>
              </View>
              <Text className="ml-auto self-start font-light">Monday</Text>
            </View>

            <Text className="leading-5 font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              recusandae cum odio impedit vitae suscipit ut dolorum! Dolorum
              excepturi est culpa provident quaerat veritatis,
            </Text>

            <View className="flex-row items-center justify-between mt-4">
              <View className="flex-row items-center gap-1">
                <View className="h-2 w-2 rounded-full border bg-black" />
                <View className="h-2 w-2 rounded-full border" />
                <View className="h-2 w-2 rounded-full border" />
              </View>

              <Text>1/3</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
