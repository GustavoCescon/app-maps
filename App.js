import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapViewDirections from "react-native-maps-directions";

export default function App() {
  function getRegion(origin, zoom) {
    const oLat = Math.abs(origin.latitude);

    const oLng = Math.abs(origin.longitude);

    const dLat = Math.abs(origin.latitude);

    const dLng = Math.abs(origin.longitude);

    return {
      latitude: origin.latitude,

      longitude: origin.longitude,

      latitudeDelta: Math.abs(oLat - dLat) + zoom,

      longitudeDelta: Math.abs(oLng - dLng) + zoom,
    };
  }
  const mapProperty = {
    latitude: -20.84944846,
    longitude: -41.14487439,
  };
  const destination = {
    latitude: -20.84686016,
    longitude: -41.14855975,
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mapProperty.latitude,

          longitude: mapProperty.longitude,

          latitudeDelta: 0.005,

          longitudeDelta: 0.005,
        }}
      >
        <Marker
          key="0"
          coordinate={{
            latitude: mapProperty.latitude,

            longitude: mapProperty.longitude,
          }}
          title="Minha casa"
          description="Minha Casa"
        />
        <MapViewDirections
          origin={mapProperty}
          destination={destination}
          apikey={""}
          strokeColor="red"
          strokeWidth={5}
        />
        <Marker
          key="0"
          coordinate={{
            latitude: destination.latitude,

            longitude: destination.longitude,
          }}
          title="Minha casa"
          description="Minha Casa"
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",
  },

  map: {
    width: Dimensions.get("window").width,

    height: Dimensions.get("window").height,
  },
});
