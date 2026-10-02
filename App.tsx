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
{/*Se calcula el estado (empate o ganador)*/}
  const diferencia = Math.abs(countLocal-countVisit);

  {/*Nombres de equipos*/}
  const nombreLocal= 'Equipo local';
  const nombreVisit= 'Equipo visitante';

  {/*Se define empate como el estado default del partido */}
  let estado = 'Empate';
  if (countLocal > countVisit) {
    estado = `Gana ${nombreLocal} por ${diferencia}`
  } else if (countVisit > countLocal) {
    estado = `Gana ${nombreVisit} por ${diferencia}`
  }

  {/*Se activa PartidoNuevo si el contador no es 0 para ambos equipos*/}
  const PartidoNuevo = countLocal === 0 && countVisit === 0;


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
          nombre= {nombreLocal}
          puntos={countLocal}
          color='blue'
          onAnotar={(a) => anotar('local', a)}
          ganando={countLocal > countVisit}
          />

      {/*Marcador de equipo visitante*/}
     
      <PanelEquipo
        nombre={nombreVisit}
        puntos={countVisit}
        color='green'
        onAnotar={(b) => anotar('visitante', b)}
        ganando={countVisit > countLocal}
        />
      </View>
      <Text style={styles.estadoText}>{estado}</Text>
      {/*Boton que reinicia los contadores*/}
        <Button title='Nuevo partido' onPress={() => [setCountVisit(0), setCountLocal(0)]} disabled={PartidoNuevo} />
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
  estadoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 13,
    color:'#511368'
  }
});
