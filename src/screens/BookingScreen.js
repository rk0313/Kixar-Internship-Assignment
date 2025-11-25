import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Sun, Moon, Sunrise, Sunset, Minus, Plus, ChevronRight, CheckCircle2, Circle } from 'lucide-react-native';
import { useBooking } from '../context/BookingContext';

const BookingScreen = ({ navigation, route }) => {
  const { addBooking } = useBooking();
  const turfData = route.params?.turfData || { name: 'Unknown Turf', price: 0 };

  const [selectedDate, setSelectedDate] = useState(24);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('Noon');
  const [selectedCourt, setSelectedCourt] = useState('Court B');
  const [playerCount, setPlayerCount] = useState(5);

  const isValid = selectedDate && selectedTimeFilter && selectedCourt;
  const totalPrice = turfData.price || 1200;

  const handleNext = () => {
    if (!isValid) return;

    const newBooking = {
      turfName: turfData.name,
      date: `Nov ${selectedDate}, 2025`,
      time: "12:00 PM - 04:00 PM",
      court: selectedCourt,
      players: playerCount,
      price: totalPrice
    };

    addBooking(newBooking);

    Alert.alert("Success", "Booking Confirmed!", [
        { text: "View Bookings", onPress: () => navigation.navigate('MyBookings') }
    ]);
  };

  const DateCard = ({ day, date, isActive }) => (
    <TouchableOpacity onPress={() => setSelectedDate(date)} style={[styles.dateCard, isActive && styles.activeDateCard]}>
      <Text style={[styles.dayText, isActive && styles.activeText]}>{day}</Text>
      <Text style={[styles.dateText, isActive && styles.activeText]}>{date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: 4}}>
            <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{turfData.name}</Text>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom: 120, paddingHorizontal: 16}}>
         {/* Date Section */}
         <View style={{marginTop: 20}}>
            <Text style={styles.sectionTitle}>Select Date</Text>
            <Text style={{color: '#2dd4bf', fontWeight: 'bold', marginBottom: 10}}>November 2025</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {['MON','TUE','WED','THU','FRI'].map((d, i) => (
                    <DateCard key={i} day={d} date={24+i} isActive={selectedDate === (24+i)} />
                ))}
            </ScrollView>
         </View>

         {/* Time Section */}
         <View style={{marginTop: 20}}>
            <Text style={styles.sectionTitle}>Select Time</Text>
            <View style={styles.rowWrap}>
                {['Morning', 'Noon', 'Evening', 'Twilight'].map(t => (
                    <TouchableOpacity key={t} onPress={() => setSelectedTimeFilter(t)} style={[styles.timeChip, selectedTimeFilter === t && styles.activeTimeChip]}>
                        <Text style={selectedTimeFilter === t ? styles.activeText : styles.inactiveText}>{t}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={{textAlign:'center', marginTop:15, color:'#888', fontSize: 12}}>12:00 PM - 04:00 PM</Text>
            <View style={{height: 4, backgroundColor: '#EEE', borderRadius: 2, marginTop: 5}}>
                <View style={{width: '30%', height: '100%', backgroundColor: '#2dd4bf', marginLeft: '35%'}} />
            </View>
         </View>

         {/* Court Section */}
         <View style={{marginTop: 20}}>
            <Text style={styles.sectionTitle}>Select Court</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
                {['Court A', 'Court B'].map(c => (
                    <TouchableOpacity key={c} onPress={() => setSelectedCourt(c)} style={[styles.courtCard, selectedCourt === c && styles.activeCourtCard]}>
                        {selectedCourt === c ? <CheckCircle2 color="#2dd4bf" size={20}/> : <Circle color="#DDD" size={20}/>}
                        <Text style={{marginLeft: 8, color: selectedCourt === c ? '#0f766e' : '#888', fontWeight: '500'}}>{c}</Text>
                    </TouchableOpacity>
                ))}
            </View>
         </View>

         {/* Players Section */}
         <View style={{marginTop: 20}}>
            <Text style={styles.sectionTitle}>Players</Text>
            <View style={styles.counterRow}>
                <TouchableOpacity onPress={()=>setPlayerCount(Math.max(1, playerCount-1))} style={styles.countBtn}><Minus size={20} color="#333"/></TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{playerCount} Players</Text>
                <TouchableOpacity onPress={()=>setPlayerCount(playerCount+1)} style={styles.countBtn}><Plus size={20} color="#333"/></TouchableOpacity>
            </View>
         </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
         <View>
            <Text style={styles.price}>₹ {totalPrice}</Text>
            <Text style={styles.subPrice}>| ₹{Math.round(totalPrice/playerCount)} per player</Text>
         </View>
         <TouchableOpacity 
            style={[styles.nextBtn, !isValid && {backgroundColor: '#CCC'}]}
            onPress={handleNext}
            disabled={!isValid}
         >
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>Pay & Book</Text>
            <ChevronRight color="#FFF" size={20} />
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#FFF' },
    headerTitle: { fontSize: 18, fontWeight: '700', marginLeft: 10 },
    sectionTitle: { fontSize: 14, fontWeight: '700', marginBottom: 10 },
    dateCard: { width: 50, height: 60, borderRadius: 10, borderWidth: 1, borderColor: '#EEE', alignItems: 'center', justifyContent: 'center', marginRight: 10, backgroundColor: '#FFF' },
    activeDateCard: { backgroundColor: '#2dd4bf', borderColor: '#2dd4bf' },
    dayText: { fontSize: 10, fontWeight: '700', color: '#AAA' },
    dateText: { fontSize: 18, fontWeight: '700', color: '#333' },
    activeText: { color: '#FFF' },
    rowWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    timeChip: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, borderWidth: 1, borderColor: '#EEE', backgroundColor: '#FFF', width: '47%', alignItems: 'center' },
    activeTimeChip: { backgroundColor: '#111', borderColor: '#111' },
    inactiveText: { color: '#333', fontWeight: '500' },
    courtCard: { flex: 1, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#EEE', backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center' },
    activeCourtCard: { borderColor: '#2dd4bf', backgroundColor: '#F0FDFA' },
    counterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E5E7EB', padding: 5, borderRadius: 8 },
    countBtn: { width: 40, height: 40, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
    footer: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#FFF', padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: '#EEE', shadowColor: "#000", shadowOpacity: 0.1, elevation: 10 },
    price: { fontSize: 18, fontWeight: 'bold' },
    subPrice: { fontSize: 12, color: '#888' },
    nextBtn: { backgroundColor: '#2dd4bf', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 }
});

export default BookingScreen;