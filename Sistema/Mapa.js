import React from 'react';
import { Button, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Maps() {
  const [showMaps, setShowMaps] = React.useState(true);

  const handlePressMaps = () => {
    setShowMaps(true);
  };

  const handleHideMaps = () => {
    setShowMaps(true);
  };

  return (
    <View style={{ flex: 1, width: 'auto', height: 'auto',paddingTop: 15 }}>
      {showMaps && (
        <WebView
          source={{
            uri: 'https://www.google.com.br/maps/place/CAMP+SBC+-+Centro+de+Forma%C3%A7%C3%A3o+e+Integra%C3%A7%C3%A3o+Social/@-23.7168673,-46.5774138,17z/data=!4m14!1m7!3m6!1s0x94ce43e040f5671d:0xfc04ccf7315a7786!2sCAMP+SBC+-+Centro+de+Forma%C3%A7%C3%A3o+e+Integra%C3%A7%C3%A3o+Social!8m2!3d-23.7168722!4d-46.5752251!16s%2Fg%2F1hm3k2kbk!3m5!1s0x94ce43e040f5671d:0xfc04ccf7315a7786!8m2!3d-23.7168722!4d-46.5752251!16s%2Fg%2F1hm3k2kbk',
          }}
          style={{ flex: 1 }}
          onNavigationStateChange={(event) => {
            if (
              event.url !==
              'https://www.google.com.br/maps/place/CAMP+SBC+-+Centro+de+Forma%C3%A7%C3%A3o+e+Integra%C3%A7%C3%A3o+Social/@-23.7168673,-46.5774138,17z/data=!4m14!1m7!3m6!1s0x94ce43e040f5671d:0xfc04ccf7315a7786!2sCAMP+SBC+-+Centro+de+Forma%C3%A7%C3%A3o+e+Integra%C3%A7%C3%A3o+Social!8m2!3d-23.7168722!4d-46.5752251!16s%2Fg%2F1hm3k2kbk!3m5!1s0x94ce43e040f5671d:0xfc04ccf7315a7786!8m2!3d-23.7168722!4d-46.5752251!16s%2Fg%2F1hm3k2kbk'
            ) {
              handleHideMaps();
            }
          }}
        />
      )}
      <Text style={{ marginBottom: 20 }}></Text>
    </View>
  );
}
