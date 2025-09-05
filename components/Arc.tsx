import { View, Text, Dimensions } from "react-native";
import React from "react";
import Svg, { Circle, Defs, Mask, Path, Rect } from "react-native-svg";
import { anglesData, raduisData } from "@/constants/ArcData";

type CalculateCoordinateProps = (
  angle: number,
  raduis: number
) => { X: number; Y: number };

const Arc = () => {
  // Dimension initails
  const { width } = Dimensions.get("screen");
  const realWidth = width - 40;
  const circleRaduis = realWidth / 2;
  const circleX = 0;
  const circleY = circleRaduis;

  const CalculateCoordinate: CalculateCoordinateProps = (angle, radius) => {
    const radianAngle = angle * (Math.PI / 180);
    // x = raduis * cos(angle)
    // x = raduis * sin(angle)
    const X = circleRaduis - radius * Math.cos(radianAngle);
    const Y = circleRaduis - radius * Math.sin(radianAngle);
    return { X, Y };
  };

  const maskOffset = 8;

  const angle = 90;
  const calX = CalculateCoordinate(angle, circleRaduis).X;
  const calY = CalculateCoordinate(angle, circleRaduis).Y;
  return (
    <View className="relative">
      <Svg width={"100%"} height={circleY}>
        <Defs>
          <Mask
            id="holeMask"
            x={0}
            y={0}
            width={realWidth}
            height={circleY}
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <Rect width={realWidth} height={circleY} fill="white" />

            {raduisData.map((item) => {
              return (
                <View key={item.id}>
                  {anglesData.map((itemAngle) => (
                    <Circle
                      key={itemAngle}
                      x={CalculateCoordinate(itemAngle, item.raduis).X}
                      y={CalculateCoordinate(itemAngle, item.raduis).Y}
                      r={item.size}
                      fill="black"
                    />
                  ))}
                </View>
              );
            })}
          </Mask>
        </Defs>

        <Path
          d={`M ${circleX} ${circleY} L ${circleRaduis} ${circleY} L ${realWidth} ${circleY} A ${circleRaduis} ${circleRaduis} 0 0 0 0 ${circleRaduis} `}
          fill="black"
        />

        <Path
          d={`M ${circleX} ${circleY} L ${circleRaduis} ${circleY} L ${calX} ${calY} A ${circleRaduis} ${circleRaduis} 0 0 0 0 ${circleRaduis} `}
          fill="white"
        />

        <Path
          d={`M ${
            circleX + maskOffset
          } ${circleY} L ${circleRaduis} ${circleY} L ${
            realWidth - maskOffset
          } ${circleY} A ${circleRaduis - maskOffset} ${
            circleRaduis - maskOffset
          } 0 0 0 ${circleX + maskOffset} ${circleRaduis} `}
          fill="#d7dee8"
          mask="url(#holeMask)"
        />
      </Svg>

      <View className="border-[3px] border-white w-16 h-16 absolute top-full left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full z-0">
        <View className="w-4 h-4 bg-white absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 -z-10" />
        <View className=" bg-black w-full h-full rounded-full items-center justify-center">
          <Text className="text-white text-lg">90</Text>
          <Text className="absolute text-white top-1 right-2 font-bold">o</Text>
        </View>
      </View>
    </View>
  );
};

export default Arc;
