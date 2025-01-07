import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const calls = [
  { id: '1', name: 'John Doe', type: 'audio', timestamp: '10:30 AM', incoming: true },
  { id: '2', name: 'Jane Smith', type: 'video', timestamp: 'Yesterday', incoming: false },
  { id: '3', name: 'Bob Johnson', type: 'audio', timestamp: '2 days ago', incoming: true },
];

const CallItem = ({ item }) => (
  <TouchableOpacity style={styles.callItem}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{item.name[0]}</Text>
    </View>
    <View style={styles.callInfo}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.callDetails}>
        <Icon
          name={item.incoming ? 'call-received' : 'call-made'}
          size={16}
          color={item.incoming ? 'red' : 'green'}
        />
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
    <Icon
      name={item.type === 'audio' ? 'call' : 'videocam'}
      size={24}
      color="#128C7E"
    />
  </TouchableOpacity>
);

const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={calls}
        renderItem={({ item }) => <CallItem item={item} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Icon name="add-call" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  callItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  callInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

export default CallsScreen;