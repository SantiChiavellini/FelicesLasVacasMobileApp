import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Title } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'

export default function Faq({ navigation }) {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <View style={globalStyles.containerFaq}>
        <View style={globalStyles.faq}>
          <Title style={globalStyles.titleFaq}>Preguntas Frecuentes</Title>
          <List.AccordionGroup >
            <List.Accordion
              id="1"
              title="¿Por qué ser vegano?"
              left={props => <List.Icon {...props} icon="star" />}
            >
              <Text style={globalStyles.firstRes}>
                  Porque el veganismo hace sentir consecuentes el amor y respeto que tenemos 
                  hacia los seres vivos y el planeta.
                  Consideramos que el futuro es vegano, por eso lucharemos para activar 
                  y contagiar con alegría a las demás empresas y personas.
              </Text>
            </List.Accordion>

            <List.Accordion
              id="2"
              title="¿Cuál es un producto vegano?"
              left={props => <List.Icon {...props} icon="star" />}
            >
              <Text style={globalStyles.firstRes}>
                Se considera vegano todo aquel producto cuyos ingredientes 
                y procesos no provengan de animales ni de sus derivados.
              </Text>
            </List.Accordion>

          <Title style={globalStyles.titleFaq}>Formas de pago</Title>
            <List.Accordion
              id="3"
              title="¿Medios de pago?"
              left={props => <List.Icon {...props} icon="star" />}
            >
              <Text style={globalStyles.firstRes}>
              Dinero en Mercado Pago
              Tarjeta de crédito en hasta 12 cuotas
              Tarjeta de débito
              En efectivo en puntos de pago
              </Text>
            </List.Accordion>

            <List.Accordion
              id="4"
              title="¿Es segura mi compra?"
              left={props => <List.Icon {...props} icon="star" />}
            >
              <Text style={globalStyles.firstRes}>
                MercadoPago es la plataforma de pago online líder de América Latina y 
                garantiza la seguridad en todas las operaciones que se generen a través de su sistema. 
                Cuenta con un sistema de privacidad que protege los datos de la tarjeta y con un programa de 
                protección al comprador. Si surgiera algún inconveniente con la compra, 
                la plataforma te devuelve el 100% del dinero.
              </Text>
            </List.Accordion>

          <Title style={globalStyles.titleFaq}>Métodos de envío</Title>
            <List.Accordion
              id="5"
              title="¿Métodos de envío o retiro?"
              left={props => <List.Icon {...props} icon="star" />}
            >
              <Text style={globalStyles.firstRes}>
                El envio a domicilio tiene un costo estimado para envios en capital federal y 
                otro para el interior del país. El retiro personal por nuestro local no tiene costos extras, 
                aún así se encuentra temporalmente suspendido todo retiro de forma personal.
              </Text>
            </List.Accordion>

            <View style={globalStyles.viewQuestion}>
            <List.Accordion
              id="6"
              title="¿Qué documentación uso?"
              left={props => <List.Icon {...props} icon="star" />}
            >
              <Text style={globalStyles.firstRes}>
                Por razones de sanidad en debida conformidad comunitaria, nuestra actividad no se encuentra 
                autorizada a reanudar, por lo tanto, quedan suspendidos los retiros en nuestro local. 
                En el caso de que se requiera una excepción pueden escribirnos a feliceslasvacas@gmail.com 
                para encontrar alternativas y coordinar el despacho.
              </Text>
            </List.Accordion>
            </View>
          </List.AccordionGroup>
        </View>
        <StatusBar style="auto" />
      </View>
      <View>

      </View>
    </>
  );
}

