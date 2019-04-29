import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../stores/authStore";
class Profile extends Component {
  state = {
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    image: "",
    area: "",
    email: ""
  };

  profileDetails = async () => {
    if (authStore.user) {
      await authStore.getProfile();
      if (authStore.profile) {
        this.setState({
          first_name: authStore.profile.first_name,
          last_name: authStore.profile.last_name,
          age: `${authStore.profile.userprofile.age}`,
          gender: authStore.profile.userprofile.gender,
          image: authStore.profile.userprofile.image,
          area: authStore.profile.userprofile.area,
          email: authStore.profile.email
        });
      }
    }
  };

  componentDidMount() {
    this.profileDetails();
  }

  handleProfile = () => {
    if (authStore.user) {
      const updateData = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        userprofile: {
          age: this.state.age,
          gender: this.state.gender,
          image: this.state.image,
          area: this.state.area
        }
      };
      console.log(updateData);
      authStore.updateProfile(updateData, this.props.navigation);
    }
  };

  render() {
    return (
      <Form>
        <Item>
          <Text>First Name:</Text>
          <Input
            placeholder="firstname"
            autoCapitalize="none"
            value={this.state.first_name}
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item>
          <Text>Last Name:</Text>
          <Input
            placeholder="lastname"
            autoCapitalize="none"
            value={this.state.last_name}
            onChangeText={last_name => this.setState({ last_name })}
          />
        </Item>
        <Item>
          <Text>Age:</Text>
          <Input
            placeholder="age"
            autoCapitalize="none"
            value={this.state.age}
            onChangeText={age => this.setState({ age })}
          />
        </Item>

        <Item>
          <Text>Gender:</Text>
          <Input
            placeholder="gender"
            autoCapitalize="none"
            value={this.state.gender}
            onChangeText={gender => this.setState({ gender })}
          />
        </Item>

        <Item>
          <Text>Image:</Text>
          <Input
            placeholder="image"
            autoCapitalize="none"
            value={this.state.image}
            onChangeText={image => this.setState({ image })}
          />
        </Item>
        <Item>
          <Text>Area:</Text>
          <Input
            placeholder="area"
            autoCapitalize="none"
            value={this.state.area}
            onChangeText={area => this.setState({ area })}
          />
        </Item>
        <Item last>
          <Text>Email:</Text>
          <Input
            placeholder="email"
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </Item>

        <Button full success onPress={this.handleProfile}>
          <Text>Update</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Profile);
