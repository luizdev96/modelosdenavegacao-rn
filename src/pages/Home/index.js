import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  function carregaDetalhes(){
    navigation.navigate("Detalhes");
    console.log("navegou...")
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20}}>Home</Text>
      <Button 
      title="Ir para deatlhes" onPress={carregaDetalhes}/>
    </View>
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
