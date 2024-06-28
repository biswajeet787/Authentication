import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

const Send_Money = () => {
  const ProfileList = [
    {id: 1, name: 'Silan', image: require('../../Images/profile5.png')},
    {id: 2, name: 'Halli', image: require('../../Images/profile3.png')},
    {id: 3, name: 'Anwesh', image: require('../../Images/profile2.png')},
    {id: 4, name: 'Sradha', image: require('../../Images/profile4.png')},
    {id: 5, name: 'Jack', image: require('../../Images/profile6.png')},
    {id: 6, name: 'Jone', image: require('../../Images/profile7.png')},
    {id: 7, name: 'Singh', image: require('../../Images/profile2.png')},
  ];

  const ContactList = [
    {
      id: 1,
      name: 'Sinchan',
      image: require('../../Images/Contact_profile1.png'),
      position: 'Medical Assistant',
      Icon: 'checkcircleo',
    },
    {
      id: 2,
      name: 'Head',
      image: require('../../Images/Contact_profile2.png'),
      position: 'President of Sales',
      Icon: 'checkcircleo',
    },
    {
      id: 3,
      name: 'Perry',
      image: require('../../Images/profile5.png'),
      position: 'Medical Assistant',
      Icon: 'checkcircleo',
    },
    {
      id: 4,
      name: 'Temba',
      image: require('../../Images/Contact_profile3.png'),
      position: 'Software Engineer',
      Icon: 'checkcircleo',
    },
    {
      id: 5,
      name: 'Sarukhan',
      image: require('../../Images/Contact_profile4.png'),
      position: 'Pilot',
      Icon: 'checkcircleo',
    },
    {
      id: 6,
      name: 'Harry',
      image: require('../../Images/Contact_profile5.png'),
      position: 'President of Sales',
      Icon: 'checkcircleo',
    },
    {
      id: 7,
      name: 'Pooran',
      image: require('../../Images/Contact_profile3.png'),
      position: 'Medical Assistant',
      Icon: 'checkcircleo',
    },
    {
      id: 8,
      name: 'Sarukhan',
      image: require('../../Images/Contact_profile4.png'),
      position: 'Software Engineer',
      Icon: 'checkcircleo',
    },
    {
      id: 9,
      name: 'Harry',
      image: require('../../Images/Contact_profile5.png'),
      position: 'President of Sales',
      Icon: 'checkcircleo',
    },
    {
      id: 10,
      name: 'Pooran',
      image: require('../../Images/Contact_profile3.png'),
      position: 'Medical Assistant',
      Icon: 'checkcircleo',
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const handlePress = id => {
    setSelectedId(id);
  };

  const List = ({id, name, image, position, isSelected, onSelect}) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          Styles.ContactContainer,
          {backgroundColor: isSelected ? '#fff' : '#F6F3EE'},
        ]}>
        <View style={{flexDirection: 'row', flex: 10, alignItems: 'center'}}>
          <Image
            source={image}
            style={{height: 56, width: 56, borderRadius: 33}}
          />
          <View style={{paddingLeft: 10}}>
            <Text style={[Styles.Text, {fontSize: 18}]}>{name}</Text>
            <Text>{position}</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Icon
            name={isSelected ? 'checkcircle' : 'checkcircleo'}
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E9E4DA'}}>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={Styles.Header}>
            <TouchableHighlight style={Styles.BackButton}>
              <Icon name="arrowleft" size={25} color="#050505" />
            </TouchableHighlight>
            <Text style={Styles.Text}>Send Money</Text>
            <TouchableHighlight style={Styles.BackButton}>
              <Icon1 name="dots-vertical" size={25} color="#050505" />
            </TouchableHighlight>
          </View>

          {/* Search Section Start */}
          <View style={Styles.SearchSection}>
            <Icon
              name="search1"
              size={25}
              color="#727272"
              style={Styles.SearchIcon}
            />
            <TextInput
              style={Styles.Search}
              placeholder="Search"
              placeholderTextColor="black"
            />
          </View>
          {/* Search Section End */}

          {/* Recent Section Start */}
          <View style={Styles.RecentSection}>
            <Text style={[Styles.Text, {fontSize: 24}]}>Recent</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {ProfileList.map(item => (
                <View key={item.id} style={Styles.Profile}>
                  <Image source={item.image} style={Styles.ProfileImage} />
                  <Text style={Styles.ProfileName}>{item.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          {/* Recent Section End */}

          {/* Contact Section Start */}
          <View style={[Styles.RecentSection,{flex:5}]}>
            <Text style={[Styles.Text, {fontSize: 24}]}>Contact</Text>
            <FlatList
              data={ContactList}
              renderItem={({item}) => (
                <List
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  position={item.position}
                  isSelected={item.id === selectedId}
                  onSelect={handlePress}
                />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          {/* Contact Section End */}
        </View>
      </ScrollView>
      <View style={Styles.Select}>
        <View style={Styles.SelectIcon}>
          <Icon2 name="cross" size={35} color="#fff" />
        </View>
        <View style={[Styles.SelectIcon, {backgroundColor: '#0D0D0C'}]}>
          <Icon name="check" size={35} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Send_Money;

const Styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  BackButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#050505',
    fontSize: 25,
    fontWeight: '700',
  },
  SearchSection: {
    flexDirection: 'row',
    backgroundColor: '#F5F2ED',
    alignItems: 'center',
    height: 50,
    margin: 15,
    borderRadius: 25,
    flex:1
  },
  SearchIcon: {
    paddingLeft: 20,
  },
  Search: {
    paddingLeft: 10,
    fontSize: 18,
    flex: 1,
    color: 'black',
  },
  RecentSection: {
    margin: 15,
    flex:2
  },
  Profile: {
    height: 150,
    width: 120,
    borderRadius: 40,
    backgroundColor: '#F5F2ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
  },
  ProfileImage: {
    height: 100,
    width: 100,
    borderRadius: 40,
  },
  ProfileName: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  ContactContainer: {
    height: 80,
    flex: 1,
    borderRadius: 40,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#F5F2EE',
    marginTop: 15,
  },
  Select: {
    height: 80,
    width: 200,
    backgroundColor: '#D6D2CD',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
  SelectIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#93918E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
