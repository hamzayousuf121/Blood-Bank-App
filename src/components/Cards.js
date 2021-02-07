import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

export default function Cards({users}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginBottom: 15}}>
          {users.map((u, i) => (
            <Card key={i}>
              <Card.Title>Blood Group {u.blood_group}</Card.Title>
              <Card.Divider />
              <View style={{flex: 1}}>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Name</ListItem.Title>
                    <ListItem.Title>{u.full_name}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Gender</ListItem.Title>
                    <ListItem.Title>{u.gender}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Phone No</ListItem.Title>
                    <ListItem.Title>{u.phone_no}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Location</ListItem.Title>
                    <ListItem.Title>{u.location}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
