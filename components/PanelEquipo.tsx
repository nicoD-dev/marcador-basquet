import React from 'react';
import { Text, View, Button } from 'react-native';

{/*Define las variables que tiene que recibir PanelEquipo*/}
interface PanelEquipoProps {
    nombre: string
    puntos: number
    color: string
    onAnotar: (puntos: number) => void
    ganando: boolean
};
{/*Extrae las variables de props*/}
export default function PanelEquipo({ nombre, puntos, color, onAnotar, ganando}: PanelEquipoProps) {
    return (
        <View style={{
            margin:20,
            alignItems:'center',
            paddingHorizontal: 7,
            borderWidth: ganando ? 5:0,
            borderColor: color,
            paddingVertical: 2,
            borderRadius: 10
            }}>
            {/*Style define la separacion de los botones de los dos equipos*/}
            {/*Borderwidth pregunta si ganando es true o false, y dibuja un borde de 5 o 0 pixeles del color correspondiente*/}
            <Text style={{fontSize:20, color:color}} >
                {nombre}: {puntos}
            </Text>
            
            <View style={{flexDirection:'column', gap: 7, marginTop: 8, width: 150}}>
             <Button title='+1' color={color} onPress={() => onAnotar(1)} />
             <Button title='+2' color={color} onPress={() => onAnotar(2)} />
             <Button title='+3' color={color} onPress={() => onAnotar(3)} />
            </View>
        </View>
    );

}