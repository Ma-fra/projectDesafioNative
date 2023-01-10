import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(`Erro ao remover todos os dados`);
    }
};

export { storeData, clearStorage };