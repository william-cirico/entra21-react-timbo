import { Alert } from "react-native";

export function showErrorMessage(error, errorTitle, customErrorMessage) {
    Alert.alert(errorTitle, error.response?.data?.message || customErrorMessage);
}