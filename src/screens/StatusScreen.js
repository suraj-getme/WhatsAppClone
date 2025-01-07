import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const statuses = [
  { id: '1', name: 'My Status', timestamp: 'Tap to add status update' },
  { id: '2', name: 'John Doe', timestamp: '2 minutes ago' },
  { id: '3', name: 'Jane Smith', timestamp: '23 minutes ago' },
  { id: '4', name: 'Bob Johnson', timestamp: '49 minutes ago' },
];

const StatusItem = ({ item }) => (
  <TouchableOpacity style={styles.statusItem}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{item.name[1]}</Text>
    </View>
    <View style={styles.statusInfo}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  </TouchableOpacity>
);

const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={statuses}
        renderItem={({ item }) => <StatusItem item={item} />}
        keyExtractor={item => item.id}
      />
      {/* <TouchableOpacity style={styles.fab}>
        <Icon name="camera-alt" size={24} color="white" />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
  statusInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 14,
    color: 'gray',
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

export default StatusScreen;