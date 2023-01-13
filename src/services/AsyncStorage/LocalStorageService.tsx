import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

// const storeLocalData = async (key: string, value: any) => {
//     try {
//       await AsyncStorage.setItem('@storage_Key', value)
//     } catch (e) {
//       // saving error
//     }
//   }

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        Alert.alert(`Você foi deslogado com sucesso!`)
    } catch (error) {
        console.log(`Erro ao remover todos os dados`);
    }
};

export { clearStorage };