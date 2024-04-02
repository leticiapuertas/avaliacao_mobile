import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#0077b6',
  },
  campo_de_texto: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 16,
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  input_text: {
    flex: 1,
    height: 80,
    color: '#FFF',
    fontSize: 22,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#caf0f8',
    marginRight: 5,
  },
  botao: {
    width: 56,
    borderRadius: 10,
    fontSize: 50,
    backgroundColor: '#219ebc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem_principal: {
    height: 100,
    width : '100%',
  },
  imagem: {
    width: 50,
    height: 50
  },
  lista:{
    paddingLeft: 20,
    paddingRight: 20
  }
})