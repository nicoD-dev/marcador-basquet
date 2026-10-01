import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PanelEquipo from './components/PanelEquipo';

{/*Se define el parametro de 2 equipos*/}
type Equipo = 'local' | 'visitante';
export default function App() {
  {/*Variables usadas para contar los puntos*/}
  const [countLocal, setCountLocal] = useState<number>(0)
  const [countVisit, setCountVisit] = useState<number>(0)


  {/*Se realiza el calculo de puntos*/}
  const anotar = (equipo: Equipo, puntos: number) => {
    if (equipo === 'local')
    {
      setCountLocal(prev => prev + puntos);
    } else if (equipo === 'visitante') {
      setCountVisit(prev => prev + puntos);
    }
  };
  {/*Setea las variables a 0*/}
  const nuevoPartido = ( ) => {
    setCountLocal(0);
    setCountVisit(0);
  };

  return (
      <View style={styles.container}>
        {/*se asegura de mantener el status bar del telefono igual que los settings del sistema*/}
        <StatusBar style='auto' />
        {/*Alinea las columnas de forma horizontal*/}
        <View style={{flexDirection:'row', justifyContent: 'center', width: '100%', paddingHorizontal: 10}}>

        {/*Marcador de equipo local*/}
        <PanelEquipo
          nombre='Equipo local'
          puntos={countLocal}
          color='blue'
          onAnotar={(a) => anotar('local', a)}
          />

      {/*Marcador de equipo visitante*/}
     
      <PanelEquipo
        nombre='Equipo visitante'
        puntos={countVisit}
        color='green'
        onAnotar={(b) => anotar('visitante', b)}
        />
      </View>
      {/*Boton que reinicia los contadores*/}
        <Button title='Nuevo partido' onPress={() => [setCountVisit(0), setCountLocal(0)]}></Button>
      </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
