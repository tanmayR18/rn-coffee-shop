import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useStore } from '../store/store';

const getCatgeoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
    let categories = Object.keys(temp);
    categories.unshift('All');
    return categories;
  }
};

const HomeScreen = () => {
    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);
    const [ categories, setCategories] = useState(getCatgeoriesFromData(CoffeeList));
    const [setsearchText, setSetsearchText] = useState(undefined)
    const [categoryIndex, setCategoryIndex] = useState({
        index: 0,
        category: categories[0]
    });
    const [setsortedCoffee, setSetsortedCoffee] = useState(undefined)
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
