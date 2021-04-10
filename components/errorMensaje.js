import React , {useState} from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const ErrorMensajeCarga = ({visible,hideDialog}) => {


  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alerta</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Error al cargar la lista, intenta más tarde.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ErrorMensajeCarga;