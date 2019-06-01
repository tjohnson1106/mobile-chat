import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

class Input extends Component {
  state = {
    phone: "",
    name: ""
  };

  handleChange = (key) => {
    this.setState({
      [key]: val
    });
  };

  submitForm = () => {
    alert(this.state.phone + "/n" + this.state.name);
  };

  render() {
    return (
      <View style={styles.root}>
        <TextInput
          placeholder="Phone number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange("phone")}
        />
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange("name")}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%"
  }
});

export default Input;
