import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text, 
    Pressable, 
    Linking
} from 'react-native'

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104464892?s=400&u=e4c51585e9f3169b1b65ec40e765cec9621f4cd0&v=4';

const urlToMyGithub = 'https://github.com/SandraLima03';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo link.....');
            await Linking.openURL(urlToMyGithub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image style={style.avatar} source={{uri: imageProfileGithub}} />
                <Text accessibilityLabel="Nome: sandra lima" style={[style.defaultText, style.name]}>Sandra Lima</Text>
                <Text accessibilityLabel="Nickname: sandra lima03" style={[style.defaultText, style.nickname]}>SandraLima03</Text>
                <Text accessibilityLabel="Descricão: Estudante de engennharia de software na faculdade Unicesumar."style={[style.defaultText, style.description]}>
                    Estudante de engennharia de software na faculdade Unicesumar.
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textbutton]} >Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { // Column
        backgroundColor: colorGithub, 
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,

    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 14,
    },
    textbutton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
  
});