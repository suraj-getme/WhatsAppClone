import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

const conversations = [
  {id: '1', name: 'Alice', lastMessage: 'Hey, how are you?', time: '10:30 AM'},
  {
    id: '2',
    name: 'Bob',
    lastMessage: 'Can we meet tomorrow?',
    time: 'Yesterday',
  },
  {
    id: '3',
    name: 'Charlie',
    lastMessage: 'Thanks for your help!',
    time: 'Tuesday',
  },
];

const messages = [
  {id: '1', sender: 'Alice', content: 'Hi there!', time: '10:30 AM'},
  {id: '2', sender: 'You', content: 'Hello! How are you?', time: '10:31 AM'},
  {
    id: '3',
    sender: 'Alice',
    content: "I'm good, thanks! How about you?",
    time: '10:32 AM',
  },
  {
    id: '4',
    sender: 'You',
    content: "I'm doing well too. Any plans for the weekend?",
    time: '10:33 AM',
  },
];

export default function TempScreen() {
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState('');

  const renderConversationItem = ({item}) => (
    <TouchableOpacity
      style={styles.conversationItem}
      onPress={() => setCurrentChat(item.name)}>
      <Image
        style={styles.avatar}
        source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}}
      />
      <View style={styles.conversationInfo}>
        <View style={styles.conversationHeader}>
          <Text style={styles.conversationName}>{item.name}</Text>
          <Text style={styles.conversationTime}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderMessageItem = ({item}) => (
    <View
      style={[
        styles.messageItem,
        item.sender === 'You' ? styles.sentMessage : styles.receivedMessage,
      ]}>
      <Text style={styles.messageContent}>{item.content}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {!currentChat ? (
        <View style={styles.conversationList}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>WhatsApp</Text>
          </View>
          <FlatList
            data={conversations}
            renderItem={renderConversationItem}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={styles.chatScreen}>
          <View style={styles.chatHeader}>
            <TouchableOpacity onPress={() => setCurrentChat(null)}>
              <Text style={styles.backButton}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.chatHeaderTitle}>{currentChat}</Text>
          </View>
          <FlatList
            data={messages}
            renderItem={renderMessageItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.messageList}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Type a message"
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conversationList: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  conversationInfo: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conversationName: {
    fontWeight: 'bold',
  },
  conversationTime: {
    fontSize: 12,
    color: '#888',
  },
  lastMessage: {
    color: '#555',
    marginTop: 5,
  },
  chatScreen: {
    flex: 1,
  },
  chatHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  chatHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageList: {
    paddingVertical: 10,
  },
  messageItem: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  messageContent: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#128C7E',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
