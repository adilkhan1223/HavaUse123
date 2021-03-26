import React, {useState, useRef, useEffect} from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import {  Header, Left, Icon, Center, Right, Body, Item, Input, } from 'native-base';
import { Container, Tab, Tabs } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel, {Pagination,  ParallaxImage,} from 'react-native-snap-carousel';
import Button from '../components/Button';
import ProductDetailAboutTab from './ProductDetailAboutTab'
import ProductDetailReviewTab from './ProductDetailReviewTab';
import ProductDetailAdttionalInformationTab from './ProductDetailAdttionalInformationTab';

const ENTRIES1 = [
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      illustration: "https://media.istockphoto.com/photos/steering-wheel-picture-id507984911?k=6&m=507984911&s=612x612&w=0&h=Qcr0bGMqXYi2b1rBgjtD8l6eiPXchaSoXS-CjuyHG3E=",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet",
      illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoPg93EpMK7o6-E708DDMOZhkWFFN3c7l5g&usqp=CAU",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat ",
      illustration: "https://media.istockphoto.com/photos/steering-wheel-picture-id167759607?k=6&m=167759607&s=612x612&w=0&h=9kUcA9pkp3Mmm7mLhoQMUUxfuGqHYiDzAvfm7ezmySE=",
    },
     
  ];

  const { width: screenWidth } = Dimensions.get("window");

