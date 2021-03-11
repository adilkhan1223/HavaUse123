// import React, { useState, useRef } from 'react'
// import { View, Text, StyleSheet, Image } from 'react-native';
// import {  Header, Left, Icon, Center, Right, Body, Item, Input, } from 'native-base';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import {Carousel,  Pagination, } from 'react-native-snap-carousel';

// const App= () => {
//   const carouselRef = useRef(null);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [carousel, setCarousel]= useState(
//      [
//     {
//         title:"Item 1",
//         text: "Text 1",
//     },
//     {
//         title:"Item 2",
//         text: "Text 2",
//     },
//     {
//         title:"Item 3",
//         text: "Text 3",
//     },
//     {
//         title:"Item 4",
//         text: "Text 4",
//     },
//     {
//         title:"Item 5",
//         text: "Text 5",
//     },
//   ]
// )

// const _renderItem=({item,index}) =>{
//   return (
//     <View style={{
//         backgroundColor:'floralwhite',
//         borderRadius: 5,
//         height: 250,
//         padding: 50,
//         marginLeft: 25,
//         marginRight: 25, }}>
//       <Text style={{fontSize: 30}}>{item.title}</Text>
//       <Text>{item.text}</Text>
//     </View>

//   )
// }

//   return (
//     <View>
//       <Header style={{backgroundColor:'transparent', elevation:0}}>
//         <Left style={{flex:0.3}}>
//             <Icon name='menu' />
//         </Left>
//         <Body style={{width:'80%', alignItems:'center'}}>
//             <Image source={require('./issets/logopluss.png')} />

//         </Body>
//         <Right style={{flex:0.3}}>
//             <Icon name="cart"  />
//         </Right>

//       </Header>
//       <View style={styles.searchbar}>
//       <Item>
//           <Icon name="ios-search" style={{padding: 10,}} />
//             <Input placeholder="Search" />
//           </Item>
//       </View>

//       <View>
//       <Carousel
//                   layout={"default"}
//                   // ref={ref => this.carousel = ref}
//                   data={carousel}
//                   sliderWidth={300}
//                   itemWidth={300}
//                   renderItem={_renderItem}
//                    />
//       </View>

//       <Pagination
//         dotsLength={carousel.length}
//         activeDotIndex={activeSlide}
//         containerStyle={{ backgroundColor: "#E1E1E1" }}
//         dotContainerStyle={{
//           marginHorizontal: 2,
//         }}
//         dotColor={"rgba(247, 202, 24, 1)"}
//         dotStyle={{
//           width: 6,
//           height: 6,
//           borderRadius: 3,

//           backgroundColor: "rgba(240, 255, 0, 1)",
//         }}
//         inactiveDotStyle={{
//           backgroundColor: "silver",
//         }}
//         inactiveDotOpacity={0.6}
//         inactiveDotScale={1}
//       />
//     </View>
//   )
// }

// const styles= StyleSheet.create({
//   searchbar:{
//     marginHorizontal:hp('2%'),
//     borderWidth:1,
//     borderRadius:10,
//     borderColor:'lightgrey'
//   }

// })

// export default App;
