import { Alert } from "react-native";

export function showErrorMessage(error) {
    Alert.alert("Erro", error.response?.data?.message || "Erro inesperado!");
}