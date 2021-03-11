import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import {  Header, Left, Icon, Center, Right, Body, Item, Input, } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel, {Pagination,  ParallaxImage,} from 'react-native-snap-carousel';
import { Container, Tab, Tabs } from 'native-base';
import Brownies from './src/ScreenComponents/Brownies'

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
];

const data= [
  {
    title:'Brownies',
    logo: 'gm',
  },
  {
    title:'Muffins',
    logo: 'gm',

  },
  {
    title:'Cookies',
    logo: 'gm',

  },
  {
    title:'Vape',
    logo: 'gm',

  },
  {
    title:'Weed',
    logo: 'gm',

  },
  {
    title:'Cake',
    logo: 'gm',

  }
]

const data2= [
  {
    image:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   title: 'Product Title',
   Shipping: 'free shipping',
   Price:'$24.00',
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
   title: 'Product Title',
   Shipping: 'free shipping',
   Price:'$24.00',
  },
  {
    image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
   title: 'Product Title',
   Shipping: 'free shipping',
   Price:'$24.00',
  },
  {
    image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
   title: 'Product Title',
   Shipping: 'free shipping',
   Price:'$24.00',
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
   title: 'Product Title',
   Shipping: 'free shipping',
   Price:'$24.00',
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
   title: 'Product Title',
   Shipping: 'free shipping',
   Price:'$24.00',
  },
]

const { width: screenWidth } = Dimensions.get("window");

const App= () => {
  
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);


const renderItem = ({ item, index }, parallaxProps) => {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: item.illustration }}
        style={styles.image}      
      />
    </View>
  );
};
useEffect(() => {
  setEntries(ENTRIES1);
}, []);

  return(
    <ScrollView>
      <Header style={{backgroundColor:'transparent', elevation:0}}>
              <Left style={{flex:0.3}}>
                  <Icon name='menu' />
              </Left>
              <Body style={{width:'80%', alignItems:'center'}}>
                  <Image source={require('./issets/logopluss.png')} />

              </Body>
              <Right style={{flex:0.3}}>
                  <Icon name="cart"  />
              </Right>

      </Header>
          <View style={styles.searchbar}>
                <Item>
                    <Icon name="ios-search" style={{padding: 10,}} />
                      <Input placeholder="Search" />
                    </Item>
           </View>
            {/* Carousel below Header */}

           <View style={{alignItems:'center'}}>
                <Carousel
                  layout={"default"}
                  ref={carouselRef}
                  sliderWidth={wp('94%')}
                  sliderHeight={screenWidth}
                  itemWidth={wp('94%')}
                  data={entries}
                  renderItem={renderItem}
                  onSnapToItem={(index) => setActiveSlide(index)}
                  
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={activeSlide}
                  containerStyle={{ backgroundColor: "transparent" }}
                  dotContainerStyle={{
                    marginHorizontal: 2,
                    
                  }}
                  dotColor={"green"}
                  dotStyle={{
                    borderRadius: 3,
                  
                    backgroundColor: "grey",
                  }}
                  inactiveDotStyle={{
                    backgroundColor: "silver",
                  }}
                  inactiveDotOpacity={0.6}
                  inactiveDotScale={1}
                />
            </View>
              {/* FlatListtt */}
            <View style={{alignItems:'center'}}>
              <FlatList 
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1%')}}> 
                     <View style={styles.logoimages}><Image source={require('./issets/facebook.png')} /></View>
                     <View style={{alignItems:'center'}}><Text>{item.title}</Text></View>
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>
              {/* After FlatList */}

            <View style={{flexDirection:'row'}}>
              <View><Text style={{fontWeight:'bold'}}>Recent View</Text></View>
              <View><Text>View All</Text></View>
            </View>

            {/* FlatList 2 */}


            <View style={{alignItems:'center', marginHorizontal:wp('2%')}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View>
                       <Image source={{uri: item.image}} resizeMode='stretch' style={styles.flatimages2} />
                      </View>
                     <View><Text style={{fontWeight:'bold'}}>{item.title}</Text></View>
                     <View><Text style={{color:'lightgrey'}}>{item.Shipping}</Text></View>
                     <View><Text style={{color:'grey' , fontWeight:'bold'}}>{item.Price}</Text></View>
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>

            {/* After Flatlist 2 */}

            <View style={{flexDirection:'row'}}>
              <View><Text style={{fontWeight:'bold'}}>Good Price Item</Text></View>
              <View><Text>View All</Text></View>
            </View>

            {/* Flatlist 3 */}


            <View style={{alignItems:'center', marginHorizontal:wp('2%')}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View>
                       <Image source={{uri: item.image}} resizeMode='stretch' style={styles.flatimages3} />
                      </View>
                     <View><Text style={{}}>Lorem ipsum lorem..</Text></View>
                     <View><Text style={{color:'lightgrey'}}>{item.Price}</Text></View>
                     
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>


            {/* After Flatlis 3 */}

            <View style={{flexDirection:'row'}}>
              <View><Text style={{fontWeight:'bold'}}>Promotion Items</Text></View>
              <View><Text>View All</Text></View>
            </View>

            {/* Flatist 4 */}

            <View style={{alignItems:'center', marginHorizontal:wp('2%')}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View>
                       <Image source={{uri: item.image}} resizeMode='stretch' style={styles.flatimages4} />
                      </View>
                     <View><Text style={{fontWeight:'bold'}}>{item.title}</Text></View>
                     <View><Text style={{color:'grey', fontWeight:'bold'}}>{item.Price}</Text></View>
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>

            {/* After Flatlist 4 */}

            <View style={{flexDirection:'row'}}>
              <View><Text style={{fontWeight:'bold'}}>Products</Text></View>
              <View><Text>View All</Text></View>
            </View>

            {/* Tabs Navigations */}

                <View style={{backgroundColor:'transparent'}}> 
                  <Tabs tabBarUnderlineStyle = {{backgroundColor:"#3FAD72" }} tabContainerStyle = {{backgroundColor:'transparent',borderWidth:1,borderBottomWidth:1, elevation:0 }}>
                    <Tab heading="Brownies" textStyle={{color:"#000", fontWeight:'bold'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                        <View><Brownies  /></View>
                    </Tab>
                    <Tab heading="Tab2" textStyle={{color:"#000",fontWeight:'bold'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                         <View><Text>Tab 2</Text></View>
                    </Tab>
                    <Tab heading="Tab3" textStyle={{color:"#000", fontWeight:'bold'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                          <View><Text>Tab 3</Text></View>
                    </Tab>
                  </Tabs>
                  </View>




    </ScrollView>
  )
}

const styles= StyleSheet.create({
  searchbar:{
    marginHorizontal:hp('2%'),
    borderWidth:1,
    borderRadius:10,
    borderColor:'lightgrey'
  },
  image: {
    height:hp('20%'),
    width:wp('94%'),
    borderRadius:10

  },
    item: {
    width: wp('100%'),
    height: hp('20%'),
    marginTop:hp('2%'),
  },
  logoimages:{
    backgroundColor:'#3FAD72',
    borderRadius:50,
    height:hp('10%'),
    width:wp('20%'),
    justifyContent:'center',
    alignItems:'center',
  },
  flatimages2:{
    marginTop:1,
    height:hp('17%'),
    width:wp('30%'),
    borderRadius:10
  },
  flatimages3:{
    marginTop:1,
    width:hp('16.5%'),
    height:wp('20%'),
    borderRadius:10
  },
  flatimages4:{
    marginTop:1,
    height:hp('18%'),
    width:wp('31%'),
    borderRadius:10
  }

})

export default App;
