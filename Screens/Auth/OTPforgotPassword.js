import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const OTPforgotPassword = ({ navigation }) => {
  const [otp, setOTP] = useState(""); // State for OTP input

  const handleVerifyOTP = () => {
    // Add logic here to verify the entered OTP
    // You can compare it with the OTP sent to the user
    // If OTP is correct, navigate to the password reset screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.description}>
        Please enter the OTP sent to your phone number to reset your password.
      </Text>

      <KeyboardAvoidingView behavior="position">
        {/* OTP input fields */}
        <View style={styles.otpContainer}>
          {[1, 2, 3, 4].map((index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              placeholder="*"
              value={otp[index - 1]}
              onChangeText={(text) => {
                // Allow only single digits
                if (/^\d*$/.test(text) && text.length <= 1) {
                  let updatedOTP = otp;
                  updatedOTP =
                    updatedOTP.substr(0, index - 1) +
                    text +
                    updatedOTP.substr(index);
                  setOTP(updatedOTP);

                  // Focus next input if available
                  if (index < 4 && text.length === 1) {
                    const nextInput = index + 1;
                    const nextInputRef = `otpInput${nextInput}`;
                    if (this[nextInputRef]) {
                      this[nextInputRef].focus();
                    }
                  }
                }
              }}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 1}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#12852C",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#5C6B73",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "tomato",
    padding: 10,
    width: 200,
    alignSelf: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default OTPforgotPassword;
