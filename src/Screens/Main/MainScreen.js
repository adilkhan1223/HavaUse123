import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel, {Pagination,  ParallaxImage,} from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper'



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
    title:'Essentials',
    logo: 'gm',
    imagee: require('../../../issets/checkbox.png')
  },
  {
    title:'New arrivals',
    logo: 'gm',
    imagee: require('../../../issets/energy.png')

  },
  {
    title:'Accessories',
    logo: 'gm',
    imagee: require('../../../issets/path.png')

  },
  {
    title:'Clothing',
    logo: 'gm',
    imagee: require('../../../issets/tshirt.png')

  },
  {
    title:'Electronic',
    logo: 'gm',
    imagee: require('../../../issets/mobile.png')

  },
  {
    title:'Home Products',
    logo: 'gm',
    imagee: require('../../../issets/box.png')

  },
  {
    title:'Beauty',
    logo: 'gm',
    imagee: require('../../../issets/flower.png')

  },
  {
    title:'Auto',
    logo: 'gm',
    imagee: require('../../../issets/steering-wheel.png')

  },
  {
    title:'Tools',
    logo: 'gm',
    imagee: require('../../../issets/tools.png')

  },
  {
    title:'Kids',
    logo: 'gm',
    imagee: require('../../../issets/kids.png')

  }
]


