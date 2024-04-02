import { View, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { estilo } from "./style.jsx";
import Card from "../../component/card/index.jsx";

export default function Home(){

    const lista = ['lilo', 'stitch', 'teste', 'avaliacao']

    return(
        <View style={estilo.tela}>
           <Image
                source={require('../../assets/lilo.png')}
                style={estilo.imagem_principal}
            />
            <View style={estilo.campo_de_texto}>
                <TextInput style={estilo.input_text}/>
                <TouchableOpacity style={estilo.botao}>
                    <Image
                        style={estilo.imagem}
                        source={require('../../assets/lupa.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={estilo.lista}>
                <FlatList 
                    data={lista}
                    keyExtravtor={item => item}
                    renderItem={({item}) =>(
                    <Card key={item} name={item}/>
                    )}
                />
            </View>
        </View>
        
    )
}