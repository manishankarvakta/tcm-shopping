import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import Routes from "../../Utility/Routes";

export default function Settings({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.NOTIFICATIONS_SETTINGS)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>
              {" "}
              <Icon
                type="Ionicons"
                name="notifications"
                size={20}
                paddingRight={10}
                color="#C38FEE"
              />{" "}
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  justifyContent: "center",
                }}
              >
                Notification Settings
              </Text>
            </Text>
          </View>

          <Icon
            type="font-awesome"
            name="angle-right"
            size={28}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.CHANGE_PASSWORD)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>
              {" "}
              <Icon
                type="antdesign"
                name="lock1"
                size={20}
                paddingRight={10}
                color="#C38FEE"
              />{" "}
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  justifyContent: "center",
                }}
              >
                Change Password
              </Text>
            </Text>
          </View>

          <Icon
            type="font-awesome"
            name="angle-right"
            size={28}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.DELETE_ACCOUNT)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>
              {" "}
              <Icon
                type="font-awesome-5"
                name="user-circle"
                size={20}
                paddingRight={10}
                color="#C38FEE"
              />{" "}
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  justifyContent: "center",
                }}
              >
                Delete my Account
              </Text>
            </Text>
          </View>

          <Icon
            type="font-awesome"
            name="angle-right"
            size={28}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
