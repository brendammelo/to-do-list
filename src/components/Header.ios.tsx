import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface ToDarkTheme{
  darkTheme: boolean
}

export function Header({darkTheme}: ToDarkTheme) {
  return (
    <SafeAreaView style={[styles.container, darkTheme && {backgroundColor: '#191932'}]}>
      <View style={[styles.header, darkTheme && {backgroundColor: '#191932'}]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
