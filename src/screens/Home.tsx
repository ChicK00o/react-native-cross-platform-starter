import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeSystem } from 'src/contexts/ThemeContext';
import { View, Text, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemContainer2: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 300,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
})

export const Home = () => {
  const { t } = useTranslation();
  const { theme } = useThemeSystem();
  const [items] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c', scale: 2},
    { name: 'EMERALD', code: '#2ecc71' , scale: 1},
    { name: 'PETER RIVER', code: '#3498db' , scale: 1},
    { name: 'AMETHYST', code: '#9b59b6' , scale: 2},
    { name: 'WET ASPHALT', code: '#34495e' , scale: 1},
    { name: 'GREEN SEA', code: '#16a085' , scale: 1},
    { name: 'NEPHRITIS', code: '#27ae60' , scale: 2},
    { name: 'BELIZE HOLE', code: '#2980b9' , scale: 1},
    { name: 'WISTERIA', code: '#8e44ad' , scale: 1},
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' , scale: 2},
    { name: 'SUN FLOWER', code: '#f1c40f' , scale: 1},
    { name: 'CARROT', code: '#e67e22' , scale: 1},
    { name: 'ALIZARIN', code: '#e74c3c' , scale: 2},
    { name: 'CLOUDS', code: '#ecf0f1' , scale: 1},
    { name: 'CONCRETE', code: '#95a5a6' , scale: 1},
    { name: 'ORANGE', code: '#f39c12' , scale: 2},
    { name: 'PUMPKIN', code: '#d35400' , scale: 1},
    { name: 'POMEGRANATE', code: '#c0392b' , scale: 1},
    { name: 'SILVER', code: '#bdc3c7' , scale: 2},
    { name: 'ASBESTOS', code: '#7f8c8d' , scale: 1},
  ]);

  return (
    <View style={[styles.container, { backgroundColor: theme.palette.background }]}>
      <FlatGrid
      itemDimension={490}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[item.scale === 1 ? styles.itemContainer : styles.itemContainer2, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
      />
      <Text
        style={[styles.text, { color: theme.palette.onBackground }]}
        accessibilityRole="header"
        aria-level="2"
      >
        {t('Home')}
      </Text>
    </View>
  );
};
