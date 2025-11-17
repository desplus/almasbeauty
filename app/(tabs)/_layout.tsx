import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import { View, Platform, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';

export default function HomeScreen() {

  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBackgroundColorAsync('#000');

    StatusBar.setHidden(true);

    SplashScreen.hideAsync();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      
      <WebView
        source={{ uri: "https://tehranapp.click/be/v141.html" }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowsFullscreenVideo={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
