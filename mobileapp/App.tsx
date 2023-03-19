import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import MediaPlayer from './src/screens/MediaPlayer';

export default function App() {
  const [permissions, setPermissions] = useState<boolean>(false);

  const getPermissions = async () => {
    return await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
  };

  async function readPermissions() {
    const allPermissionsGranted = getPermissions().then(res => {
      if (
        res['android.permission.READ_EXTERNAL_STORAGE'] === 'granted' &&
        res['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        return true;
      }
    });

    if (await allPermissionsGranted) {
      setPermissions(true);
    }
  }

  useEffect(() => {
    if (!permissions) {
      readPermissions();
    }
  }, [permissions]);

  return (
    <>
      {permissions ? (
        <MediaPlayer />
      ) : (
        <View style={styles.container}>
          <Text style={styles.item}>Dar permissões</Text>
          <Button title="Requisitar" onPress={readPermissions} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
