import AsyncStorage from '@react-native-async-storage/async-storage';

const StoreData = {
    setToken: async (value) => {
        try {
            await AsyncStorage.setItem('@Token', value)
        } catch (e) {
            return false;
        }
    },
    getToken: async () => {
        try {
            const value = await AsyncStorage.getItem('@Token')
            return value;
        } catch (e) {
            return false;
        }
    },
    removeToken: async () => {
        try {
            await AsyncStorage.removeItem('@Token')
            return true;
        } catch (e) {
            return false;
        }
    }
}

export default StoreData;
