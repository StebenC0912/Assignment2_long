import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Instructions(props) {
    const { index, step } = props;

    return (
        <View style={StyleSheet.create({
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginVertical: 10,
            marginHorizontal: 20,
        })}>
            <View style={StyleSheet.create({
                width: 64,
                height: 64,
                borderRadius: 34,
                backgroundColor: "#F7A026",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 20,
            })}>
                <Text style={StyleSheet.create({
                    color: "white",
                    fontSize: 36,
                    fontWeight: "bold",
                })}>{index + 1}</Text>
            </View>
            <Text style={StyleSheet.create({
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                alignSelf: "center",
                color: "#393939",
                fontSize: 14,
                fontWeight: "400",
            })}>{step}</Text>
        </View>
    );
}