const BestSelling= [
  {
    image:'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T813A648MPA3132PT17X0Y34D1024775329FS2918/views/1,width=378,height=378,appearanceId=648,backgroundColor=F2F2F2,modelId=344,crop=list/how-do-you-keep-idiot-entertained-for-hours-tshirt-womens-premium-t-shirt.jpg',
   title: 'Women T-shirt',
   Price:'$24.00',
  },
  {
    image:'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T686A229MPA3026PT17X39Y68D1016581836FS2951/views/1,width=378,height=378,appearanceId=229,backgroundColor=F2F2F2,modelId=1994,crop=list/cool-funny-art-cartoon-illustrator-best-selle-mens-v-neck-t-shirt.jpg',
   title: 'Male T-Shirt',
   Price:'$24.00',
  },
  {
    image:'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T951A739MPA3076PT17X42Y30D1016843965FS1967/views/1,width=378,height=378,appearanceId=739,backgroundColor=F2F2F2/there-is-no-finish-line-quote-logo-art-t-shirt-unisex-baseball-t-shirt.jpg',
   title: 'Male T-Shirt',
   Price:'$54.00',
  },
  {
    image:'https://i.pinimg.com/236x/3b/9e/ec/3b9eecc9ce2e68d7cee3c699699f9c57.jpg',
   title: 'Women T-Shirt',
   Price:'$44.00',
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
   title: 'Male T-Shirt',
   Price:'62.00',
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo55BzgQWOmyScAZsMHdZePZ8Wdmtr8e6xPA&usqp=CAU',
   title: 'Women T-Shirt',
   Price:'$34.00',
  },
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

const data3= [
  {
    image:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   title: 'Limited Time Sale',
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
   title: 'Recently Added',
  },
  {
    image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
   title: 'Trending',
  },
  {
    image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
   title: 'Featured Brands',
  },
  
]

const CategoryShop= [
  {
    image:require('../../../issets/hoodie.png'),
   title: 'Hoodies & Sweatshirts',
  },
  {
    image: require('../../../issets/jeans.png'),
   title: 'Jeans',
  },
  {
    image:require('../../../issets/two-piece.png'),
   title: 'T-Shirts & Tanks',
  },
  {
    image:require('../../../issets/two-piece.png'),
   title: 'Two-Piece Outfits',
  },

  {
    image:require('../../../issets/shirts.png'),
   title: 'Shirts',
  },
  {
    image:require('../../../issets/pants.png'),
   title: 'Pants',
  },
  {
    image:require('../../../issets/jackets.png'),
   title: 'Coats &  Jackets',
  },
  {
    image:require('../../../issets/shorts.png'),
   title: 'Shorts',
  },
  
]


const { width: screenWidth } = Dimensions.get("window");


 const Main3=()=> {
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
  return (
    <ScrollView style={{backgroundColor:'#FFF'}}>
          <Header style={{backgroundColor:'transparent', elevation:0}}>
           <Left style={{flex:0.3}}>
            < Icon name='menu' />
           </Left>

           <Body style={{width:'80%', alignItems:'center'}}>
                <Image style={{width:wp('40%'), height:hp('3%')}} resizeMode='contain' source={require('../../../issets/Main.png')} />
           </Body>

           <Right style={{flex:0.3}}>
             <Icon style={{color:'#3FAD72'}} name='cart'   />            
           </Right>
          </Header>

          {/* *************End of Header******* */}
        
        <View style={{marginHorizontal:wp('2%')}}>
           {/*  <= parent View  */}
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center' }}>
              <View style={styles.inputsearch}>
                  <View style={{marginHorizontal:wp('2%')}}><Icon name='search'  /></View>
                  <View>
                    <TextInput  style={styles.textinput}
                      placeholder='Search'
                    />
                  </View>
                  <View><Icon name='microphone-outline'  type="MaterialCommunityIcons" /></View>
                  <View><Icon style={{fontSize:25}} name='camera' type="SimpleLineIcons" /></View>
              </View>
                  <View style={{marginLeft:wp('2%')}}>
                    <Icon name='scan1' type="AntDesign" />
                  </View>
            </View>

            {/* End of search bar row */}

            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:hp('1%')}}>
                <View style={{flexDirection:'row'}}>
                  <View style={styles.logobutton1}>
                    <Image source={require('../../../issets/adjust.png')} />
                  </View>
                  <View style={styles.logobutton1}>
                  <Image source={require('../../../issets/order.png')} />
                  </View>

                </View>
                <View style={styles.logo1}>
                  <Image  source={require('../../../issets/bemo.png')}  />
                </View>
            </View>
            {/* End Of 2nd Row */}

            <View>
              <View style={styles.logo2}>
                <Image style={{width:wp('75%'), }}   source={require('../../../issets/plus.png')} />
              </View>
            </View>

            {/* End of main Logo */}
            {/* And Start of carousel */}

            <View style={{alignItems:'center',}}>
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

            {/* End of Carousel */}

          </View>
            {/* start of menu in FlatList */}

            <View style={{alignItems:'center', }}>
              <FlatList 
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{alignItems:'center', width:wp('22%')}}> 
                     <View style={styles.logoimages}><Image source={ item.imagee} /></View>
                     <View style={{alignItems:'center'}}><Text style={{fontSize:11}}>{item.title}</Text></View>
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>
          <View style={{marginHorizontal:wp('2%')}}>
            {/* End of menu FlatList */}

            {/* Start of Recent View Flatlist  */}

            <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           
                           marginTop:hp('2%')}}>
              <View><Text style={{fontWeight:'bold', color:'#5E5E5E'}}>Recent View</Text></View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#3FAD72',}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:15, paddingLeft:4, marginRight:2,}} name="right" type="AntDesign" />
              </View>
            </View>


            <View style={{alignItems:'center'}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginRight:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View>
                       <Image source={{uri: item.image}}  style={styles.flatimages2} />
                      </View>
                     <View><Text style={{fontWeight:'bold'}}>{item.title}</Text></View>
                     <View style={{flexDirection:'row'}}>
                     <Icon style={{fontSize:16 , color:'#3FAD72'}} name='truck-fast-outline' type="MaterialCommunityIcons" />
                       <Text style={{color:'lightgrey'}}>{item.Shipping}</Text>
                      </View>
                     <View><Text style={{color:'grey' , fontWeight:'bold'}}>{item.Price}</Text></View>
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>

            {/* End of Recnt View FlatList */}

            {/* WEEDMAPS CLOTHING BUTTON */}

              <View>
                <TouchableOpacity style={styles.weedButton}>
                  <View>
                      <Image source={require('../../../issets/Mainbutton.png')} />
                  </View>
                  <View>
                    <Text style={{color:'#FFF', textAlign:'center'}}>BUY</Text>
                    <Text style={{color:'#FFF', fontWeight:'bold', fontSize:18}}>WEEDMAPS CLOTHING</Text>
                    <Text style={{color:'#FFF', textAlign:'center'}}>store.address.com</Text>
                  </View>

                </TouchableOpacity>
              </View>


          {/* End of WeedClothing button */}

          {/* Start Of Good Price Accessories Item Flatlist */}

          <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           
                           marginTop:hp('2%')}}>
              <View><Text style={{fontWeight:'bold', color:'#5E5E5E'}}>Good Price Accessories</Text></View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#3FAD72',}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:15, paddingLeft:4, marginRight:2,}} name="right" type="AntDesign" />
              </View>
            </View>

            <View style={{alignItems:'center',}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View>
                       <Image source={{uri: item.image}} style={styles.flatimages3} />
                      </View>
                     <View><Text style={{}}>Lorem ipsum lorem..</Text></View>
                     <View><Text style={{color:'lightgrey'}}>{item.Price}</Text></View>
                     
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>

            {/* End of Good Price accessories Flatlist */}
              
              {/* start of Promotion item Flatlist */}

              <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           
                           marginTop:hp('2%')}}>
              <View>
                <Text style={{fontWeight:'bold', color:'#5E5E5E'}}>Promotion Items</Text>
                <Icon style={{color:'#3FAD72',fontSize:27,}} name="arrow-back-circle-outline" type="Ionicons" />
              </View>
              <View style={{ alignItems:'center', paddingRight:5}}>
                <Text style={{color:'#3FAD72',}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:27, alignSelf:'flex-end'}} name="arrow-forward-circle-outline" type="Ionicons" />
              </View>
            </View>


            <View style={{alignItems:'center',}}>
              <FlatList 
              data={data2}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginHorizontal:wp('1.5%'),marginVertical:hp('1%')}}> 
                      <View style={{height:hp('18%'), width:wp('31%'),}}>
                       <Image source={{uri: item.image}} style={styles.flatimages4} />
                       <View style={styles.flat4discount}><Text>15%</Text></View>
                      </View>
                     <View><Text style={{fontWeight:'bold'}}>{item.title}</Text></View>
                     <View style={{flexDirection:'row'}}>
                       <Text style={{color:'grey', fontWeight:'bold'}}>{item.Price}</Text>
                       <Icon style={{fontSize:18 , paddingLeft:3, color:'#3FAD72'}} name='truck-fast-outline' type="MaterialCommunityIcons" />
                     </View>

                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>

            {/* End Of promotion item Flatlist */}
            {/* Start of new in gadget verical flatlist */}

            <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           marginTop:hp('2%')}}>
              <Text style={{fontWeight:'bold', color:'#5E5E5E'}}>New in Gadgets</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#3FAD72',}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:15, paddingLeft:4, marginRight:2,}} name="right" type="AntDesign" />
              </View>
            </View>


            <FlatList
              data={data3}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View>
                   <View style={styles.gadgetcontainer}> 
                      <View style={{height:hp('14%'), width:wp('47%'),}}>
                       <Image source={{uri: item.image}} style={styles.newGadgetimage} />
                      </View>
                     <View><Text style={{fontWeight:'bold', paddingLeft:6}}>{item.title}</Text></View>
                     
                   </View>
                                                    
                  </View> 
              )}
            />

            {/* End of Gadget FlatList */}

            {/* 2ND Carousel Start */}

            <View style={{alignItems:'center',}}>
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


            {/* End Of 2nd Carousel */}

            {/* Best Selling FlatList Start */}

            <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           
                           marginTop:hp('2%')}}>
              <Text style={{fontWeight:'bold', color:'#5E5E5E'}}>Best Selling</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#3FAD72',}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:15, paddingLeft:4, marginRight:2,}} name="right" type="AntDesign" />
              </View>
            </View>



            <View style={{alignItems:'center'}}>
              <FlatList 
              data={BestSelling}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) =>{
                return (
                  <View>
                   <View style={{marginRight:wp('2%'),marginVertical:hp('1%')}}> 
                      <View>
                       <Image source={{uri: item.image}}  style={styles.flatimages5} />
                      </View>
                     <View><Text style={{fontSize:12, color:'grey'}}>{item.title}</Text></View>
                     <View><Text style={{color:'grey' , fontSize:12}}>{item.Price}</Text></View>
                   </View>
                                                    
                  </View>                  
                )
              }}                                       
              />
            </View>


            {/* End of Best selling FlatList */}

            {/* Start Of Shop of category Flatlist */}
            <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           marginTop:hp('2%'), marginBottom:hp('1%')}}>
              <Text style={{fontWeight:'bold', color:'#5E5E5E'}}>Shop by Category</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#3FAD72',}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:15, paddingLeft:4, marginRight:2,}} name="right" type="AntDesign" />
              </View>
            </View>


            <FlatList
              data={CategoryShop}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View>
                   <View style={styles.gadgetcontainer1}> 
                      <View style={{height:hp('12.5%'), width:wp('23.5%')}}>
                       <Image source={item.image} style={styles.newGadgetimage1} />
                      </View>
                       <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                       <Text style={{fontWeight:'bold', textAlign:'center'}}>{item.title}</Text>
                      </View>
                     
                   </View>
                                                    
                  </View> 
              )}
            />

            {/* End of Shop by Category FlatList */}

            <View style={{flexDirection:'row',
                           justifyContent:"space-between",
                           marginHorizontal:wp("3%"),
                           marginTop:hp('2%')}}>
              <Text style={{fontWeight:'bold', color:'#5E5E5E'}}>Recommended Projects Guide</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#3FAD72',}}>View All</Text>
                <Icon style={{color:'#3FAD72',fontSize:15, paddingLeft:4, marginRight:2,}} name="right" type="AntDesign" />
              </View>
            </View>

            {/* Bottom Slideerrrr */}


            <View style={styles.imageSliderbottom}>
                    <Swiper style={styles.wrapper} showsButtons={true} showsPagination={false}>
                      {ENTRIES1.map && ENTRIES1.map( (item, i) => {
                            return(
                              <View style={{width:wp('100%')}}>
                                <Image
                                  style={{
                                    height:hp('25%'),
                                    width:wp('96%'),
                                    borderRadius:10
                                }}
                                  
                                  source={{uri: item.illustration}}
                                  
                                  
                                />
                              </View>)
                              })
                            } 
                    </Swiper>
                  </View>




          {/* <= End of parent View   */}
        </View>   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputsearch:{
    width:wp('83%'),
    height:hp('7%'),
    borderWidth:1,
    borderRadius:10,
    borderColor:'lightgrey',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:8

  },
  textinput:{
    width:wp('47%')
  },
  logobutton1:{
    height:hp('6%'),
    width:wp('16%'),
    backgroundColor:'#3FAD72',
    borderRadius:10,
    marginRight:wp('2%'),
    justifyContent:'center',
    alignItems:'center'
  },
  logo1:{
    width:wp('57%'),
    height:hp('6%'),
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#3FAD72'
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
    height:hp('8%'),
    width:wp('16%'),
    justifyContent:'center',
    alignItems:'center',
  },

  flatimages2:{
    marginTop:1,
    height:hp('17%'),
    width:wp('30%'),
    borderRadius:10
  },
  weedButton:{
    marginTop:hp('2%'),
    width:wp('96%'),
    height:hp('10%'),
    backgroundColor:'#3FAD72',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
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
    borderRadius:10,
    position:'absolute'
  },
  flat4discount:{
    height:hp('3%'),
    width:wp('10%'),
    backgroundColor:'orange',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:'7%',
    marginRight:'7%',
    alignSelf:'flex-end'
  },
  newGadgetimage:{
    marginTop:1,
    height:hp('12%'),
    width:wp('47%'),
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  gadgetcontainer:{
    marginRight:wp('1.5%'),
    marginVertical:hp('1%'),
    backgroundColor:'#F5F5F5',
    paddingBottom:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },

  flatimages5:{
    marginTop:1,
    height:hp('17%'),
    width:wp('30%'),
    borderRadius:10
  },

  newGadgetimage1:{

    marginTop:1,
    marginBottom:2,
    height:hp('12%'),
    width:wp('47%'),
    borderRadius:10,
    position:'absolute'
  },
  gadgetcontainer1:{
    width:wp('47%'),
    marginRight:wp('1.5%'),
    marginVertical:hp('0.5%'),
    backgroundColor:'#FFF',
    flexDirection:'row',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#F1F1F1'
  },

  imageSliderbottom:{
    height:hp('25%'),
    marginVertical:hp('2%'),  
    borderRadius:10 
  },
  logo2:{
    width:wp('96%'),
    height:hp('9%'),
    borderWidth:1,
    borderRadius:10, 
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#3FAD72',
    marginTop:hp('1%')
  }

})

export default Main3;