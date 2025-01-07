import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingItem = ({ icon, title, subtitle }) => (
  <TouchableOpacity style={styles.settingItem}>
    <Icon name={icon} size={24} color="#128C7E" style={styles.settingIcon} />
    <View style={styles.settingInfo}>
      <Text style={styles.settingTitle}>{title}</Text>
      {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
    </View>
    <Icon name="chevron-right" size={24} color="#999" />
  </TouchableOpacity>
);

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SettingItem icon="account-circle" title="Account" subtitle="Privacy, security, change number" />
      <SettingItem icon="chat" title="Chats" subtitle="Theme, wallpapers, chat history" />
      <SettingItem icon="notifications" title="Notifications" subtitle="Message, group & call tones" />
      <SettingItem icon="data-usage" title="Storage and data" subtitle="Network usage, auto-download" />
      <SettingItem icon="help-outline" title="Help" subtitle="FAQ, contact us, privacy policy" />
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteButtonText}>Invite a friend</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingIcon: {
    marginRight: 16,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  inviteButton: {
    margin: 16,
    backgroundColor: '#128C7E',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  inviteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;