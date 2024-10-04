import { StyleSheet, Text, View,Image, ScrollView, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <SafeAreaView style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:1,backgroundColor:'#CB6040',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>David Raya/ Kaleci</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Neto/ Kaleci</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>William Saliba/ Stoper</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Gabriel Magalhaes/ stoper</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Ricardo Calafirio/ stoper</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Jakub Kiwior/ stoper</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Oleksandr Zinchenko/ sol bek</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Kieran Tierney/ sol bek</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Ben White/ sağ bek</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Takehiro Tomiyasu/ sağ bek</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'900',}}>Gabriel Jesus/ santrafor</Text>
      </View>
      <View style={{flex:1,backgroundColor:'#F2E5BF', justifyContent:'center', alignItems:'flex-start'}}>
        <Image source={{uri:'./assets/images/davidRaya.jfif'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/LuisNeto.jfif'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/williamSaliba.jfif'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/gabrielMagalhaes.jfif'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/ricardoCalafiori.jpeg'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/JakubKiwior.jpeg'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/OleksandrZinchenko.jpeg'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/KieranTierney.jpeg'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/BenWhite.jpeg'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/takehiroTomiyasu.jpeg'}} style={{height:100,width:100,borderRadius:10}}/>
        <Image source={{uri:'./assets/images/GabrielJesus.jpeg'}} style={{height:100,width:100,borderRadius:10}}/>
      </View>
      <View style={{flex:1,backgroundColor:'#FFD09B',justifyContent:'space-between'}}>
        <Button title='Puan Durumu' color='#507687'></Button>
        <Button title='Maç Sonuçları' color='green'></Button>
        <Button title='İstatistikler' color='#697565'></Button>
        <View style={{flex:0.5,backgroundColor:'#257180',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:30,fontWeight:'900',alignItems:'center'}}>ARSENAL FC</Text>
        <Image source={{uri:'./assets/images/Arsenal_Logo.png'}} style={{height:450,width:450,}} />
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
