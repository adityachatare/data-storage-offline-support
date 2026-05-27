import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Button } from "expo-router/build/react-navigation";
// import { createAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const [data, setData] = useState("");

  // create a storage instance
  // const storage = createAsyncStorage("appDB");

  const obj = {
    name: "Aditya",
    age: 30,
    isDeveloper: true,
  };
  //SetItem
  const saveData = async () => {
    await AsyncStorage.setItem("user", JSON.stringify(obj));
  };

  //getItem
  const getData = async () => {
    const value = await AsyncStorage.getItem("user");
    setData(value!);
  };

  //removeItem
  const removeData = async () => {
    await AsyncStorage.removeItem("user");
  };

  //clearStorage
  const clearStorage = async () => {
    await AsyncStorage.clear();
    setData("");
  };
  const getKeys = async () => {
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys);
  };

  // const saveMultiple = async ()=>{
  //   await AsyncStorage.multiSet([
  //     ['name','Code Snippet'],
  //     ['role','Developer']
  //   ])
  // }
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", padding: 20, gap: 12 }}
    >
      {/* <Button title="Create Storage" onPress={storage} /> */}

      <Button title="Save Data" onPress={saveData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
      <Button title="Clear Storage" onPress={clearStorage} />
      <Button title="Get All Keys" onPress={getKeys} />
      {/* <Button title="Multi Set" onPress={saveData}/> */}

      <View style={styles.container}>
        <Text>Edit src/app/index.tsx to edit this screen.</Text>
      </View>
      <Text>{data}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
