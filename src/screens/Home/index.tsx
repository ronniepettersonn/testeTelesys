import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import fs from 'fs'
import { Button, Container, TextButton } from "./styles";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { BottomMenu } from "../../components/BottomMenu";

import { parseString } from 'react-native-xml2js'
import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "./components/Input";

export function Home() {
    const [arrayProduto, setArrayProduto] = useState([])
    const [total, setTotal] = useState('')
    const [produtos, setProdutos] = useState([])

    async function handleSOAP() {
        try {
            const xml = `
            <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                <soap:Body>
                <Produtos xmlns="http://localhost/telesysService/pedido.asmx">
                    <strCodEmpresa>${1}</strCodEmpresa>
                </Produtos>
                </soap:Body>
            </soap:Envelope>
            `

            const response = await axios.post('http://66.94.126.138:8080/telesysservice/pedido.asmx', xml, {
                headers: {
                    "Content-Type": "text/xml"
                }
            })

            parseString(response.data, (err: any, results: any) => {
                let data = JSON.stringify(results)

                let newData = JSON.parse(data)

                console.log(newData['soap:Envelope']['soap:Body'][0]['ProdutosResponse'][0]['ProdutosResult'][0]['Produto'], 'DATA AQUI')

                setProdutos(newData['soap:Envelope']['soap:Body'][0]['ProdutosResponse'][0]['ProdutosResult'][0]['Produto'])
            })

        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        const arrayFiltered = arrayProduto.filter(item => item['qtd'] !== 0)

        const totalCalc = arrayFiltered.reduce((acc, b) => {
            return acc + (b['VlrItem'] * b['qtd'])
        }, 0)

        console.log(arrayFiltered, 'VENDO O TOTAL')
    }, [arrayProduto])

    useEffect(() => {
        handleSOAP()
    }, [])

    return (
        <Container>
            <Header />

            {/* <ButtonIcon icon="shopping" title="Pedidos Recebidos" />
            <ButtonIcon icon="archive-alert" title="Pedidos Pendentes" />
            <ButtonIcon icon="truck-delivery" title="Pedidos Entregues" />
            <ButtonIcon icon="shopping" title="Fazer Venda" />
            <ButtonIcon icon="compass" title="GPS" />
            <ButtonIcon icon="tools" title="Configuração" /> */}

            {/* <Button onPress={() => console.log(produtos)}>
                <TextButton>Clique aqui</TextButton>
            </Button> */}

            <ScrollView >
                {
                    produtos.map(item => {
                        return (
                            <View key={item['CodProduto']} style={{ flexDirection: 'row', backgroundColor: '#29292E', marginBottom: 16, borderRadius: 8 }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%' }}>
                                    <Text style={{ color: 'white', padding: 32, flex: 1, fontSize: 18, fontWeight: '700' }}>{item['DscProduto'][0]}</Text>

                                    <View style={{ flexDirection: 'row', marginRight: 32, alignItems: 'center' }}>
                                        <Text style={{ color: 'white', padding: 32, fontSize: 18 }}>R$ {item['VlrItem'][0]}</Text>
                                        <Input setArrayProduto={setArrayProduto} data={item} />
                                        {/*  <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', position: 'relative', marginLeft: 8 }}>
                                            <TouchableOpacity
                                                style={{ position: 'absolute', left: -16, zIndex: 10, borderRadius: '100%', backgroundColor: '#00B37E', height: 28, width: 28, justifyContent: 'center', alignItems: 'center' }}
                                                onPress={() => setQtd(item => Number(item) > 0 ? String(Number(item) - 1) : item)}
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
                                                onPress={() => setQtd(item => String(Number(item) + 1))}
                                            >
                                                <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
                                            </TouchableOpacity>
                                        </View> */}
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>

            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 32 }}>
                <TouchableOpacity style={{ backgroundColor: '#00B37E', padding: 24, borderRadius: 8 }} onPress={() => console.log(arrayProduto)}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: "700" }}>Adicionar Produtos</Text>
                </TouchableOpacity>
            </View>

            <BottomMenu />
        </Container>

    )
}