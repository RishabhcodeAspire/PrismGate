import React, {useState} from 'react'
import {
    View,
    Alert,
    StyleSheet,
    ActivityIndicator,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView
  } from "react-native";


const GateDetails = () => {
    const [Name, SetName] = useState("");
    const [IdType, SetIdType] = useState("");
    const [IdNo, SetIdNo] = useState("");
    const [FlatNo, SetFlatNo] = useState("");
    const [Block, SetBlock] = useState("");
    const [InTime, SetInTime] = useState("");
    const [GateNo, SetGateNo] = useState("");
    const [VehicleNo, SetVehicleNo] = useState("");

    // const saveData = async() => {
    //     const url = "http://localhost:8080/v1/visitor"
    //     let result = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body:JSON.stringify ({Name, IdType, IdNo, FlatNo, Block, InTime, GateNo, VehicleNo})
    //     });
    //     result = await result.json();
    //     if(result){
    //         console.warn("Data Added")   
    //     }
    // }
    const saveData = async () => {
        try {
            const url = "http://localhost:8080/v1/visitor";
            let result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Name, IdType, IdNo, FlatNo, Block, InTime, GateNo, VehicleNo })
            });
    
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
    
            result = await result.json();
    
            if (result) {
                console.warn("Data Added");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
  return (
    <SafeAreaView>
    <View>
    <ScrollView
        style={{
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: "Poppins-SemiBold",
            color: "black",
            marginTop: 50,
          }}
        >
          Visitor Page
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Poppins-SemiBold",
            color: "gray",
          }}
        >
          {/* Search and Select Your Society listed on {"\n"}PrismGate */}
        </Text>
        <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Visitor Name
            </Text>
            <TextInput
              value={Name}
              onChangeText={(f) => SetName(f)}
              placeholder="John Doe"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Id Type
            </Text>
            <TextInput
              value={IdType}
              onChangeText={(f) => SetIdType(f)}
              placeholder="Driving License"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Id No.
            </Text>
            <TextInput
              value={IdNo}
              onChangeText={(f) => SetIdNo(f)}
              placeholder="DL123456"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Flat No.
            </Text>
            <TextInput
              value={FlatNo}
              onChangeText={(f) => SetFlatNo(f)}
              placeholder="A101"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Block
            </Text>
            <TextInput
              value={Block}
              onChangeText={(f) => SetBlock(f)}
              placeholder="Block A"
      
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            
            >
              In Time
            </Text>
            <TextInput
              value={InTime}
              onChangeText={(f) => SetInTime(f)}
              placeholder="2023-12-04 15:34:24"
              editable={false}
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Gate No.
            </Text>
            <TextInput
              value={GateNo}
              onChangeText={(f) => SetGateNo(f)}
              placeholder="1"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                color: "gray",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Vehicle No.
            </Text>
            <TextInput
              value={VehicleNo}
              onChangeText={(f) => SetVehicleNo(f)}
              placeholder="XYZ123"
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "black",
                borderBottomWidth: 1,
              }}
            />
            <TouchableOpacity
          onPress={saveData}
          style={{
            marginTop: 40,
            marginBottom: 10,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "black",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontFamily: "Poppins-Medium",
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
            </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default GateDetails