import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const DonutChart = ({ dataArr }) => {
    const radius = 50;
    const strokeWidth = 10;
  
    // Calculate the total circumference of the circle
    const totalCircumference = 2 * Math.PI * radius;
  
    // Ensure the sum of dataArr equals the total circumference
    const total = dataArr.reduce((acc, data) => acc + data, 0);
    const scaleFactor = totalCircumference / total;
    const scaledDataArr = dataArr.map((data) => data * scaleFactor);
  
    const charts = scaledDataArr.map((data, index) => {
      const color = index === 0 ? 'blue' : index === 1 ? 'green' : 'orange';
  console.log(`${data} ${totalCircumference}`)
      return (
        <Circle
          key={index}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${data} ${totalCircumference}`}
        />
      );
    });
  return (
    <View style={styles.container}>
      <Svg width={2 * (radius + strokeWidth)} height={2 * (radius + strokeWidth)}>
        {charts}
      </Svg>
      <Text style={styles.chartText}>{total}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      alignItems: 'center',
    },
    chartText: {
      textAlign: 'center',
      marginTop: 50,
    },
  });
export default (DonutChart);
