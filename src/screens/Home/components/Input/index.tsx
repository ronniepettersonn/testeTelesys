import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

export function Input({ setArrayProduto, data }: any) {
    const [qtd, setQtd] = useState('0')

    function handleDimunuiQtd() {
        setQtd((item: any) => Number(item) > 0 ? String(Number(item) - 1) : item)
        const newQtd = Number(qtd) > 0 ? String(Number(qtd) - 1) : qtd

        if (qtd !== '0') {
            const newProduto = {
                CodProduto: data["CodProduto"][0],
                DscProduto: data["DscProduto"][0],
                VlrItem: Number(data["VlrItem"][0]),
                qtd: Number(newQtd)
            }

            setArrayProduto(item => [...item, newProduto])
            console.log(newProduto, 'NOVO PRODUTO')
        }


    }

    function handleAumentaQtd() {
        setQtd(item => String(Number(item) + 1))
    }

    return (
        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', position: 'relative', marginLeft: 8 }}>
            <TouchableOpacity
                style={{ position: 'absolute', left: -16, zIndex: 10, borderRadius: '100%', backgroundColor: '#00B37E', height: 28, width: 28, justifyContent: 'center', alignItems: 'center' }}
                onPress={handleDimunuiQtd}
            >
                <Text style={{ color: 'white', fontSize: 24 }}>-</Text>
            </TouchableOpacity>
            <TextInput
                style={{ padding: 24, borderRadius: 8, color: 'white', fontSize: 18 }}
                value={qtd}
                readOnly
            />
            <TouchableOpacity
                style={{ position: 'absolute', right: -16, zIndex: 10, borderRadius: '100%', backgroundColor: '#00B37E', height: 28, width: 28, justifyContent: 'center', alignItems: 'center' }}
                onPress={handleAumentaQtd}
            >
                <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}