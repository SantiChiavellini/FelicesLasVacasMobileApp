import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List, Title } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'
import * as Animatable from 'react-native-animatable';


export default function Faq({ navigation }) {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <View style={globalStyles.containerFaq}>
        <View style={globalStyles.faq}>
          <ScrollView>
          <ImageBackground source={require('../assets/BANDA.png')} style={globalStyles.image}>
       
          <Animatable.View
            animation={"slideInDown"}
            duration={2000}
          >
              <Image
              style={globalStyles.logo}
              source={{
                uri:'https://i.postimg.cc/y84JL83W/logo.png'
              }}
            />
        </Animatable.View>
        
        
        </ImageBackground>
          <Title style={globalStyles.titleFaq}>Preguntas Frecuentes</Title>
          <List.AccordionGroup >
            <List.Accordion
              id="1"
              title="¿Por qué ser vegano?"
              left={props => <List.Icon {...props} icon="equal" />}
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
              title="¿Cómo comprar?"
              left={props => <List.Icon {...props} icon="equal" />}
            >
              
              <View style={globalStyles.viewQuestion}>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>1.</Text> Eligí el producto que deseas comprar.</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>2.</Text> Hacé clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>3.</Text> Podes seguir agregando otros productos al carrito o sino hacé clic en "Iniciar Compra".</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>4.</Text> Completá tus datos de contacto e ingresá la dirección a donde deseas recibir tu pedido. Luego hacé clic en "Continuar".</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>5.</Text> Selecciona el método de pago y hacé clic en "Continuar".</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>6.</Text> Eligí el medio de pago "Efectivo"</Text>

              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>7.</Text> IMPORTANTE: El pedido lo abonas cuando lo recibís, no por la página. Podés usar Mercado Pago (débito, crédito plata de tu billetera virtual) con tu teléfono o pagar en Efectivo al delivery.
              Una vez que hayas elegido el medio de pago, haz clic en "Continuar".</Text>

              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>8.</Text> Finalmente en la página de Confirmación de compra puedes revisar toda la información de la compra. Luego hacé clic en "Continuar".</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>9.</Text> Después de confirmar la compra recibirás un correo con el contacto de tu vendedor para coordinar la entrega en los siguientes 5 días habiles.</Text>
              </View >
              
            </List.Accordion>

          <Title style={globalStyles.titleFaq}>Formas de pago</Title>
            <List.Accordion
              id="3"
              title="¿Medios de pago?"
              left={props => <List.Icon {...props} icon="equal" />}
            >
              <View style={globalStyles.viewQuestion}>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>-</Text>Dinero en Paypal.</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>-</Text>Tarjeta de crédito en hasta 12 cuotas.</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>-</Text>Tarjeta de débito.</Text>
              <Text style={globalStyles.howBuyText}><Text style={globalStyles.number}>-</Text> En efectivo al momento de entrega.</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              id="4"
              title="¿Es segura mi compra?"
              left={props => <List.Icon {...props} icon="equal" />}
            >
              <Text style={globalStyles.firstRes}>
                Paypal es la plataforma de pago online líder de América Latina y 
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
              left={props => <List.Icon {...props} icon="equal" />}
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
              left={props => <List.Icon {...props} icon="equal" />}
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
          </ScrollView>
        </View>
        
        <StatusBar style="auto" />
      </View>
      <View>

      </View>
    </>
  );
}

