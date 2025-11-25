import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useBooking } from '../context/BookingContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react-native';

const MyBookingsScreen = ({ navigation }) => {
  const { bookings } = useBooking();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.turfName}>{item.turfName}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      
      <View style={styles.row}>
        <Calendar size={14} color="#666" />
        <Text style={styles.infoText}>{item.date}</Text>
      </View>
      
      <View style={styles.row}>
        <Clock size={14} color="#666" />
        <Text style={styles.infoText}>{item.time}</Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.badge}>{item.court}</Text>
        <View style={styles.row}>
            <User size={14} color="#666" />
            <Text style={styles.infoText}>{item.players} Players</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight: 10}}>
           <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>My Bookings</Text>
      </View>
      
      {bookings.length === 0 ? (
        <View style={styles.emptyState}>
            <Text style={{color: '#888', fontSize: 16}}>No bookings yet.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TurfDetails')} style={{marginTop: 10}}>
                <Text style={{color: '#2dd4bf', fontWeight: 'bold'}}>Make a Booking</Text>
            </TouchableOpacity>
        </View>
      ) : (
        <FlatList 
          data={bookings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  headerRow: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#FFF' },
  header: { fontSize: 20, fontWeight: 'bold' },
  emptyState: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 12, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  turfName: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  price: { fontWeight: 'bold', color: '#2dd4bf' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  infoText: { color: '#555', fontSize: 13 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingTop: 8 },
  badge: { backgroundColor: '#F0FDFA', color: '#0f766e', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, fontSize: 12, fontWeight: '600' }
});

export default MyBookingsScreen;