const ProductDetailtab1= () => {

    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [counter, setCounter]=useState(1);

    const AddCounter=() =>{
        setCounter(counter+1)
    }
    const SubCounter=() =>{
        if(counter==1){

        }

        else{
            setCounter(counter-1)
        }
    }


    const renderItem = ({ item, index }, parallaxProps) => {
        return (
          <View style={styles.item}>
            <Image
              source={{ uri: item.illustration }}
              style={styles.image}  
              resizeMode='contain'    
            />
            <View style={styles.caroselSale}>
                <Text style={{color:'#fff'}}>SALE 3%</Text>
            </View>
          </View>
        );
      };
      useEffect(() => {
        setEntries(ENTRIES1);
      }, []);
  
    return (
        <ScrollView>
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
                  
                    backgroundColor: "#3FAD72",
                  }}
                  inactiveDotStyle={{
                    backgroundColor: "#3FAD72",
                  }}
                  inactiveDotOpacity={0.3}
                  inactiveDotScale={1}
                />
            </View>

          <View style={{marginHorizontal:wp('3%')}}>
                    <View style={{ marginVertical:hp('1%')}} >
                        <Text style={{fontWeight:'bold', fontSize:17}}>Professional Modification of racing Car Steering Wheel</Text>
                    </View>
                    <View style={{ marginVertical:hp('1%')}}>
                        <Text style={{fontSize:19, fontWeight:'bold'}}>$53.00</Text>
                    </View>

                    <View>
                        <Text>Free Shipping Arrives: Tuesday, Nov 21 </Text>
                    </View>

                    <View style={{ marginVertical:hp('1%'), flexDirection:'row'}}>
                        <Icon name='star' style={{fontSize:17, color:'#3FAD72'}} />
                        <Icon name='star' style={{fontSize:17, color:'#3FAD72'}} />
                        <Icon name='star' style={{fontSize:17, color:'#3FAD72'}} />
                        <Icon name='star' style={{fontSize:17, color:'#3FAD72'}} />
                        <Icon name='star' style={{fontSize:17, color:'#3FAD72'}} />
                        <Text> (5000)</Text>
                    </View>
                    
                    <View>
                        <Text style={{color:'lightgrey'}}>Availability: <Text style={{color:'#3FAD72'}}>In stock (12)</Text></Text>
                    </View>

                    <View style={{ marginVertical:hp('2%')}}>
                        <Text style={{fontWeight:'bold'}}>Color</Text>
                    </View>
                
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={styles.color1}></View>
                            <View style={styles.color2}></View>
                            <View style={styles.color3}></View>
                            <View style={styles.color4}></View>
                        </View>

                        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>

                            <TouchableOpacity style={styles.button1} onPress={SubCounter}>
                                <Text>-</Text>
                            </TouchableOpacity>
                                <View style={styles.Countertext}><Text style={{fontWeight:'bold'}}>{counter}</Text></View>
                            <TouchableOpacity style={styles.button1} onPress={AddCounter}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                        {/* Buttons 2 */}
                    <View style={styles.button2}>
                        <Button  title='Buy it Now' />
                    </View>

                    {/* Button 3 */}
                    <View style={{marginTop:hp('1%'), alignSelf:'center'}}>
                    <TouchableOpacity style={styles.Button3}>
                        <Text style={{color:'#3FAD72'}}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                    </View>

                    {/* Button 4 */}

                    <View style={{marginTop:hp('1%'), alignSelf:'center'}}>
                    <TouchableOpacity style={styles.Button4}>
                        <View style={{flexDirection:'row',}}>
                            <Icon name='heart' style={{color:'#FB4B7B', fontSize:19}} />
                            <Text style={{color:'#FB4B7B',}}>
                                Added to Wishlist
                            </Text>
                        </View>
                    </TouchableOpacity>
                    </View>

                    {/* Button 5 */}

                    <View style={{marginTop:hp('1%'), alignSelf:'center'}}>
                    <TouchableOpacity style={styles.Button5}>
                        <View style={{flexDirection:'row',}}>
                            <Icon name='heart' style={{color:'#000', fontSize:19}} />
                            <Text style={{color:'#000',}}> Notify Me</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    {/* Second tabs */}
                            <View>
                                <View style={{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'lightgrey', marginTop:hp('2%')}}> 
                                    <Tabs locked={true} tabBarUnderlineStyle = {{backgroundColor:"#3FAD72",height:2 }} tabContainerStyle = {{backgroundColor:'transparent',borderWidth:1, borderBottomWidth:1, elevation:0 }}>
                                        <Tab heading="About" textStyle={{color:"lightgrey", }} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                                            <View><ProductDetailAboutTab  /></View>
                                        </Tab>
                                        <Tab heading="Additional Information" textStyle={{color:"lightgrey",fontWeight:'900'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                                            <View><ProductDetailAdttionalInformationTab  /></View>
                                        </Tab>
                                        <Tab heading="Reviews" textStyle={{color:"lightgrey",}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                                            
                                            <View><ProductDetailReviewTab  /></View>
                                        </Tab>
                                    </Tabs>
                                </View>
                            </View>

                    {/* FlatList Bottom */}
                    <View style={{marginTop:hp('3%')}}>
                    <Text style={{ fontWeight:'bold', fontSize:16}}>You might also like</Text>
                    </View>
                    <FlatList 
                    data={ENTRIES1}
                    horizontal={true}
                    renderItem={({item, index})=>{
                        return(
                            <View>
                                <View style={styles.flatlistContainer}>
                                        <View style={styles.imageConatiner}>
                                            <Image style={styles.flatlistImage} resizeMode='contain' source={{uri: item.illustration}} />
                                            <View style={{flexDirection:'row'}}>
                                                <View style={styles.onSale}>
                                                    <Text style={{fontSize:11, color:"#fff"}}>On Sale</Text>
                                                </View>
                                                <View style={{marginLeft:wp('18%'), marginTop:hp('1%')}}>
                                                    <Icon name='heart'  />
                                                </View>
                                             </View>   
                                        </View>
                                    <View style={{marginLeft:wp('2.5%')}}>
                                        <View>
                                            <Text style={{fontWeight:'bold', }}>Product Name</Text>
                                        </View>

                                        <View style={{flexDirection:'row',
                                                      alignItems:'center',
                                                      marginVertical:hp('0.8%')}}>
                                            <View style={styles.flatlistbadge}>
                                                <Icon name='star' 
                                                    style={{color:'#fff',
                                                            fontSize:15,
                                                            marginHorizontal:wp('1%')}} 
                                                />
                                                <Text style={{color:'#fff'}}>5.0 </Text>
                                            </View>
                                            <View style={{marginLeft:wp('1.5%')}}>
                                                <Text>(409)</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <Text>$60.00 - $70.00</Text>
                                        </View>
                                    </View>    
                                </View>
                            </View>

                        )
                    }}
                    />

                </View>
          
          
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    image: {
        height:hp('24%'),
        width:wp('94%'),
        borderRadius:10,
        marginTop:'3%',
        position:'absolute'
        
    
      },
      caroselSale:{
          alignSelf:'flex-end',
          height:hp('4.3%'),
          width:wp('20%'),
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#FF0303',
          borderRadius:8,
          marginRight:wp('2%')
              },
        item: {
        width: wp('94%'),
        height: hp('25%'),
        marginTop:hp('2%'),
      },
      color1:{
          height:hp('3%'),
          width:wp('6%'),
          borderRadius:50,
          backgroundColor:'grey'
      },
      color2:{
        height:hp('3%'),
        width:wp('6%'),
        borderRadius:50,
        backgroundColor:'lightblue',
        marginHorizontal:wp('2%')
    },
    color3:{
        height:hp('3%'),
        width:wp('6%'),
        borderRadius:50,
        backgroundColor:'pink'
    },
    color4:{
        height:hp('3%'),
        width:wp('6%'),
        borderRadius:50,
        backgroundColor:'lightgrey',
        marginHorizontal:wp('2%')
    },
    button1:{
        height:hp('3.5%'),
        width:wp('7%'),
        borderWidth:1,
        borderColor:'green',
        alignSelf:'flex-end',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    Countertext:{
        marginHorizontal:wp('3%'),
        justifyContent:'center'
    },
    button2:{
        marginTop:hp('3%'),
        alignSelf:'center'
    },
    Button3:{
        height: hp('9%'),
        width: wp('90%'),
        backgroundColor:'#FFF',
        borderColor:'#3FAD72',
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:18,
    },

    Button4:{
        height: hp('9%'),
        width: wp('90%'),
        backgroundColor:'#FFF',
        borderColor:'#FB4B7B',
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:18,
    },

    Button5:{
        height: hp('9%'),
        width: wp('90%'),
        backgroundColor:'#FFF',
        borderColor:'#000',
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:18,
    },
    flatlistContainer:{
        height:hp('30%'),
        width:wp('44%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        marginHorizontal:wp('1%'),
        marginVertical:hp('3%')
    },
    imageConatiner:{
        width:wp('100%'),
        height:hp('18%'),
    },
    flatlistImage:{
        height:wp('28%'),
        width:wp('43%'),
        position:'absolute',
        marginTop:hp('3%')
    },

    flatlistbadge:{
        flexDirection:'row',
        width:wp('14%'),
        height:hp('3.5%'),
        backgroundColor:'orange',
        borderRadius:7,
        alignItems:'center',
    },
    onSale:{
        height:hp('3.5%'),
        width:wp('14%'),
        backgroundColor:'#FF0303',
        justifyContent:'center',
        borderRadius:10,
        alignItems:'center',
        marginTop:hp('1%'),
        marginLeft:wp('1%')
    }

})

export default ProductDetailtab1;