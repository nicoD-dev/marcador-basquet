Respuesta a las preguntas de la actividad 2

1: ¿Por que el estado vive en el padre?
Esto es porque se necesita control sobre los contadores desde App.tsx, que no es posible si es los estados estan separados en los hijos.

2: ¿cómo le pasás el onAnotar a cada botón? ¿Por qué no alcanza con onPress={onAnotar}?

Se pasa onAnotar con una funcion =>.
onPress={onAnotar) no indicaria que se debe ejecutar esa funcion. Se romperia el funcionamiento de los botones.
