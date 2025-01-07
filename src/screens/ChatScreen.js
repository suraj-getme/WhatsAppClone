import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const chats = [
  { id: '1', name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM' },
  { id: '2', name: 'Jane Smith', lastMessage: 'See you later!', timestamp: 'Yesterday' },
  { id: '3', name: 'Bob Johnson', lastMessage: 'Can we meet tomorrow?', timestamp: '2 days ago' },
];

const ChatItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.chatItem} onPress={onPress}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{item.name[0]}</Text>
    </View>
    <View style={styles.chatInfo}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </View>
    <Text style={styles.timestamp}>{item.timestamp}</Text>
  </TouchableOpacity>
);

const ChatsScreen = () => {
  const navigation = useNavigation();

  const handleChatPress = (chat) => {
    navigation.navigate('ChatDetail', { id: chat.id, name: chat.name });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatItem item={item} onPress={() => handleChatPress(item)} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Icon name="chat" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatItem: {
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
  chatInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: 'gray',
  },
  timestamp: {
    fontSize: 12,
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

export default ChatsScreen;