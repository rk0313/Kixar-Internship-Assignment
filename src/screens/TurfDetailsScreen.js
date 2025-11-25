import React from 'react';
import { 
  View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions, StatusBar 
} from 'react-native';
import { MapPin, Phone, Share2, Heart, Star, Info, ChevronRight, User } from 'lucide-react-native';
import { TURF_DATA } from '../data/turfData';

const TurfDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* --- BANNER IMAGE --- */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: TURF_DATA.images[0] }} style={styles.bannerImage} />
          <View style={styles.headerOverlay}>
            <TouchableOpacity onPress={() => console.log('Info')} style={styles.iconButton}>
               <Info size={24} color="#FFF" /> 
            </TouchableOpacity>
            <View style={styles.headerRightIcons}>
              <TouchableOpacity style={styles.iconButton}><Heart size={24} color="#FFF" /></TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}><Share2 size={24} color="#FFF" /></TouchableOpacity>
            </View>
          </View>
        </View>

        {/* --- DETAILS SECTION --- */}
        <View style={styles.contentContainer}>
          <View style={styles.titleRow}>
             <Text style={styles.title}>{TURF_DATA.name}</Text>
             <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{TURF_DATA.rating}</Text>
                <Star size={12} color="#F59E0B" fill="#F59E0B" style={{ marginHorizontal: 4 }}/>
                <Text style={styles.ratingCount}>| {TURF_DATA.ratingCount} Ratings</Text>
             </View>
          </View>

          {/* Address */}
          <View style={styles.locationRow}>
            <MapPin size={18} color="#666" style={{ marginTop: 2 }} />
            <Text style={styles.addressText}>{TURF_DATA.address}</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.directionBtn}>
               <Text style={styles.directionText}>Get Direction</Text>
               <ChevronRight size={16} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.callBtn}>
               <Phone size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>About '{TURF_DATA.name}'</Text>
            <Text style={styles.descriptionText}>
              {TURF_DATA.description} <Text style={{color: '#2dd4bf', fontWeight: 'bold'}}>read more</Text>
            </Text>
          </View>

          {/* Timings */}
          <View style={styles.section}>
             <Text style={styles.sectionHeader}>Timings Information</Text>
             <View style={styles.timingCard}>
                <Text style={styles.timingDay}>{TURF_DATA.timings?.day || 'Monday'}</Text>
                <Text style={styles.timingHours}>{TURF_DATA.timings?.time || '06:00 PM - 07:00 PM'}</Text>
             </View>
          </View>

          {/* Facilities (FIXED: Handling objects correctly) */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Facilities</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.amenitiesRow}>
              {TURF_DATA.amenities.map((item, index) => (
                <View key={index} style={styles.amenityChip}>
                   {/* item is an object {name: '...', icon: '...'}, so we must access item.name */}
                   <Text style={styles.amenityText}>{item.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

           {/* Map Preview */}
           <View style={styles.section}>
             <Text style={styles.sectionHeader}>Map View</Text>
             <View style={styles.mapPlaceholder}>
                <Image 
                  source={{ uri: 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg' }} 
                  style={{ width: '100%', height: '100%', opacity: 0.8 }}
                />
                <View style={styles.mapOverlayBtn}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Get Direction</Text>
                </View>
             </View>
           </View>
           
           {/* Reviews Section */}
           <View style={styles.section}>
             <Text style={styles.sectionHeader}>Ratings & Reviews</Text>
             {TURF_DATA.reviews.map((review) => (
                 <View key={review.id} style={styles.reviewCard}>
                     <View style={styles.reviewHeader}>
                         <View style={{flexDirection:'row', alignItems:'center'}}>
                             <View style={styles.avatar}><User size={16} color="#FFF"/></View>
                             <Text style={styles.reviewUser}>{review.user}</Text>
                         </View>
                         <View style={styles.ratingPill}><Text style={{fontSize:10, fontWeight:'bold'}}>{review.rating} ★</Text></View>
                     </View>
                     <Text style={styles.reviewText}>{review.text}</Text>
                     <Text style={styles.reviewDate}>{review.date}</Text>
                 </View>
             ))}
           </View>
        </View>
      </ScrollView>

      {/* --- STICKY FOOTER --- */}
      <View style={styles.footer}>
         <View>
            <Text style={styles.price}>₹ {TURF_DATA.price} <Text style={styles.perHour}>/ hour</Text></Text>
            <Text style={styles.subPrice}>per player cost in next step</Text>
         </View>
         <TouchableOpacity 
            style={styles.bookBtn}
            onPress={() => navigation.navigate('Booking', { turfData: TURF_DATA })}
         >
            <Text style={styles.bookBtnText}>Book Now</Text>
            <ChevronRight size={18} color="#FFF" />
         </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  imageContainer: { height: 280, width: '100%', position: 'relative' },
  bannerImage: { width: '100%', height: '100%' },
  headerOverlay: { position: 'absolute', top: 50, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 },
  headerRightIcons: { flexDirection: 'row', gap: 15 },
  contentContainer: { marginTop: -25, backgroundColor: '#FFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#111' },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9FAFB', padding: 6, borderRadius: 8, borderWidth: 1, borderColor: '#EEE' },
  ratingText: { fontWeight: 'bold', fontSize: 12 },
  ratingCount: { fontSize: 10, color: '#666', marginLeft: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20 },
  addressText: { color: '#666', marginLeft: 8, flex: 1, fontSize: 13, lineHeight: 18 },
  actionRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  directionBtn: { flex: 1, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 50, paddingVertical: 12, alignItems: 'center', gap: 5 },
  directionText: { fontWeight: '600', color: '#374151' },
  callBtn: { width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', justifyContent: 'center' },
  section: { marginBottom: 24 },
  sectionHeader: { fontSize: 16, fontWeight: '700', marginBottom: 12, color: '#111' },
  descriptionText: { color: '#666', lineHeight: 20, fontSize: 13 },
  timingCard: { backgroundColor: '#F9FAFB', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' },
  timingDay: { fontWeight: '600' },
  timingHours: { color: '#666' },
  amenitiesRow: { flexDirection: 'row' },
  amenityChip: { backgroundColor: '#F3F4F6', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, marginRight: 10 },
  amenityText: { color: '#4B5563', fontSize: 12, fontWeight: '500' },
  mapPlaceholder: { height: 150, width: '100%', borderRadius: 12, overflow: 'hidden', position: 'relative', backgroundColor: '#EEE' },
  mapOverlayBtn: { position: 'absolute', bottom: 10, left: '25%', right: '25%', backgroundColor: '#111', padding: 10, borderRadius: 8, alignItems: 'center' },
  
  // Reviews Styles
  reviewCard: { marginBottom: 15, padding: 12, borderRadius: 8, backgroundColor: '#FAFAFA' },
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  avatar: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  reviewUser: { fontWeight: 'bold', fontSize: 12 },
  reviewText: { fontSize: 12, color: '#555', marginBottom: 4 },
  reviewDate: { fontSize: 10, color: '#999' },
  ratingPill: { backgroundColor: '#FFFAE5', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },

  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF', padding: 20, borderTopWidth: 1, borderTopColor: '#F3F4F6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 20, fontWeight: 'bold' },
  perHour: { fontSize: 14, fontWeight: '400', color: '#666' },
  subPrice: { fontSize: 10, color: '#9CA3AF' },
  bookBtn: { backgroundColor: '#2dd4bf', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 12, flexDirection: 'row', alignItems: 'center', gap: 5 },
  bookBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});

export default TurfDetailsScreen;